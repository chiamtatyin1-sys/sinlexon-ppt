import { useState } from 'react';
import { components } from '../data/hardware';
import { tiers } from '../data/pricing';

const defaultSelections = {
  gpu: 0,
  cpu: 0,
  ram: 0,
  storage: 0,
  psu: 0,
  case: 0,
  cooler: 0,
  network: 0,
  misc: 150,
  setup: 2000,
};

export default function Calculator() {
  const [sel, setSel] = useState(defaultSelections);

  const gpuPrice = components.gpu[sel.gpu]?.dealer || 0;
  const cpuPrice = components.cpu[sel.cpu]?.price || 0;
  const ramPrice = components.ram[sel.ram]?.price || 0;
  const storagePrice = components.storage[sel.storage]?.price || 0;
  const psuPrice = components.psu[sel.psu]?.price || 0;
  const casePrice = components.case[sel.case]?.price || 0;
  const coolerPrice = components.cooler[sel.cooler]?.price || 0;
  const networkPrice = components.network[sel.network]?.price || 0;

  const total = gpuPrice + cpuPrice + ramPrice + storagePrice + psuPrice + casePrice + coolerPrice + networkPrice + sel.misc + sel.setup;

  const matchingTiers = Object.entries(tiers)
    .filter(([, t]) => total <= t.budget)
    .map(([key, t]) => ({ key, ...t, remaining: t.budget - total }));

  const bestFit = matchingTiers.length > 0 ? matchingTiers[matchingTiers.length - 1] : null;

  const SelectField = ({ label, items, value, onChange, priceKey }) => (
    <div>
      <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
      >
        {items.map((item, i) => (
          <option key={i} value={i} className="bg-[#1a1a2e]">
            {item.name} — RM{(item[priceKey] || item.price || 0).toLocaleString()}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Build Your Own</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Custom Server Calculator</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Mix and match components. See real-time pricing and which budget tier it fits.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <SelectField label="GPU" items={components.gpu} value={sel.gpu} onChange={(v) => setSel({ ...sel, gpu: v })} priceKey="dealer" />
            <SelectField label="CPU" items={components.cpu} value={sel.cpu} onChange={(v) => setSel({ ...sel, cpu: v })} priceKey="price" />
            <SelectField label="RAM" items={components.ram} value={sel.ram} onChange={(v) => setSel({ ...sel, ram: v })} priceKey="price" />
            <SelectField label="Storage" items={components.storage} value={sel.storage} onChange={(v) => setSel({ ...sel, storage: v })} priceKey="price" />
            <SelectField label="Power Supply" items={components.psu} value={sel.psu} onChange={(v) => setSel({ ...sel, psu: v })} priceKey="price" />
            <SelectField label="Case" items={components.case} value={sel.case} onChange={(v) => setSel({ ...sel, case: v })} priceKey="price" />
            <SelectField label="CPU Cooler" items={components.cooler} value={sel.cooler} onChange={(v) => setSel({ ...sel, cooler: v })} priceKey="price" />
            <SelectField label="Network" items={components.network} value={sel.network} onChange={(v) => setSel({ ...sel, network: v })} priceKey="price" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">Misc (cables, thermal paste)</label>
              <input
                type="number"
                value={sel.misc}
                onChange={(e) => setSel({ ...sel, misc: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] uppercase tracking-wider mb-1 block">Setup Fee</label>
              <input
                type="number"
                value={sel.setup}
                onChange={(e) => setSel({ ...sel, setup: parseInt(e.target.value) || 0 })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400/50"
              />
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex items-end justify-between mb-4">
              <div>
                <div className="text-sm text-[#888]">Total Build Cost</div>
                <div className="text-4xl font-black text-white">RM{total.toLocaleString()}</div>
              </div>
            </div>

            {bestFit ? (
              <div className={`rounded-lg p-4 border ${bestFit.bgClass}`}>
                <div className={`text-sm font-semibold ${bestFit.colorClass}`}>
                  Fits within {bestFit.name} tier ({bestFit.budgetLabel})
                </div>
                <div className="text-sm text-[#aaa] mt-1">
                  Remaining budget: <strong className="text-green-400">+RM{bestFit.remaining.toLocaleString()}</strong>
                </div>
              </div>
            ) : (
              <div className="rounded-lg p-4 border border-red-400/30 bg-red-400/5">
                <div className="text-sm font-semibold text-red-400">Exceeds all standard tiers</div>
                <div className="text-sm text-[#aaa] mt-1">
                  Consider Enterprise (RM100k) as a base and add custom budget
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
