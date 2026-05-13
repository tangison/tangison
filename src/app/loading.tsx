export default function Loading() {
  return (
    <div className="fixed inset-0 bg-atlantic-black flex flex-col items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-8">
        {/* Logo mark */}
        <img
          src="/images/logo-mark.png"
          alt=""
          className="h-12 w-auto mix-blend-screen opacity-50 animate-pulse"
          aria-hidden="true"
        />

        {/* Loading artifact — signal line with traveling pulse */}
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-rust-signal/80 to-transparent"
            style={{
              animation: "signal-travel 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            }}
          />
        </div>

        {/* Subtle status text */}
        <span className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-[0.4em]">
          Initializing
        </span>
      </div>

      <style>{`
        @keyframes signal-travel {
          0% { left: -2rem; }
          100% { left: calc(100% + 2rem); }
        }
      `}</style>
    </div>
  );
}
