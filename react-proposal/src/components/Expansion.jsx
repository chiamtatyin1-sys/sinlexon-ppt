import { components } from '../data/hardware';

export default function Expansion() {
  const gpuExpansion = [
    { tier: 'Starter (1x 5090)', path: 'Add 2nd 5090 → Performance tier', cost: '+RM15,400' },
    { tier: 'Performance (2x 5090)', path: 'Upgrade to RTX PRO 6000', cost: '+RM32,100 (sell 5090s)' },
    { tier: 'Enterprise (PRO 6000)', path: 'Add 2nd PRO 6000 via NVLink', cost: '+RM47,500' },
  ];

  const storageOptions = [
    { option: 'Add HDDs to existing bays', capacity: '4x 12TB = 48TB additional', cost: '~RM4,800' },
    { option: 'External DAS enclosure', capacity: 'Up to 80TB (5x 16TB)', cost: '~RM8,000' },
    { option: 'NAS over network', capacity: 'Unlimited (network-attached)', cost: '~RM3,000+' },
  ];

  return (
    <section id="expansion" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Future-Proof</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Expansion Paths</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Your server grows with your needs. Here's how to scale up when the time comes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-blue-400/5">
              <h3 className="font-bold text-blue-400">GPU Expansion</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left p-3 text-[#888]">Current</th>
                    <th className="text-left p-3 text-[#888]">Upgrade Path</th>
                    <th className="text-right p-3 text-[#888]">Est. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {gpuExpansion.map((row) => (
                    <tr key={row.tier} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3 text-white font-medium">{row.tier}</td>
                      <td className="p-3 text-[#aaa]">{row.path}</td>
                      <td className="p-3 text-right text-green-400">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-green-400/5">
              <h3 className="font-bold text-green-400">Storage Expansion</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left p-3 text-[#888]">Option</th>
                    <th className="text-left p-3 text-[#888]">Capacity</th>
                    <th className="text-right p-3 text-[#888]">Est. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {storageOptions.map((row) => (
                    <tr key={row.option} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3 text-white font-medium">{row.option}</td>
                      <td className="p-3 text-[#aaa]">{row.capacity}</td>
                      <td className="p-3 text-right text-green-400">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">Network Upgrade Path</h3>
            <div className="flex items-center gap-3 text-sm">
              <div className="px-3 py-1.5 rounded bg-white/5 text-[#aaa]">2.5GbE</div>
              <svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="px-3 py-1.5 rounded bg-blue-400/10 text-blue-400 font-medium">10GbE</div>
              <svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="px-3 py-1.5 rounded bg-white/5 text-[#aaa]">25GbE+ (future)</div>
            </div>
            <p className="text-xs text-[#666] mt-3">Enterprise tier includes 10GbE switch. Starter/Performance can upgrade later (~RM400 difference).</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">Cooling Options</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-[#ccc]">Air cooling (included) — sufficient for most setups</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="text-[#ccc]">AIO liquid cooling — quieter, better for 24/7 operation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-[#ccc]">Custom loop — maximum cooling for multi-GPU setups</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-bold text-white mb-2">Storage Strategy</h3>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Each tier includes NVMe for the OS and active models, plus HDD bays for document storage (RAG knowledge base).
            Start with 1TB NVMe + empty HDD bays. Add HDDs as your document library grows.
            The Fractal Torrent holds 4x 3.5" drives (up to 64TB+). The Lian Li O11 holds 3x 3.5" drives (up to 48TB+).
            For larger needs, add a NAS over the network.
          </p>
        </div>
      </div>
    </section>
  );
}
