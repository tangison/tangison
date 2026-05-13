"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Status */}
        <div className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.4em] mb-6">
          System Fault
        </div>

        {/* Icon — broken signal line */}
        <div className="flex items-center justify-center gap-1 mb-8">
          <div className="w-16 h-[1px] bg-skeleton-bone/20" />
          <div className="w-2 h-2 bg-rust-signal/60" />
          <div className="w-16 h-[1px] bg-skeleton-bone/10" />
          <div className="w-2 h-2 bg-skeleton-bone/5" />
          <div className="w-16 h-[1px] bg-skeleton-bone/5" />
        </div>

        {/* Message */}
        <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl text-skeleton-bone tracking-tight mb-4">
          Signal interrupted.
        </h2>
        <p className="font-satoshi text-fog-gray/50 text-base sm:text-lg font-light leading-relaxed mb-10">
          An operational fault has been detected. The system is attempting to re-establish the signal path.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
          >
            Retry Signal
          </button>
          <a
            href="/"
            className="border border-white/20 text-skeleton-bone px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors duration-300"
          >
            Return to Origin
          </a>
        </div>

        {/* Error digest */}
        {error.digest && (
          <div className="mt-12 font-jetbrains text-[9px] text-fog-gray/20 uppercase tracking-wider">
            Fault ID: {error.digest}
          </div>
        )}
      </div>
    </div>
  );
}
