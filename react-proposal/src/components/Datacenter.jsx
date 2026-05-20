import { tiers } from '../data/pricing';

export default function Datacenter() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Single Server',
      desc: 'Your first AI server. Self-use + initial clients. Revenue funds next phase.',
      cost: 'RM30k - RM100k',
      revenue: 'RM60k - RM600k/year',
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-400/30',
      bg: 'bg-blue-400/5',
    },
    {
      phase: 'Phase 2',
      title: 'Two Servers',
      desc: 'Add a second server for redundancy and capacity. Load balance between them.',
      cost: 'RM30k - RM100k (revenue-funded)',
      revenue: 'RM120k - RM1.2M/year',
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-400/30',
      bg: 'bg-green-400/5',
    },
    {
      phase: 'Phase 3',
      title: '3-4 Servers',
      desc: 'Small cluster. Dedicated servers for different clients or workloads.',
      cost: 'RM90k - RM300k (revenue-funded)',
      revenue: 'RM360k - RM2.4M/year',
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-400/30',
      bg: 'bg-yellow-400/5',
    },
    {
      phase: 'Phase 4',
      title: 'Small Datacenter',
      desc: 'Dedicated server room with rack, UPS, cooling. Full AI infrastructure business.',
      cost: 'RM500k+ (revenue-funded)',
      revenue: 'RM1M+ /year',
      color: 'from-red-500 to-red-600',
      borderColor: 'border-red-400/30',
      bg: 'bg-red-400/5',
    },
  ];

  return (
    <section id="datacenter" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Growth</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Datacenter Roadmap</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Start with one server. Scale to a full datacenter — funded by the revenue it generates.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden sm:block" />

          <div className="space-y-8">
            {phases.map((p, i) => (
              <div key={p.phase} className={`relative flex flex-col sm:flex-row gap-4 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                <div className="relative z-10 sm:w-1/2 flex justify-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-black shrink-0`}>
                    {p.phase.replace('Phase ', '')}
                  </div>
                </div>
                <div className={`flex-1 bg-white/5 border rounded-xl p-6 ${p.borderColor}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm font-bold ${p.color.replace('from-', 'text-').split(' ')[0]}`}>{p.phase}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#888]">Revenue-Funded</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#aaa] mb-3">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className={`${p.bg} rounded-lg p-3`}>
                      <div className="text-xs text-[#888]">Investment</div>
                      <div className="text-white font-semibold">{p.cost}</div>
                    </div>
                    <div className={`${p.bg} rounded-lg p-3`}>
                      <div className="text-xs text-[#888]">Revenue Potential</div>
                      <div className="text-green-400 font-semibold">{p.revenue}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-xl p-6 text-center">
          <h3 className="font-bold text-white mb-2">Revenue-Funded Growth Model</h3>
          <p className="text-sm text-[#aaa] max-w-2xl mx-auto">
            Each phase is funded by the revenue from the previous phase. Phase 1 generates enough revenue to fund Phase 2.
            Phase 2 funds Phase 3, and so on. You only invest once — the server pays for its own expansion.
          </p>
        </div>
      </div>
    </section>
  );
}
