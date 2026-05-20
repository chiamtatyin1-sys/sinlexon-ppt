import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-sm font-bold text-[#0a0a0f]">S</div>
            <span className="font-bold text-white">Sinlexon AI Server</span>
          </div>

          <p className="text-sm text-[#666] text-center">
            Investment Proposal — May 2026. All prices are estimates and subject to change.
            <br />
            Contact us for current quotes and availability.
          </p>

          <div className="text-xs text-[#444]">
            &copy; {new Date().getFullYear()} Sinlexon AI Server. All rights reserved.
          </div>
        </div>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
}
