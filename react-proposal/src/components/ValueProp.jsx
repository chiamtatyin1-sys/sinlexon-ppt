import { cloudVsLocal, roiComparison } from '../data/roi';

export default function ValueProp() {
  return (
    <section id="value" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">ROI Analysis</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Cloud vs Local — The Numbers</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            See the real cost comparison and 5-year return on investment for each tier.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="font-bold text-white">Cloud vs Local Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-3 text-[#888]">Feature</th>
                  <th className="text-left p-3 text-[#888]">Cloud AI</th>
                  <th className="text-left p-3 text-[#888]">Local Server</th>
                </tr>
              </thead>
              <tbody>
                {cloudVsLocal.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 text-white font-medium">{row.feature}</td>
                    <td className={`p-3 ${row.cloudBad ? 'text-red-400' : 'text-[#aaa]'}`}>{row.cloud}</td>
                    <td className="p-3 text-green-400">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="font-bold text-white">5-Year ROI Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-3 text-[#888]">Metric</th>
                  <th className="text-right p-3 text-blue-400">Starter</th>
                  <th className="text-right p-3 text-green-400">Performance</th>
                  <th className="text-right p-3 text-yellow-400">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Initial Investment', key: 'initial', format: (v) => `RM${v.toLocaleString()}` },
                  { label: 'Year 1 Total', key: 'year1', format: (v) => `RM${Math.round(v).toLocaleString()}` },
                  { label: 'Years 2-5 (annual)', key: 'year2to5', format: (v) => `RM${Math.round(v).toLocaleString()}` },
                  { label: '5-Year Total Cost', key: 'total5Year', format: (v) => `RM${Math.round(v).toLocaleString()}` },
                  { label: 'Cloud 5-Year Cost', key: 'cloud5Year', format: (v) => `RM${v.toLocaleString()}` },
                  { label: 'Total Queries (5yr)', key: 'queries5Year', format: (v) => `${(v / 1000).toFixed(0)}K` },
                  { label: 'Cost per 1K Queries', key: 'costPer1k', format: (v) => `RM${v}` },
                  { label: 'Revenue (10 clients)', key: 'revenue10Clients', format: (v) => `RM${(v / 1000).toFixed(0)}K` },
                  { label: 'Net Position', key: 'netWithRevenue', format: (v) => {
                    const val = Math.round(v);
                    return val >= 0 ? `+RM${val.toLocaleString()}` : `-RM${Math.abs(val).toLocaleString()}`;
                  }},
                ].map((row) => (
                  <tr key={row.label} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 text-white font-medium">{row.label}</td>
                    {['starter', 'performance', 'enterprise'].map((tier) => (
                      <td key={tier} className="p-3 text-right text-[#ccc]">
                        {row.format(roiComparison[tier][row.key])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
