export default function AI101() {
  const cards = [
    {
      title: 'What is a Token?',
      icon: 'T',
      desc: 'A token is the basic unit of text that AI processes. Roughly 1 token = 4 characters or ¾ of a word. When you send a prompt, it gets split into tokens. The AI processes them and generates response tokens.',
      example: '"Hello, how are you?" = 5 tokens\n"Selamat pagi, apa khabar?" = 6 tokens',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'What is an LLM?',
      icon: 'L',
      desc: "LLM = Large Language Model. It's a neural network trained on massive text data. It predicts the next token in a sequence. Models range from 3B (tiny) to 671B (massive) parameters. More parameters = smarter but needs more VRAM.",
      example: 'Llama 3.1 8B = 8 billion parameters\nDeepSeek V3 = 671 billion parameters',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'How Does It Work?',
      icon: 'W',
      desc: 'Step 1: You type a prompt. Step 2: Text is tokenized. Step 3: Tokens enter the model. Step 4: Model processes through layers. Step 5: Next token is predicted. Step 6: Repeat until response is complete. All happening on YOUR server.',
      example: 'You: "Summarize this report"\n→ Tokens → Model → "Here is a summary..."\n→ All local, no internet needed',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'What is VRAM?',
      icon: 'V',
      desc: 'VRAM = Video RAM on your GPU. This is the MOST important spec for AI. The model must fit in VRAM to run. 8B model needs ~6GB. 70B model needs ~40GB. More VRAM = bigger, smarter models. This is why GPU choice matters most.',
      example: 'RTX 5090: 32GB VRAM → runs 70B models\nRTX PRO 6000: 96GB VRAM → runs 230B+ models',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="ai101" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Fundamentals</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">AI 101 — Key Concepts</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Understanding these four concepts will help you make informed decisions about your AI server.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white font-black text-lg shrink-0`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-[#aaa] leading-relaxed">{card.desc}</p>
                </div>
              </div>
              <div className="mt-4 bg-white/5 rounded-lg p-3 border border-white/5">
                <div className="text-xs text-[#666] mb-1 font-medium uppercase tracking-wider">Example</div>
                <pre className="text-xs text-[#888] whitespace-pre-wrap font-mono">{card.example}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
