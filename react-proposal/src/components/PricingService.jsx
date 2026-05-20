import { tiers } from '../data/pricing';
import { annualService } from '../data/pricing';

export default function PricingService() {
  return (
    <section id="service" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Pricing</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Setup Fees & Service Contract</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Annual service keeps your server running optimally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.entries(tiers).map(([key, tier]) => (
            <div key={key} className={`bg-white/5 border rounded-xl p-6 ${tier.bgClass}`}>
              <h3 className={`text-lg font-bold ${tier.colorClass} mb-1`}>{tier.name}</h3>
              <div className="text-3xl font-black text-white mb-1">RM{tier.setupFee.toLocaleString()}</div>
              <div className="text-xs text-[#888] mb-4">One-time setup fee</div>
              <ul className="space-y-2 text-sm">
                {[
                  'Hardware assembly & testing',
                  'OS & Docker installation',
                  'AI model deployment',
                  'Network configuration',
                  'User training session',
                  '30-day support included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Annual Service Contract</h3>
              <p className="text-sm text-[#888]">{annualService.description}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black gradient-text">{annualService.label}</div>
              <div className="text-xs text-[#666]">All tiers, same price</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {annualService.includes.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#ccc]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-bold text-white mb-4">Hire vs Contract Comparison</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-400/5 border border-red-400/20 rounded-lg p-5">
              <h4 className="font-semibold text-red-400 mb-3">Hire Full-Time AI Engineer</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-[#888]">Monthly salary</span><span className="text-white">RM8,000 - RM15,000</span></div>
                <div className="flex justify-between"><span className="text-[#888]">Annual cost</span><span className="text-white">RM96,000 - RM180,000</span></div>
                <div className="flex justify-between"><span className="text-[#888]">EPF/SOCSO</span><span className="text-white">+15%</span></div>
                <div className="flex justify-between"><span className="text-[#888]">Total 5-year</span><span className="text-red-400 font-bold">RM570k - RM1.08M</span></div>
              </div>
            </div>
            <div className="bg-green-400/5 border border-green-400/20 rounded-lg p-5">
              <h4 className="font-semibold text-green-400 mb-3">Annual Service Contract</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-[#888]">Annual fee</span><span className="text-white">RM3,000</span></div>
                <div className="flex justify-between"><span className="text-[#888]">Monthly equivalent</span><span className="text-white">RM250</span></div>
                <div className="flex justify-between"><span className="text-[#888]">No employment costs</span><span className="text-white">RM0</span></div>
                <div className="flex justify-between"><span className="text-[#888]">Total 5-year</span><span className="text-green-400 font-bold">RM15,000</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
