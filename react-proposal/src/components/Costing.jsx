import { tierBuilds } from '../data/hardware';
import { tiers } from '../data/pricing';

const componentLabels = {
  gpu: 'GPU',
  cpu: 'CPU',
  motherboard: 'Motherboard',
  ram: 'RAM',
  storage: 'Storage (NVMe)',
  psu: 'Power Supply',
  case: 'Case',
  cooler: 'CPU Cooler',
  network: 'Network Switch',
  misc: 'Misc (cables, thermal paste)',
  setup: 'Setup & Configuration',
};

function TierCostTable({ tierKey, build }) {
  const tier = tiers[tierKey];
  const rows = Object.entries(build).filter(([key]) => key !== 'misc' && key !== 'setup');
  const partsTotal = rows.reduce((sum, [, { qty, unitPrice }]) => sum + qty * unitPrice, 0);
  const total = partsTotal + build.misc + build.setup;
  const remaining = tier.budget - total;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <div className={`px-6 py-4 border-b border-white/10 ${tier.bgClass}`}>
        <h3 className={`font-bold ${tier.colorClass}`}>{tier.name} — {tier.budgetLabel}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left p-3 text-[#666] font-medium">Component</th>
              <th className="text-center p-3 text-[#666] font-medium">Qty</th>
              <th className="text-right p-3 text-[#666] font-medium">Unit (RM)</th>
              <th className="text-right p-3 text-[#666] font-medium">Total (RM)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([key, { item, qty, unitPrice }]) => (
              <tr key={key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-3">
                  <div className="text-[#888] text-xs">{componentLabels[key]}</div>
                  <div className="text-white">{item}</div>
                </td>
                <td className="p-3 text-center text-[#aaa]">{qty}</td>
                <td className="p-3 text-right text-[#aaa]">{unitPrice.toLocaleString()}</td>
                <td className="p-3 text-right text-white font-medium">{(qty * unitPrice).toLocaleString()}</td>
              </tr>
            ))}
            <tr className="border-b border-white/5">
              <td className="p-3 text-[#888]">{componentLabels.misc}</td>
              <td className="p-3 text-center text-[#aaa]">1</td>
              <td className="p-3 text-right text-[#aaa]">—</td>
              <td className="p-3 text-right text-white font-medium">{build.misc.toLocaleString()}</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="p-3 text-[#888]">{componentLabels.setup}</td>
              <td className="p-3 text-center text-[#aaa]">1</td>
              <td className="p-3 text-right text-[#aaa]">—</td>
              <td className="p-3 text-right text-white font-medium">{build.setup.toLocaleString()}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-white/5">
              <td className="p-3 font-bold text-white" colSpan={3}>Total Build Cost</td>
              <td className="p-3 text-right font-bold text-white text-lg">{total.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-[#888]" colSpan={3}>Budget</td>
              <td className="p-3 text-right font-semibold text-[#888]">{tier.budget.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold" colSpan={3} style={{ color: remaining >= 0 ? '#00e676' : '#ff5252' }}>
                Remaining
              </td>
              <td className="p-3 text-right font-bold text-lg" style={{ color: remaining >= 0 ? '#00e676' : '#ff5252' }}>
                {remaining >= 0 ? '+' : ''}{remaining.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default function Costing() {
  return (
    <section id="costing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Breakdown</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Hardware Cost Breakdown</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Every component, every ringgit. Full transparency on what you're paying for.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(tierBuilds).map(([key, build]) => (
            <TierCostTable key={key} tierKey={key} build={build} />
          ))}
        </div>
      </div>
    </section>
  );
}
