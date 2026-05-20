export default function SLA() {
  const levels = [
    { level: 'Critical', response: '2 hours', example: 'Server down, AI inaccessible', color: 'text-red-400', bg: 'bg-red-400/5', border: 'border-red-400/20' },
    { level: 'High', response: '4 hours', example: 'Model not responding, slow performance', color: 'text-yellow-400', bg: 'bg-yellow-400/5', border: 'border-yellow-400/20' },
    { level: 'Medium', response: '24 hours', example: 'Software update needed, configuration change', color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-400/20' },
    { level: 'Low', response: '48 hours', example: 'Feature request, documentation question', color: 'text-green-400', bg: 'bg-green-400/5', border: 'border-green-400/20' },
  ];

  const escalation = [
    { step: 1, action: 'WhatsApp/Email support ticket', time: 'Immediate' },
    { step: 2, action: 'Remote diagnosis & troubleshooting', time: 'Within response time' },
    { step: 3, action: 'On-site visit if remote fix fails', time: 'Next business day' },
    { step: 4, action: 'Hardware replacement (warranty)', time: '3 business days' },
  ];

  return (
    <section id="sla" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Support</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Service Level Agreement</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Guaranteed response times and clear escalation paths. Your server support you can count on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">Response Times</h3>
            <div className="space-y-3">
              {levels.map((l) => (
                <div key={l.level} className={`${l.bg} border ${l.border} rounded-xl p-4`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-bold ${l.color}`}>{l.level}</span>
                    <span className="text-white font-semibold">{l.response}</span>
                  </div>
                  <div className="text-xs text-[#888]">{l.example}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Escalation Path</h3>
            <div className="space-y-3">
              {escalation.map((e) => (
                <div key={e.step} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {e.step}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white font-medium">{e.action}</div>
                      <div className="text-xs text-[#666]">{e.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-green-400/10 border border-green-400/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-green-400">99%</div>
              <div className="text-sm text-[#aaa]">Uptime Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
