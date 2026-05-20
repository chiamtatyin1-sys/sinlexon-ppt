export default function WhyOwn() {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Data Privacy',
      stat: '$10.22M',
      statLabel: 'Average cost of a data breach (2024)',
      desc: 'Your data never leaves your premises. No third-party servers, no data mining, no exposure.',
      color: 'text-red-400',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hidden Cloud Costs',
      stat: 'RM5k+/mo',
      statLabel: 'Real cost of cloud AI at scale',
      desc: 'API calls add up fast. Per-token pricing, rate limits, and enterprise features multiply your bill.',
      color: 'text-yellow-400',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Long-term Value',
      stat: 'One purchase',
      statLabel: 'Unlimited use forever',
      desc: 'Own the hardware. No subscriptions. No per-query fees. Use it as much as you want, for as long as you want.',
      color: 'text-green-400',
    },
  ];

  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">The Case</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Why Own Your AI Server?</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Cloud AI is convenient until it isn't. Here's why owning your infrastructure wins long-term.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
              <div className={`${card.color} mb-4`}>{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <div className={`${card.color} text-2xl font-black mb-1`}>{card.stat}</div>
              <div className="text-xs text-[#666] mb-3">{card.statLabel}</div>
              <p className="text-sm text-[#aaa] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
          <blockquote className="text-lg text-[#ccc] italic leading-relaxed">
            "We were spending over RM3,000/month on various AI tools — ChatGPT, Midjourney, Claude, transcription services.
            A single server replaced all of them and gave us capabilities we didn't even know we needed."
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-sm font-bold text-white">OD</div>
            <div>
              <div className="text-sm font-semibold text-white">Operations Director</div>
              <div className="text-xs text-[#666]">Mid-size company, Kuala Lumpur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
