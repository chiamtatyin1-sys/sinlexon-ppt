import { softwareStack } from '../data/models';

export default function SoftwareStack() {
  return (
    <section id="software" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Included</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Complete Software Stack</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            All software is open-source and free. Pre-installed and configured as part of your setup fee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softwareStack.map((sw) => (
            <div key={sw.name} className="bg-white/5 border border-white/10 rounded-xl p-5 card-hover">
              <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: sw.icon }} />
              <h3 className="text-base font-bold text-white mb-2">{sw.name}</h3>
              <p className="text-xs text-[#888] leading-relaxed">{sw.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
          <p className="text-sm text-[#888]">
            All software is <strong className="text-white">open-source and free</strong>. No licensing fees, no subscriptions.
            You own the entire stack. Updates are included in the annual service contract.
          </p>
        </div>
      </div>
    </section>
  );
}
