import { useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Overview' },
  { id: 'why', label: 'Why Own' },
  { id: 'ai101', label: 'AI 101' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'tiers', label: 'Tiers' },
  { id: 'costing', label: 'Costing' },
  { id: 'calculator', label: 'Calculator' },
  { id: 'gpu', label: 'GPU' },
  { id: 'power', label: 'Power' },
  { id: 'software', label: 'Software' },
  { id: 'selfuse', label: 'Self-Use' },
  { id: 'security', label: 'Security' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'expansion', label: 'Expansion' },
  { id: 'market', label: 'Market' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'value', label: 'Value' },
  { id: 'brands', label: 'AI Models' },
  { id: 'service', label: 'Service' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'sla', label: 'SLA' },
  { id: 'backup', label: 'Backup' },
  { id: 'datacenter', label: 'Datacenter' },
  { id: 'tax', label: 'Tax' },
  { id: 'faq', label: 'FAQ' },
  { id: 'buy', label: 'Where to Buy' },
  { id: 'next', label: 'Next Steps' },
];

export default function Nav({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-sm font-bold text-[#0a0a0f]">S</div>
            <span className="font-bold text-white hidden sm:block">Sinlexon AI Server</span>
          </a>

          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                  activeSection === s.id
                    ? 'bg-white/10 text-white'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-[#888] hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 grid grid-cols-2 gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeSection === s.id
                    ? 'bg-white/10 text-white'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
