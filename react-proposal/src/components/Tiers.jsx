import { tiers } from '../data/pricing';

export default function Tiers() {
  const specs = ['gpu', 'cpu', 'ram', 'storage', 'case', 'modelLevel', 'users'];
  const specLabels = {
    gpu: 'GPU',
    cpu: 'CPU',
    ram: 'RAM',
    storage: 'Storage',
    case: 'Case',
    modelLevel: 'Model Level',
    users: 'Concurrent Users',
  };

  return (
    <section id="tiers" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Configuration</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Three Tiers, One Goal</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Choose the tier that matches your needs. All tiers include full software stack and setup.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {Object.entries(tiers).map(([key, tier]) => (
            <div
              key={key}
              className={`relative bg-white/5 border rounded-xl p-6 card-hover flex flex-col ${
                tier.popular ? 'border-green-400/50 ring-1 ring-green-400/20' : 'border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green-500 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold ${tier.colorClass}`}>{tier.name}</h3>
                <div className="text-3xl font-black text-white mt-1">{tier.budgetLabel}</div>
                <p className="text-sm text-[#888] mt-2">{tier.desc}</p>
              </div>

              <div className="space-y-3 flex-1">
                {specs.map((spec) => (
                  <div key={spec} className="flex justify-between items-start text-sm">
                    <span className="text-[#666] shrink-0 mr-3">{specLabels[spec]}</span>
                    <span className="text-[#ccc] text-right">{tier[spec]}</span>
                  </div>
                ))}
              </div>

              <a
                href="#costing"
                className={`mt-6 w-full py-2.5 rounded-lg text-sm font-semibold text-center block transition-colors ${
                  tier.popular
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                View Breakdown
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
