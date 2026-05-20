export default function Security() {
  return (
    <section id="security" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Security</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Your Data, Your Control</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Every query is logged. Every user is authenticated. Your data never leaves your network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Query Monitoring</h3>
            </div>
            <p className="text-sm text-[#aaa] mb-4">
              The admin panel logs every query — who asked what, when, and the AI's response.
              Full audit trail for compliance and accountability.
            </p>
            <ul className="space-y-2 text-sm">
              {['Every query logged with timestamp', 'User identification per query', 'Response history stored locally', 'Admin dashboard for review', 'Export logs for compliance'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#ccc]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Access Control</h3>
            </div>
            <p className="text-sm text-[#aaa] mb-4">
              Authentication required for every user. Role-based access control.
              Server runs on your LAN by default, with optional VPN for remote access.
            </p>
            <ul className="space-y-2 text-sm">
              {['Username/password authentication', 'Role-based access (admin/user)', 'LAN-only by default', 'Optional VPN for remote access', 'No external API exposure'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#ccc]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '100%', label: 'Query Logging', sub: 'Every interaction tracked' },
            { value: 'Admin', label: 'Full Control', sub: 'You manage all access' },
            { value: 'LAN', label: 'Default Network', sub: 'No internet exposure' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-[#666] mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
