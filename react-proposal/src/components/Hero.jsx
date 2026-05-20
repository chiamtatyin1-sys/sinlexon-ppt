import { tiers } from '../data/pricing';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/section-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#888] mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Investment Proposal — May 2026
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
          <span className="gradient-text">Private AI Server</span>
          <br />
          <span className="text-white">for Your Business</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop renting AI. Own it. Keep your data local, eliminate cloud subscriptions,
          and generate new revenue — all from one powerful server.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.values(tiers).map((tier) => (
            <a
              key={tier.name}
              href="#tiers"
              className={`px-6 py-3 rounded-xl border font-semibold text-sm transition-all hover:scale-105 ${tier.bgClass} ${tier.colorClass}`}
            >
              {tier.name} — {tier.budgetLabel}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tiers"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            View Tiers
          </a>
          <a
            href="#summary"
            className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Read Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
