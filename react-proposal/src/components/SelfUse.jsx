export default function SelfUse() {
  const useCases = [
    {
      title: 'RAG Knowledge Base',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      desc: 'Upload company documents, policies, manuals. AI answers questions based on YOUR data.',
      checklist: ['Upload PDFs, DOCs, TXTs', 'AI searches your documents', 'Answers with citations', 'No data leaves your server', 'Works with AnythingLLM'],
      color: 'text-blue-400',
    },
    {
      title: 'Auto Fine-Tune with Unsloth',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      desc: 'AI learns from your usage patterns. Gets smarter over time without manual training.',
      checklist: ['2-5x faster fine-tuning', 'Auto-learns from corrections', 'Free, open-source', 'No coding required', 'Improves with every query'],
      color: 'text-yellow-400',
    },
    {
      title: 'Video & Image Creation',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      desc: 'Generate marketing images, social media content, and video scripts with AI.',
      checklist: ['SDXL & FLUX image models', 'Node-based ComfyUI workflow', 'Professional quality outputs', 'No per-image costs', 'Batch generation support'],
      color: 'text-green-400',
    },
    {
      title: 'Workflow Automation',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      desc: 'Connect AI to existing tools. Auto-generate reports, draft emails, process data.',
      checklist: ['n8n workflow engine', 'Connect to existing tools', 'Auto-generate reports', 'Draft emails & documents', 'Schedule recurring tasks'],
      color: 'text-red-400',
    },
  ];

  return (
    <section id="selfuse" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Self-Use</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">What You Can Do Day One</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            From the moment your server is set up, these capabilities are ready to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
              <div className={`flex items-center gap-3 mb-3 ${uc.color}`}>
                {uc.icon}
                <h3 className="text-lg font-bold text-white">{uc.title}</h3>
              </div>
              <p className="text-sm text-[#aaa] mb-4">{uc.desc}</p>
              <ul className="space-y-2">
                {uc.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
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

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-bold text-white mb-3">Complete Software List</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {[
              'Docker (container platform)',
              'Open WebUI (chat interface)',
              'Ollama (model runner)',
              'ComfyUI (image generation)',
              'Unsloth (fine-tuning)',
              'n8n (workflow automation)',
              'AnythingLLM (RAG knowledge base)',
              'vLLM (high-throughput serving)',
            ].map((sw) => (
              <div key={sw} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[#ccc]">{sw}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
