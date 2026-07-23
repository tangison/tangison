export default function Loading() {
  return (
    <div className="min-h-screen bg-atlantic-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border border-white/[0.08] animate-shimmer flex items-center justify-center">
          <div className="w-2 h-2 bg-rust-signal/40 animate-pulse" />
        </div>
        <span className="font-jetbrains text-[8px] uppercase tracking-[0.3em] text-white/15">
          Loading
        </span>
      </div>
    </div>
  );
}
