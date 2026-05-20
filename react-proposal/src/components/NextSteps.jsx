export default function NextSteps() {
  const steps = [
    {
      step: 1,
      title: 'Choose Your Tier',
      desc: 'Review the three tiers and select the one that matches your needs and budget.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: 2,
      title: 'Get Quotes',
      desc: 'We source competitive quotes from verified Malaysian distributors for all components.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
    },
    {
      step: 3,
      title: 'Order & Build',
      desc: 'Components are ordered, assembled, tested, and configured with your software stack.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      step: 4,
      title: 'Go Live',
      desc: 'Server is delivered, installed, and you receive training. Start using AI immediately.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="next" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Get Started</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Next Steps</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Four simple steps from decision to deployment. We handle the complexity.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#888] mt-4">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            3-4 weeks total
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col sm:flex-row items-center gap-4">
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-5 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                    <span className="text-xs font-bold text-[#666]">STEP {s.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-[#aaa]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#tiers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Choose Your Tier
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m5-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
