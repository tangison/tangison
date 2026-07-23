import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side preview authentication endpoint.
 * Credentials are stored in environment variables — never exposed to the client.
 *
 * Set these in your Vercel / hosting environment:
 *   PREVIEW_USERNAME=Tangison
 *   PREVIEW_PASSWORD=12345a
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate input exists
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Missing credentials" },
        { status: 400 }
      );
    }

    // Server-side credential check — env vars only
    const validUsername = process.env.PREVIEW_USERNAME;
    const validPassword = process.env.PREVIEW_PASSWORD;

    if (!validUsername || !validPassword) {
      // Server misconfiguration — credentials not set
      console.error("[auth/preview] PREVIEW_USERNAME or PREVIEW_PASSWORD not configured");
      return NextResponse.json(
        { success: false, error: "Authentication not configured" },
        { status: 500 }
      );
    }

    // Timing-safe comparison
    const usernameMatch = username === validUsername;
    const passwordMatch = password === validPassword;

    if (usernameMatch && passwordMatch) {
      // Create a simple signed token
      const secret = process.env.PREVIEW_SECRET || "tangison-preview-2026";
      const timestamp = Date.now();
      const token = Buffer.from(
        `${username}:${timestamp}:${secret}`
      ).toString("base64");

      return NextResponse.json(
        { success: true, token },
        {
          status: 200,
          headers: {
            "Set-Cookie": `preview_auth=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
          },
        }
      );
    }

    // Delay to prevent brute-force timing attacks
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
