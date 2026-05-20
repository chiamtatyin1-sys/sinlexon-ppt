import { useState } from 'react';

const faqs = [
  {
    q: 'Why not just use ChatGPT or cloud AI?',
    a: 'Cloud AI is great for casual use, but at scale the costs multiply. Your data goes to overseas servers, you have no control over model updates, and you cannot resell the service. A private server gives you unlimited queries, full data control, and the ability to serve other companies.',
  },
  {
    q: 'How difficult is it to set up?',
    a: 'We handle the entire setup — hardware assembly, OS installation, Docker configuration, model deployment, and network setup. You get a fully working server with training. After that, it\'s as simple as opening a browser and chatting.',
  },
  {
    q: 'What happens if the hardware breaks?',
    a: 'All components come with manufacturer warranties (typically 3 years for GPU, 3 years for CPU). We handle warranty claims and replacements. The annual service contract includes hardware monitoring and proactive maintenance.',
  },
  {
    q: 'Can the AI models be updated?',
    a: 'Yes. New open-source models are released regularly. We deploy updated models as part of the annual service contract. You can also run multiple models simultaneously and switch between them.',
  },
  {
    q: 'How many people can use it at once?',
    a: 'Depends on the tier. Starter handles 2 light users, Performance handles 2-3 comfortable users, and Enterprise handles 4+ heavy users or 10+ via API. For more concurrent users, add another server.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes! Once models are downloaded, the server works completely offline. This is one of the biggest advantages — no internet dependency, no API outages, no rate limits.',
  },
  {
    q: 'What about electricity costs?',
    a: 'Power costs range from RM59-140/month depending on tier and usage. This is significantly less than cloud AI subscriptions. The Enterprise tier actually uses less power than Performance despite being more powerful.',
  },
  {
    q: 'Can I sell AI services to other companies?',
    a: 'Absolutely. This is a key part of the proposal. You can charge RM5,000/month per client for managed AI services. With 10 clients, that\'s RM600,000/year. The server pays for itself and then generates profit.',
  },
];

const risks = [
  {
    risk: 'Hardware Failure',
    mitigation: 'All components have 3-year warranties. Annual service includes health monitoring. Backup server image ready for quick swap.',
  },
  {
    risk: 'Single Point of Failure',
    mitigation: 'Phase 2 adds a second server for redundancy. Daily automated backups ensure data is never lost.',
  },
  {
    risk: 'Setup Complexity',
    mitigation: 'We handle the entire setup. You get a fully configured, tested server with training. Ongoing support included.',
  },
  {
    risk: 'Model Limitations',
    mitigation: 'Open-source models are improving rapidly. We deploy the latest models via annual service. Multiple models can run simultaneously.',
  },
  {
    risk: 'No Web Search',
    mitigation: 'Models can be connected to web search tools via n8n workflows. RAG knowledge base keeps company data current.',
  },
  {
    risk: 'Heat & Noise',
    mitigation: 'Server-grade cooling (included). Place in a ventilated room or server closet. Air cooling is sufficient for all tiers.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Questions</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">FAQ & Risk Assessment</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Common questions and honest risk assessment with mitigation strategies.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#888] shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[#aaa] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6">Risks & Mitigations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((r) => (
              <div key={r.risk} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-400/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{r.risk}</h4>
                    <p className="text-xs text-[#aaa] leading-relaxed">{r.mitigation}</p>
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
