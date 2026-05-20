import { useState } from 'react';

export default function MarketCalc() {
  const [companies, setCompanies] = useState(50000);
  const [regulatedPct, setRegulatedPct] = useState(30);
  const [adoptionRate, setAdoptionRate] = useState(5);
  const [monthlyFee, setMonthlyFee] = useState(5000);

  const regulatedCompanies = Math.round(companies * (regulatedPct / 100));
  const potentialClients = Math.round(regulatedCompanies * (adoptionRate / 100));
  const monthlyRevenue = potentialClients * monthlyFee;
  const yearlyRevenue = monthlyRevenue * 12;

  const scenarios = [
    { name: 'Conservative', adoption: 2, color: 'text-blue-400' },
    { name: 'Realistic', adoption: 5, color: 'text-green-400' },
    { name: 'Optimistic', adoption: 10, color: 'text-yellow-400' },
  ];

  return (
    <section id="market" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Market Analysis</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Market Calculator</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Adjust the parameters to see your potential market size and revenue.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">
                Total Companies in Malaysia
              </label>
              <input
                type="number"
                value={companies}
                onChange={(e) => setCompanies(parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">
                Regulated Sectors (%)
              </label>
              <input
                type="number"
                value={regulatedPct}
                onChange={(e) => setRegulatedPct(parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">
                Adoption Rate (%)
              </label>
              <input
                type="number"
                value={adoptionRate}
                onChange={(e) => setAdoptionRate(parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">
                Monthly Fee per Client (RM)
              </label>
              <input
                type="number"
                value={monthlyFee}
                onChange={(e) => setMonthlyFee(parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-blue-400">{regulatedCompanies.toLocaleString()}</div>
              <div className="text-xs text-[#888] mt-1">Regulated Companies</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-green-400">{potentialClients}</div>
              <div className="text-xs text-[#888] mt-1">Potential Clients</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-yellow-400">RM{yearlyRevenue.toLocaleString()}</div>
              <div className="text-xs text-[#888] mt-1">Yearly Revenue</div>
            </div>
          </div>

          <h3 className="font-bold text-white mb-4">Scenario Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 text-[#888]">Scenario</th>
                  <th className="text-center p-3 text-[#888]">Adoption</th>
                  <th className="text-center p-3 text-[#888]">Clients</th>
                  <th className="text-right p-3 text-[#888]">Monthly</th>
                  <th className="text-right p-3 text-[#888]">Yearly</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s) => {
                  const clients = Math.round(regulatedCompanies * (s.adoption / 100));
                  const monthly = clients * monthlyFee;
                  const yearly = monthly * 12;
                  return (
                    <tr key={s.name} className="border-b border-white/5 hover:bg-white/5">
                      <td className={`p-3 font-semibold ${s.color}`}>{s.name}</td>
                      <td className="p-3 text-center text-[#aaa]">{s.adoption}%</td>
                      <td className="p-3 text-center text-white">{clients}</td>
                      <td className="p-3 text-right text-[#aaa]">RM{monthly.toLocaleString()}</td>
                      <td className="p-3 text-right text-white font-medium">RM{yearly.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
