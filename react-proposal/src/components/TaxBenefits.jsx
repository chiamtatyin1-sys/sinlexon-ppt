export default function TaxBenefits() {
  const examples = [
    { budget: 'RM30,000', initial: 'RM6,000', annual: 'RM6,000', year1Deduction: 'RM12,000', year1TaxSave: 'RM2,880' },
    { budget: 'RM50,000', initial: 'RM10,000', annual: 'RM10,000', year1Deduction: 'RM20,000', year1TaxSave: 'RM4,800' },
    { budget: 'RM100,000', initial: 'RM20,000', annual: 'RM20,000', year1Deduction: 'RM40,000', year1TaxSave: 'RM9,600' },
  ];

  return (
    <section id="tax" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Tax</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Tax Benefits & Capital Allowance</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Your AI server is a depreciable company asset. Claim capital allowances to reduce your tax bill.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">Capital Allowance for IT Equipment</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-[#888]">Initial Allowance (IA)</span>
                <span className="text-green-400 font-bold">20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-[#888]">Annual Allowance (AA)</span>
                <span className="text-green-400 font-bold">20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-[#888]">Total Year 1 Deduction</span>
                <span className="text-green-400 font-bold">40%</span>
              </div>
            </div>
            <p className="text-xs text-[#666] mt-3">
              Under Malaysian tax law, IT equipment qualifies for capital allowances.
              40% of the cost can be deducted in Year 1, with 20% per year thereafter until fully claimed.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">Company Asset Benefits</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Depreciable asset on balance sheet',
                'Reduces taxable income',
                'Can be sold later (residual value)',
                'GST/SST input tax claimable (if registered)',
                'Improves company asset base',
                'Better than expensing (subscription)',
              ].map((item) => (
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

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="font-bold text-white">Tax Savings Example (24% corporate tax rate)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-3 text-[#888]">Tier Budget</th>
                  <th className="text-right p-3 text-[#888]">Initial (20%)</th>
                  <th className="text-right p-3 text-[#888]">Annual (20%)</th>
                  <th className="text-right p-3 text-[#888]">Year 1 Deduction</th>
                  <th className="text-right p-3 text-[#888]">Year 1 Tax Savings</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((e) => (
                  <tr key={e.budget} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 text-white font-medium">{e.budget}</td>
                    <td className="p-3 text-right text-[#aaa]">{e.initial}</td>
                    <td className="p-3 text-right text-[#aaa]">{e.annual}</td>
                    <td className="p-3 text-right text-green-400 font-medium">{e.year1Deduction}</td>
                    <td className="p-3 text-right text-green-400 font-bold">{e.year1TaxSave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-green-400/10 border border-green-400/20 rounded-xl p-5 text-center">
          <p className="text-sm text-[#aaa]">
            <strong className="text-green-400">Example:</strong> A RM50,000 server gives you RM20,000 in Year 1 tax deductions.
            At 24% corporate tax rate, that's <strong className="text-white">RM4,800 in tax savings</strong> — effectively reducing your net investment.
          </p>
        </div>
      </div>
    </section>
  );
}
