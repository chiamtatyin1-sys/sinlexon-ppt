export default function Compliance() {
  const regulations = [
    {
      title: 'PDPA — Personal Data Protection Act',
      desc: 'Malaysia\'s PDPA (Act 709) requires personal data to be protected. Hosting AI on your own server ensures data never leaves your control, making compliance straightforward.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'text-blue-400',
    },
    {
      title: 'Data Residency Requirements',
      desc: 'Healthcare, legal, and finance data cannot leave Malaysia under various regulations. A local server guarantees data residency compliance — no cross-border data transfer issues.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-green-400',
    },
    {
      title: 'BNM Regulations',
      desc: 'Bank Negara Malaysia requires financial institutions to maintain data sovereignty. Cloud AI services hosted overseas may not meet BNM\'s technology risk management guidelines.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-yellow-400',
    },
    {
      title: 'Government Data Sovereignty',
      desc: 'Malaysian government agencies are required to keep sensitive data within national borders. A private AI server on-premises meets all government data sovereignty requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'text-red-400',
    },
  ];

  return (
    <section id="compliance" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Legal</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Regulatory Compliance</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            A private AI server helps you meet Malaysian regulatory requirements that cloud AI cannot satisfy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {regulations.map((reg) => (
            <div key={reg.title} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
              <div className={`flex items-center gap-3 mb-3 ${reg.color}`}>
                {reg.icon}
                <h3 className="text-base font-bold text-white">{reg.title}</h3>
              </div>
              <p className="text-sm text-[#aaa] leading-relaxed">{reg.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-bold text-white mb-3">Why Cloud AI Fails Compliance</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-red-400/5 border border-red-400/20 rounded-lg p-4">
              <div className="text-red-400 font-semibold mb-1">Data Leaves Malaysia</div>
              <div className="text-[#888]">Cloud AI processes data on servers in the US, EU, or Singapore — violating data residency laws.</div>
            </div>
            <div className="bg-red-400/5 border border-red-400/20 rounded-lg p-4">
              <div className="text-red-400 font-semibold mb-1">No Audit Trail</div>
              <div className="text-[#888]">Cloud providers don't give you full query logs needed for PDPA compliance audits.</div>
            </div>
            <div className="bg-red-400/5 border border-red-400/20 rounded-lg p-4">
              <div className="text-red-400 font-semibold mb-1">Third-Party Access</div>
              <div className="text-[#888]">Cloud providers may access your data for training, support, or legal requests.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
