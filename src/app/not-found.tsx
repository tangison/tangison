"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* Error code */}
        <div className="font-jetbrains text-[10px] text-rust-signal/60 uppercase tracking-[0.4em] mb-6">
          Signal Lost
        </div>

        {/* Large 404 */}
        <h1 className="font-cabinet text-[8rem] sm:text-[10rem] md:text-[14rem] font-black text-skeleton-bone/10 leading-none tracking-tighter">
          404
        </h1>

        {/* Message */}
        <div className="-mt-8 mb-10">
          <p className="font-satoshi text-fog-gray/60 text-base sm:text-lg font-light max-w-md mx-auto leading-relaxed">
            The requested signal could not be located. This coordinate does not exist within the operational grid.
          </p>
        </div>

        {/* Return link */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 group"
        >
          Return to Origin
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 12L12 4M12 4H6M12 4V10" />
          </svg>
        </Link>
      </div>

      {/* Bottom coordinates */}
      <div className="absolute bottom-8 font-jetbrains text-[8px] text-white/15 uppercase tracking-[0.3em]">
        22°34&apos;12&quot;S 14°31&apos;48&quot;E
      </div>
    </div>
  );
}
