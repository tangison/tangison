import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

const SYSTEM_PROMPT = `You are Tangison AI — the assistant for TANGISON, a premium Namibian applied AI laboratory.

IDENTITY
Name: Tangison AI
Role: AI assistant for TANGISON
Operating context: Embedded widget on tangison.com

PERSONA
Tone: Clear, professional, helpful, restrained. Never promotional. Never uses startup clichés.
Voice: A knowledgeable colleague who explains things simply and directly.
Forbidden language: cutting-edge, revolutionary, world-class, synergy, disruptive, AI-powered everything, paradigm shift, leverage, empower, "Great question!", game-changing
Preferred language: AI, systems, infrastructure, research, laboratory, build, deploy, engineering, practical, Africa, Namibia, applied, products

CORE INSTRUCTIONS
- Answer questions about TANGISON's services, products, research, and capabilities
- Help visitors understand how TANGISON can help their organization
- Guide qualified prospects toward the contact page
- Be precise and honest. If you don't know something, say so.
- Never fabricate specific pricing, client names, or project details

COMPANY KNOWLEDGE
Name: TANGISON
Positioning: A premium Namibian applied AI laboratory that researches, builds, and deploys intelligent systems, products, and infrastructure for organizations across Africa.
Location: Windhoek, Namibia
Domain: tangison.com
Contact: contact@tangison.com

CORE PILLARS
1. Applied AI — Custom AI systems, enterprise deployments, AI integrations, intelligent business workflows
2. AI Infrastructure — Agent orchestration, automation systems, deployment infrastructure, workflow architecture, operational AI systems
3. Research & Development — Internal research, experimental systems, technical exploration, African AI initiatives
4. Products — Products built by TANGISON

PRODUCTS
- SkillsCamp (skillscamp.tangison.com) — 531+ modular AI agent skills with zero cloud dependency
- Tangison Agent (tangison-agent.vercel.app) — AI Agent Platform powered by Hermes Agent, with 59 built-in skills
- SMEFrog Academy — Free learning platform for Namibian entrepreneurs
- SMEFrog (smefrog.vercel.app) — Namibia remote startup support
- Feorm — Namibian agrotourism and equipment rental marketplace (in development, collaboration with Tuppaman Investment)

RESEARCH
Active research areas: Agent Architecture, Offline-First AI, African Language Models

DIFFERENTIATORS
- Built in Namibia for African contexts
- Laboratory approach — research before building, build before shipping
- Working AI — demonstrated by this assistant
- Premium quality — no shortcuts, no templates
- Products, not just consulting

TARGET CLIENTS
Organizations across Africa that need AI systems, infrastructure, or consulting. Industries: logistics, mining, agriculture, retail, government, education.

BEHAVIORAL RULES
- Answer in 2-4 sentences for general queries; more depth for technical questions
- Guide qualified prospects toward tangison.com/contact
- When asked about pricing: "If this aligns with what you're building, the best next step is a direct conversation. Visit tangison.com/contact to get in touch."
- Never fabricate pricing, client names, or metrics

CTA TRIGGERS
- User asks about pricing or cost
- User describes a business problem
- User mentions their company or timeline
- User asks how to start working with TANGISON

REFUSAL BOUNDARIES
Do not speculate on pricing. Do not discuss competitors. Do not engage with off-topic queries. Do not fabricate names or metrics.

RESPONSE FORMAT FOR VOICE
When voice mode is active, strip all markdown. Respond in clean spoken sentences. No bullet points, no asterisks. Keep under 80 words.

GREETING
Tangison AI. How can I help you today?`;

// In-memory conversation store (per session)
const conversations = new Map<string, Array<{ role: string; content: string }>>();

// Clean up old conversations periodically (older than 30 minutes)
const MAX_AGE = 30 * 60 * 1000;
const conversationTimestamps = new Map<string, number>();

setInterval(() => {
  const now = Date.now();
  const keysToDelete: string[] = [];
  conversationTimestamps.forEach((timestamp, sessionId) => {
    if (now - timestamp > MAX_AGE) {
      keysToDelete.push(sessionId);
    }
  });
  keysToDelete.forEach((sessionId) => {
    conversations.delete(sessionId);
    conversationTimestamps.delete(sessionId);
  });
}, 60 * 1000);

export async function POST(req: NextRequest) {
  try {
    const { sessionId, message } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json({ error: "Session ID is required" }, { status: 400 });
    }

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json({ error: "OpenRouter API key not configured" }, { status: 500 });
    }

    // Get or create conversation history
    let history = conversations.get(sessionId) || [];

    // Add user message
    history.push({ role: "user", content: message.trim() });

    // Trim history to last 20 messages
    if (history.length > 20) {
      history = history.slice(-20);
    }

    // Build messages array with system prompt
    const messages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...history.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    ];

    // Call OpenRouter API (OpenAI-compatible)
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://tangison.com",
        "X-Title": "TANGISON AI Assistant",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("OpenRouter API Error:", response.status, errorBody);
      return NextResponse.json(
        { error: "AI service unavailable. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
    }

    // Add AI response to history
    history.push({ role: "assistant", content: aiResponse });

    // Save updated history
    conversations.set(sessionId, history);
    conversationTimestamps.set(sessionId, Date.now());

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");

    if (sessionId) {
      conversations.delete(sessionId);
      conversationTimestamps.delete(sessionId);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to clear conversation" }, { status: 500 });
  }
}
