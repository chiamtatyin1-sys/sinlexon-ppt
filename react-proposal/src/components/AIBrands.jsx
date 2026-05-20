import { aiModels } from '../data/models';
import { tiers } from '../data/pricing';

export default function AIBrands() {
  const tierInfo = {
    starter: { name: 'Starter', desc: 'Runs 7B-14B models. Good for quick tasks, light use, testing.' },
    performance: { name: 'Performance', desc: 'Runs 70B models. Near GPT-4 quality. Best for serious work.' },
    enterprise: { name: 'Enterprise', desc: 'Runs 230B+ models. GPT-4o level. For frontier AI tasks.' },
  };

  return (
    <section id="brands" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">AI Models</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Available AI Models</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Open-source models from the world's leading AI labs. All free to run on your server.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 text-[#888]">Model</th>
                  <th className="text-left p-3 text-[#888]">Developer</th>
                  <th className="text-center p-3 text-[#888]">Size</th>
                  <th className="text-center p-3 text-[#888]">VRAM</th>
                  <th className="text-left p-3 text-[#888] hidden sm:table-cell">Quality</th>
                  <th className="text-left p-3 text-[#888] hidden md:table-cell">Best For</th>
                  <th className="text-center p-3 text-[#888]">Tier</th>
                </tr>
              </thead>
              <tbody>
                {aiModels.map((m) => {
                  const tierColor = m.tier === 'starter' ? 'text-blue-400' : m.tier === 'performance' ? 'text-green-400' : 'text-yellow-400';
                  return (
                    <tr key={m.name} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3 font-semibold text-white">{m.name}</td>
                      <td className="p-3 text-[#aaa]">{m.developer}</td>
                      <td className="p-3 text-center text-[#aaa]">{m.size}</td>
                      <td className="p-3 text-center text-[#aaa]">{m.vram}</td>
                      <td className="p-3 text-[#888] hidden sm:table-cell">{m.quality}</td>
                      <td className="p-3 text-[#888] hidden md:table-cell">{m.bestFor}</td>
                      <td className={`p-3 text-center font-medium ${tierColor}`}>{tierInfo[m.tier].name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(tierInfo).map(([key, info]) => {
            const tier = tiers[key];
            return (
              <div key={key} className={`bg-white/5 border rounded-xl p-5 ${tier.bgClass}`}>
                <h3 className={`font-bold ${tier.colorClass} mb-2`}>{info.name} Tier</h3>
                <p className="text-sm text-[#aaa]">{info.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
