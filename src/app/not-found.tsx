import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md">
        <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15 block mb-4">404</span>
        <h1 className="font-cabinet text-3xl sm:text-4xl tracking-[0.05em] text-skeleton-bone mb-4">
          Page not found
        </h1>
        <p className="font-satoshi text-sm text-white/30 leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300"
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}
