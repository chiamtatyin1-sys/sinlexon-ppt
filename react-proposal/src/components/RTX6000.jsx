export default function RTX6000() {
  const specs = [
    { label: 'GPU Architecture', value: 'NVIDIA Blackwell' },
    { label: 'CUDA Cores', value: '18,176' },
    { label: 'VRAM', value: '96GB GDDR7' },
    { label: 'Memory Bandwidth', value: '1,792 GB/s' },
    { label: 'TDP (Power)', value: '600W' },
    { label: 'Tensor Cores', value: '5th Gen (4th Gen Hopper)' },
    { label: 'NVLink', value: 'Yes (up to 2 GPUs)' },
    { label: 'Display Outputs', value: 'None (server-grade)' },
    { label: 'Form Factor', value: 'Full-height, full-length' },
    { label: 'Target Use', value: 'AI training, inference, fine-tuning' },
  ];

  const comparisons = [
    { label: 'Performance', pro6000: 95, rtx5090x4: 88 },
    { label: 'Power Efficiency', pro6000: 92, rtx5090x4: 35 },
    { label: 'VRAM Capacity', pro6000: 96, rtx5090x4: 85 },
    { label: 'API Throughput', pro6000: 90, rtx5090x4: 72 },
    { label: 'Reliability (24/7)', pro6000: 98, rtx5090x4: 60 },
  ];

  return (
    <section id="gpu" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Enterprise GPU</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">RTX PRO 6000 Blackwell</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            The flagship enterprise GPU. 96GB VRAM, built for 24/7 operation. One card replaces four consumer GPUs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-yellow-400/5">
              <h3 className="font-bold text-yellow-400">Specifications</h3>
            </div>
            <div className="divide-y divide-white/5">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between px-6 py-3 text-sm">
                  <span className="text-[#888]">{s.label}</span>
                  <span className="text-white font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-6">vs 4x RTX 5090 Comparison</h3>
            <div className="space-y-5">
              {comparisons.map((c) => (
                <div key={c.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#888]">{c.label}</span>
                    <div className="flex gap-4 text-xs">
                      <span className="text-yellow-400">PRO 6000: {c.pro6000}%</span>
                      <span className="text-blue-400">4x 5090: {c.rtx5090x4}%</span>
                    </div>
                  </div>
                  <div className="flex gap-1 h-2">
                    <div className="flex-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transition-all" style={{ width: `${c.pro6000}%` }} />
                    </div>
                    <div className="flex-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all" style={{ width: `${c.rtx5090x4}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
              <div className="text-green-400 font-bold text-lg">74% Less Power</div>
              <div className="text-sm text-[#aaa] mt-1">
                RTX PRO 6000 uses 600W vs 4x RTX 5090 at ~2,400W. Massive savings on electricity and cooling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
