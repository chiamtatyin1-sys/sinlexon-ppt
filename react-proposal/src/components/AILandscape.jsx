import { useState } from 'react';

export default function AILandscape() {
  const [activeTab, setActiveTab] = useState('global');

  const globalPlayers = [
    { name: 'OpenAI', products: 'ChatGPT, GPT-4o, o1', note: 'Market leader, API dominant' },
    { name: 'Google', products: 'Gemini, Vertex AI', note: 'Deep integration with Workspace' },
    { name: 'Microsoft', products: 'Copilot, Azure AI', note: 'Enterprise focus, OpenAI partner' },
    { name: 'Meta', products: 'Llama 3.1, Llama 4', note: 'Open-source leader, free models' },
    { name: 'Amazon', products: 'Bedrock, Q', note: 'AWS ecosystem, enterprise AI' },
  ];

  const chinaPlayers = [
    { name: 'Baidu', products: 'ERNIE Bot (Wenxin)', note: "China's GPT equivalent" },
    { name: 'Alibaba', products: 'Qwen (Tongyi Qianwen)', note: 'Strong multilingual, open-source' },
    { name: 'Tencent', products: 'Hunyuan', note: 'WeChat integration, gaming AI' },
    { name: 'ByteDance', products: 'Doubao, Seed', note: 'TikTok parent, content AI' },
  ];

  const malaysiaStats = [
    { label: 'Data Centers', value: '7', sub: 'Major facilities operational' },
    { label: 'Power Capacity', value: '2.3GW', sub: 'Total committed capacity' },
    { label: 'Operational', value: '57%', sub: 'Of total planned capacity' },
    { label: 'Investment', value: 'RM5.9B', sub: 'Government commitment' },
    { label: 'Economic Impact', value: '$115B', sub: 'Projected AI contribution by 2030' },
  ];

  const tabs = [
    { id: 'global', label: 'Global AI' },
    { id: 'china', label: 'China AI' },
    { id: 'malaysia', label: 'Malaysia AI' },
  ];

  return (
    <section id="landscape" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Market Overview</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">The AI Landscape</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            AI is transforming every industry. Here's who's leading the race and where Malaysia stands.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white'
                  : 'text-[#888] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'global' && (
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-[#888] font-medium">Company</th>
                    <th className="text-left p-4 text-[#888] font-medium">Key Products</th>
                    <th className="text-left p-4 text-[#888] font-medium hidden sm:table-cell">Strategic Note</th>
                  </tr>
                </thead>
                <tbody>
                  {globalPlayers.map((p) => (
                    <tr key={p.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-semibold text-white">{p.name}</td>
                      <td className="p-4 text-[#aaa]">{p.products}</td>
                      <td className="p-4 text-[#888] hidden sm:table-cell">{p.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'china' && (
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-[#888] font-medium">Company</th>
                    <th className="text-left p-4 text-[#888] font-medium">Key Products</th>
                    <th className="text-left p-4 text-[#888] font-medium hidden sm:table-cell">Strategic Note</th>
                  </tr>
                </thead>
                <tbody>
                  {chinaPlayers.map((p) => (
                    <tr key={p.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-semibold text-white">{p.name}</td>
                      <td className="p-4 text-[#aaa]">{p.products}</td>
                      <td className="p-4 text-[#888] hidden sm:table-cell">{p.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'malaysia' && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {malaysiaStats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">{s.value}</div>
                  <div className="text-sm font-semibold text-white mt-1">{s.label}</div>
                  <div className="text-xs text-[#666] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Malaysia's AI Position</h3>
              <p className="text-sm text-[#aaa] leading-relaxed">
                Malaysia is rapidly becoming a Southeast Asian AI hub. With 7 major data centers, 2.3GW of committed power capacity,
                and RM5.9B in government investment, the country is positioning itself as a regional AI infrastructure leader.
                The projected economic contribution of AI to Malaysia's economy is $115B by 2030.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
