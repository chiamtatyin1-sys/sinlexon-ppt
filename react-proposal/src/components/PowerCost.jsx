import { powerData, calcPower } from '../data/power';
import { tiers } from '../data/pricing';

export default function PowerCost() {
  const rate = powerData.rate;
  const hours = powerData.hoursPerDay;
  const days = powerData.daysPerMonth;

  const tierData = Object.entries(tiers).map(([key, tier]) => ({
    key,
    ...tier,
    ...calcPower(key),
  }));

  return (
    <section id="power" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Operating Cost</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Power Cost Analysis</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Based on RM{rate}/kWh commercial tariff, {hours} hours/day, {days} days/month.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-[#888] font-medium">Tier</th>
                  <th className="text-center p-4 text-[#888] font-medium">GPU Setup</th>
                  <th className="text-center p-4 text-[#888] font-medium">Load (W)</th>
                  <th className="text-right p-4 text-[#888] font-medium">Per Hour</th>
                  <th className="text-right p-4 text-[#888] font-medium">Per Day</th>
                  <th className="text-right p-4 text-[#888] font-medium">Per Month</th>
                  <th className="text-right p-4 text-[#888] font-medium">Per Year</th>
                  <th className="text-right p-4 text-[#888] font-medium">5-Year</th>
                </tr>
              </thead>
              <tbody>
                {tierData.map((t) => (
                  <tr key={t.key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className={`p-4 font-semibold ${t.colorClass}`}>{t.name}</td>
                    <td className="p-4 text-center text-[#aaa]">{t.gpuSetup}</td>
                    <td className="p-4 text-center text-white font-medium">{t.powerLoad}W</td>
                    <td className="p-4 text-right text-[#aaa]">RM{t.perHour}</td>
                    <td className="p-4 text-right text-[#aaa]">RM{t.perDay}</td>
                    <td className="p-4 text-right text-white">RM{t.perMonth}</td>
                    <td className="p-4 text-right text-white">RM{t.perYear.toLocaleString()}</td>
                    <td className="p-4 text-right text-white font-medium">RM{t.fiveYear.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">Why RM100k Uses Less Power</h3>
            <p className="text-sm text-[#aaa] leading-relaxed">
              The Enterprise tier (RM100k) uses a single RTX PRO 6000 at 600W under load,
              while the Performance tier (RM50k) uses 2x RTX 5090 at 1,300W combined.
              The PRO 6000 is designed for efficiency — it delivers more AI performance per watt
              than consumer GPUs, saving you money over the server's lifetime.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">Idle vs Load</h3>
            <p className="text-sm text-[#aaa] leading-relaxed">
              When not actively processing AI queries, the server drops to idle power consumption
              (150W–250W depending on tier). If running 24/7, multiply idle rates by 24 hours.
              For typical business use (8hr/day), the costs shown above apply.
            </p>
            <div className="mt-3 text-xs text-[#666]">
              Idle costs: Starter RM150W, Performance RM250W, Enterprise RM200W
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
