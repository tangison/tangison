"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCw,
  Terminal,
  Activity,
  Server,
  Layers,
  Cpu,
  Database,
  ArrowRight,
  Sparkles,
  Zap,
  Code2
} from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  category: "Ingress" | "Validation" | "Decision Engine" | "Execution" | "Audit";
  status: "idle" | "running" | "success" | "warning" | "error";
  latencyMs: number;
  description: string;
  payloadKey: string;
}

const DEFAULT_PIPELINE: PipelineStep[] = [
  {
    id: "step-1",
    name: "Multi-Source Queue Ingest",
    category: "Ingress",
    status: "idle",
    latencyMs: 18,
    description: "Ingests asynchronous payloads from field sensors, SMS gateway, APIs & offline client journals.",
    payloadKey: "queue.ingress.stream",
  },
  {
    id: "step-2",
    name: "Statutory & Schema Verification",
    category: "Validation",
    status: "idle",
    latencyMs: 34,
    description: "Validates BIPA/regulatory schemas, cryptographic hashes, and KYC/AML invariants.",
    payloadKey: "rules.validation.audit",
  },
  {
    id: "step-3",
    name: "Autonomous Agent Reasoning",
    category: "Decision Engine",
    status: "idle",
    latencyMs: 82,
    description: "Dual-loop AI verification evaluates resource limits, risk models, and offline fallback routes.",
    payloadKey: "agent.dual_loop.evaluation",
  },
  {
    id: "step-4",
    name: "Idempotent Transaction Dispatch",
    category: "Execution",
    status: "idle",
    latencyMs: 26,
    description: "Executes state transition, updates distributed ledger, triggers webhooks and notifications.",
    payloadKey: "txn.dispatch.idempotent",
  },
  {
    id: "step-5",
    name: "Sovereign Audit & Telemetry Log",
    category: "Audit",
    status: "idle",
    latencyMs: 12,
    description: "Commits immutable audit trace to encrypted local storage and remote replica sync.",
    payloadKey: "audit.telemetry.committed",
  },
];

const PRESET_WORKFLOWS = [
  {
    id: "statutory-filing",
    title: "Statutory Compliance & BIPA Pipeline",
    description: "Automated business filing, beneficial ownership validation, and certificate generation.",
    samplePayload: JSON.stringify(
      {
        entity_name: "Kalahari Logistics CC",
        registration_no: "CC/2026/04812",
        jurisdiction: "NA-WHK",
        statutory_check: "Beneficial Ownership Act 2023",
        network_state: "DEGRADED_2G",
        offline_journal: true,
        priority: "HIGH",
      },
      null,
      2
    ),
  },
  {
    id: "logistics-queue",
    title: "Walvis Bay Corridor Dispatch Automation",
    description: "High-throughput freight queue load-shedding, weight anomaly detection and driver alerts.",
    samplePayload: JSON.stringify(
      {
        consignment_id: "WB-CON-99401",
        corridor: "Trans-Kalahari",
        origin: "Walvis Bay Port Terminal 2",
        telemetry: { axle_weight_kg: 38400, fuel_rate_lph: 24.2, temp_c: 28.4 },
        auto_clearance: true,
      },
      null,
      2
    ),
  },
  {
    id: "micro-credit-scoring",
    title: "Hola Credit Autonomous Underwriting",
    description: "Real-time telco statement parsing, risk calculation, and instant settlement dispatch.",
    samplePayload: JSON.stringify(
      {
        applicant_hash: "0x8fa3...c01e",
        loan_amount_nad: 7500,
        tenor_days: 30,
        risk_threshold: 0.18,
        disbursement_rail: "Instant EFT / Mobile Wallet",
      },
      null,
      2
    ),
  },
];

export function ProcessAutomationConsole() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(PRESET_WORKFLOWS[0]);
  const [payloadCode, setPayloadCode] = useState(PRESET_WORKFLOWS[0].samplePayload);
  const [isRunning, setIsRunning] = useState(false);
  const [pipelineSteps, setPipelineSteps] = useState<PipelineStep[]>(DEFAULT_PIPELINE);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "System initialized in sovereign mode (Node: WHK-CENTRAL-01)",
    "Process automation engine ready. Standby for triggers.",
  ]);
  const [stats, setStats] = useState({
    jobsProcessed: 14280,
    avgLatency: "44ms",
    uptime: "99.98%",
    successRate: "99.94%",
  });

  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleSelectWorkflow = (wf: (typeof PRESET_WORKFLOWS)[0]) => {
    setSelectedWorkflow(wf);
    setPayloadCode(wf.samplePayload);
    setPipelineSteps(DEFAULT_PIPELINE.map((s) => ({ ...s, status: "idle" })));
    setActiveStepIndex(null);
    setLogs((prev) => [
      ...prev,
      `Switched context to template: [${wf.title}]`,
    ]);
  };

  const runAutomationPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs((prev) => [
      ...prev,
      `--- INITIATING AUTOMATION EXECUTION RUN: ${selectedWorkflow.title} ---`,
      `[INGRESS] Parsing payload (${payloadCode.length} bytes)...`,
    ]);

    const updatedSteps = DEFAULT_PIPELINE.map((s) => ({ ...s, status: "idle" as const }));
    setPipelineSteps(updatedSteps);

    for (let i = 0; i < updatedSteps.length; i++) {
      setActiveStepIndex(i);
      setPipelineSteps((prev) =>
        prev.map((step, idx) =>
          idx === i ? { ...step, status: "running" } : step
        )
      );

      const step = updatedSteps[i];
      setLogs((prev) => [
        ...prev,
        `[${step.category.toUpperCase()}] Executing step: ${step.name}...`,
      ]);

      // simulate variable step latency
      const actualLatency = Math.floor(step.latencyMs * (0.8 + Math.random() * 0.4));
      await new Promise((resolve) => setTimeout(resolve, actualLatency * 8));

      setPipelineSteps((prev) =>
        prev.map((s, idx) =>
          idx === i ? { ...s, status: "success", latencyMs: actualLatency } : s
        )
      );

      setLogs((prev) => [
        ...prev,
        `✓ [${step.category.toUpperCase()}] Complete in ${actualLatency}ms | Key: ${step.payloadKey}`,
      ]);
    }

    setActiveStepIndex(null);
    setIsRunning(false);
    setLogs((prev) => [
      ...prev,
      `--- WORKFLOW COMPLETED SUCCESSFULLY (Zero errors, 100% deterministic state commitment) ---`,
    ]);

    setStats((prev) => ({
      ...prev,
      jobsProcessed: prev.jobsProcessed + 1,
    }));
  };

  const resetConsole = () => {
    setPipelineSteps(DEFAULT_PIPELINE.map((s) => ({ ...s, status: "idle" })));
    setActiveStepIndex(null);
    setIsRunning(false);
    setLogs([
      "System reset. Standby for execution triggers.",
      `Context: ${selectedWorkflow.title}`,
    ]);
  };

  return (
    <section className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.06] bg-atlantic-black overflow-hidden" id="process-automation-engine">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(196,89,52,0.12),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full relative z-[2]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full bg-rust-signal opacity-75 rounded-full" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rust-signal" />
              </span>
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal">
                Operational Baseline
              </span>
            </div>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-5xl tracking-[-0.02em] uppercase text-skeleton-bone leading-[1.08]">
              Mission-Critical Process Automation
            </h2>
            <p className="font-satoshi text-[14px] sm:text-base text-white/50 leading-[1.6] mt-4">
              Autonomous orchestration for enterprise workflows, statutory governance, queue management, and field logistics. Built to execute deterministically even under degraded network conditions.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/[0.03] border border-white/[0.08] p-3 sm:p-4">
            <div>
              <div className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/40">Jobs / 24h</div>
              <div className="font-cabinet text-lg sm:text-xl text-skeleton-bone font-medium mt-0.5">{stats.jobsProcessed.toLocaleString()}</div>
            </div>
            <div>
              <div className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/40">Step Latency</div>
              <div className="font-cabinet text-lg sm:text-xl text-signal-teal font-medium mt-0.5">{stats.avgLatency}</div>
            </div>
            <div>
              <div className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/40">Resilience</div>
              <div className="font-cabinet text-lg sm:text-xl text-skeleton-bone font-medium mt-0.5">{stats.uptime}</div>
            </div>
            <div>
              <div className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/40">Accuracy</div>
              <div className="font-cabinet text-lg sm:text-xl text-rust-light font-medium mt-0.5">{stats.successRate}</div>
            </div>
          </div>
        </div>

        {/* Workflow Preset Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {PRESET_WORKFLOWS.map((wf) => {
            const isSelected = selectedWorkflow.id === wf.id;
            return (
              <button
                key={wf.id}
                onClick={() => handleSelectWorkflow(wf)}
                className={`text-left p-4 sm:p-5 border transition-all duration-300 relative ${
                  isSelected
                    ? "bg-white/[0.08] border-rust-signal/60 shadow-[0_0_20px_rgba(196,89,52,0.15)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 h-full w-[3px] bg-rust-signal" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Template Workflow
                  </span>
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 font-jetbrains text-[9px] text-rust-signal">
                      <Sparkles className="w-2.5 h-2.5" /> ACTIVE
                    </span>
                  ) : null}
                </div>
                <h4 className="font-cabinet text-base sm:text-lg uppercase text-skeleton-bone tracking-[-0.01em] mb-1">
                  {wf.title}
                </h4>
                <p className="font-satoshi text-[12px] text-white/45 line-clamp-2">
                  {wf.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Pipeline Execution Visualizer (7 Cols) */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-rust-signal" />
                  <span className="font-cabinet text-sm uppercase tracking-[0.15em] text-skeleton-bone">
                    Deterministic DAG Pipeline
                  </span>
                </div>
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/35">
                  5 Stage Validation
                </span>
              </div>

              {/* Step Sequence */}
              <div className="space-y-3">
                {pipelineSteps.map((step, idx) => {
                  const isCurrent = activeStepIndex === idx;
                  const isDone = step.status === "success";
                  const isRunningStep = step.status === "running";

                  return (
                    <motion.div
                      key={step.id}
                      animate={{
                        borderColor: isRunningStep
                          ? "rgba(196,89,52,0.8)"
                          : isDone
                          ? "rgba(45,212,191,0.4)"
                          : "rgba(255,255,255,0.06)",
                        backgroundColor: isRunningStep
                          ? "rgba(196,89,52,0.08)"
                          : isDone
                          ? "rgba(45,212,191,0.03)"
                          : "rgba(255,255,255,0.02)",
                      }}
                      className="p-4 border rounded-none relative transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <div className="flex items-center gap-3">
                          <span className="font-jetbrains text-[10px] w-6 h-6 rounded-none flex items-center justify-center bg-white/[0.06] text-white/60">
                            {idx + 1}
                          </span>
                          <span className="font-cabinet text-sm uppercase text-skeleton-bone tracking-wide">
                            {step.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-jetbrains text-[9px] uppercase tracking-[0.15em] text-white/40">
                            {step.category}
                          </span>
                          {isRunningStep && (
                            <span className="animate-spin inline-block w-3 h-3 border-2 border-rust-signal border-t-transparent rounded-full" />
                          )}
                          {isDone && (
                            <span className="font-jetbrains text-[10px] text-signal-teal font-semibold">
                              ✓ {step.latencyMs}ms
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="font-satoshi text-[12px] text-white/45 pl-9">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-jetbrains text-[10px] text-white/40">
                <span className="w-2 h-2 rounded-full bg-signal-teal inline-block" />
                Dual-Loop Critic Active | No AI Hallucination Guardrails
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={resetConsole}
                  disabled={isRunning}
                  className="px-4 py-2.5 border border-white/[0.12] hover:bg-white/[0.06] text-white/60 hover:text-white font-cabinet text-xs uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  Reset
                </button>

                <button
                  onClick={runAutomationPipeline}
                  disabled={isRunning}
                  className="px-6 py-2.5 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-[0_0_15px_rgba(196,89,52,0.3)] inline-flex items-center gap-2 disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <span className="animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
                      Executing...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Test Run Pipeline
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Terminal Sandbox (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Payload Editor Tab */}
            <div className="bg-white/[0.03] border border-white/[0.08] p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-rust-signal" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-skeleton-bone">
                    Inbound Payload (JSON/TypeScript)
                  </span>
                </div>
                <span className="font-jetbrains text-[9px] text-white/30">Editable Sandbox</span>
              </div>

              <textarea
                value={payloadCode}
                onChange={(e) => setPayloadCode(e.target.value)}
                disabled={isRunning}
                className="w-full flex-1 min-h-[160px] bg-black/40 border border-white/[0.06] p-3 font-jetbrains text-xs text-white/80 focus:outline-none focus:border-rust-signal/50 resize-none font-mono leading-relaxed selection:bg-rust-signal/30"
                spellCheck={false}
              />
            </div>

            {/* Live Telemetry Log Terminal */}
            <div className="bg-black/60 border border-white/[0.08] p-5 h-[220px] flex flex-col">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-signal-teal" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Live Telemetry Stream
                  </span>
                </div>
                <span className="font-jetbrains text-[9px] text-signal-teal/70 animate-pulse">● STREAMING</span>
              </div>

              <div className="flex-1 overflow-y-auto font-jetbrains text-[11px] text-white/50 space-y-1 pr-1 font-mono">
                {logs.map((log, i) => (
                  <div key={i} className={`leading-relaxed ${log.startsWith("✓") ? "text-signal-teal" : log.startsWith("---") ? "text-rust-light font-semibold" : ""}`}>
                    <span className="text-white/20 select-none mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {log}
                  </div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
