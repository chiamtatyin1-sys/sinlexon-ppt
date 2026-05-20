export default function ExecutiveSummary() {
  return (
    <section id="summary" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Overview</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Executive Summary</em>
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10">
          <p className="text-lg sm:text-xl text-[#ccc] leading-relaxed text-center">
            This proposal outlines a one-time investment of <strong className="text-white">RM30k–RM100k</strong> for a private AI server
            that replaces cloud AI subscriptions, keeps data local, and generates revenue by serving other companies.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-green-400">4–12 months</div>
              <div className="text-sm text-[#888] mt-1">Break-even from self-use savings</div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-blue-400">RM600k/year</div>
              <div className="text-sm text-[#888] mt-1">Revenue potential from 10 clients at RM5k/month</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[#888]">Replace cloud subscriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-[#888]">Keep data 100% local</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-[#888]">Generate new revenue</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
