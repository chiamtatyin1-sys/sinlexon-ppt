export default function Timeline() {
  const weeks = [
    {
      week: 'Week 1',
      title: 'Order Hardware',
      items: ['Finalize tier selection', 'Place orders with distributors', 'Confirm delivery timeline', 'Prepare server room/location'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-400/30',
    },
    {
      week: 'Week 2',
      title: 'Hardware Arrives',
      items: ['Receive and inspect all components', 'Verify parts against order', 'Begin assembly', 'Cable management'],
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-400/30',
    },
    {
      week: 'Week 3',
      title: 'Software Installation',
      items: ['Install OS (Ubuntu Server)', 'Set up Docker containers', 'Deploy AI models', 'Configure network & security'],
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-400/30',
    },
    {
      week: 'Week 4',
      title: 'Testing & Go Live',
      items: ['System stress testing', 'Model benchmarking', 'User training session', 'Handover and go live'],
      color: 'from-red-500 to-red-600',
      borderColor: 'border-red-400/30',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Schedule</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Implementation Timeline</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            From order to go-live in 3-4 weeks. Here's exactly what happens each week.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#888] mt-4">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            3-4 weeks total
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-8">
            {weeks.map((w, i) => (
              <div key={w.week} className="relative flex gap-4 sm:gap-6">
                <div className={`relative z-10 w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-gradient-to-br ${w.color} flex flex-col items-center justify-center text-white shrink-0`}>
                  <span className="text-xs font-medium opacity-80">{w.week}</span>
                </div>
                <div className={`flex-1 bg-white/5 border rounded-xl p-5 ${w.borderColor}`}>
                  <h3 className="text-lg font-bold text-white mb-3">{w.title}</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {w.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#ccc]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
