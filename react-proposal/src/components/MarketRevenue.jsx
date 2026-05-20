export default function MarketRevenue() {
  const useCases = [
    { industry: 'Healthcare', use: 'Patient records, diagnosis assistance, medical research', demand: 'Very High', compliance: 'PDPA + Medical secrecy' },
    { industry: 'Legal', use: 'Contract review, case research, document drafting', demand: 'High', compliance: 'Client confidentiality' },
    { industry: 'Finance', use: 'Risk analysis, compliance reports, customer service', demand: 'Very High', compliance: 'BNM regulations' },
    { industry: 'Manufacturing', use: 'Quality control, supply chain optimization, predictive maintenance', demand: 'Medium', compliance: 'ISO standards' },
    { industry: 'Education', use: 'Tutoring, grading, content generation, research', demand: 'Medium', compliance: 'Student data protection' },
    { industry: 'Government', use: 'Citizen services, policy analysis, document processing', demand: 'High', compliance: 'Data sovereignty' },
  ];

  const stats = [
    { value: 'RM5k', label: 'Per Client/Month', sub: 'Managed AI service fee' },
    { value: '10+', label: 'Target Clients', sub: 'Year 1 goal' },
    { value: 'RM600k', label: 'Annual Revenue', sub: 'At 10 clients' },
    { value: '4-12mo', label: 'Break-even', sub: 'From self-use savings alone' },
  ];

  return (
    <section id="revenue" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Revenue</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Business Opportunity</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Your AI server isn't just a cost center — it's a revenue generator. Serve other companies with your private AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-2xl font-black gradient-text">{s.value}</div>
              <div className="text-sm font-semibold text-white mt-1">{s.label}</div>
              <div className="text-xs text-[#666] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="font-bold text-white">Industry Use Cases</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-3 text-[#888]">Industry</th>
                  <th className="text-left p-3 text-[#888] hidden sm:table-cell">Use Case</th>
                  <th className="text-center p-3 text-[#888]">Demand</th>
                  <th className="text-left p-3 text-[#888] hidden md:table-cell">Compliance Need</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((uc) => (
                  <tr key={uc.industry} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 font-semibold text-white">{uc.industry}</td>
                    <td className="p-3 text-[#aaa] hidden sm:table-cell">{uc.use}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        uc.demand === 'Very High' ? 'bg-red-400/10 text-red-400' :
                        uc.demand === 'High' ? 'bg-yellow-400/10 text-yellow-400' :
                        'bg-blue-400/10 text-blue-400'
                      }`}>
                        {uc.demand}
                      </span>
                    </td>
                    <td className="p-3 text-[#888] hidden md:table-cell">{uc.compliance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-xl p-6">
          <h3 className="font-bold text-white mb-2">Revenue Model</h3>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Charge RM5,000/month per client for managed AI services. This includes server access, model customization,
            query monitoring, and monthly reports. With just 10 clients, that's RM600,000/year — enough to pay for
            even the Enterprise tier within 2 months. The server pays for itself, then generates pure profit.
          </p>
        </div>
      </div>
    </section>
  );
}
