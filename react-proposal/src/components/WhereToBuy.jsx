import { components } from '../data/hardware';

export default function WhereToBuy() {
  const gpuProducts = components.gpu.map((g) => ({
    ...g,
    image: g.name.includes('PRO 6000') ? 'section-gpu.jpg' : 'section-hero.jpg',
  }));

  const caseProducts = components.case;
  const psuProducts = components.psu;
  const coolerProducts = components.cooler.filter((c) => c.type === 'Air' || c.type === 'AIO Liquid');

  const ProductCard = ({ product, image }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 card-hover">
      <div className="aspect-video bg-white/5 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        <img src={`/images/${image || 'section-hero.jpg'}`} alt={product.name} className="w-full h-full object-cover opacity-60" />
      </div>
      <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">{product.name}</h4>
      <div className="text-lg font-bold text-white mb-2">
        RM{(product.dealer || product.price || 0).toLocaleString()}
      </div>
      {product.verify && (
        <a
          href={product.verify}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          Verify price
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );

  return (
    <section id="buy" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Purchase</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Where to Buy</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Verified Malaysian distributors. Prices are dealer rates — contact for quotes.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">Graphics Cards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gpuProducts.map((p) => (
              <ProductCard key={p.name} product={p} image={p.image} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Cases</h3>
            <div className="space-y-3">
              {caseProducts.map((p) => (
                <div key={p.name} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                  <div className="text-sm text-white font-bold">RM{p.price.toLocaleString()}</div>
                  <div className="text-xs text-[#666] mt-1">{p.hddBays}</div>
                  {p.verify && (
                    <a href={p.verify} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                      Verify price →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Power Supplies</h3>
            <div className="space-y-3">
              {psuProducts.map((p) => (
                <div key={p.name} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                  <div className="text-sm text-white font-bold">RM{p.price.toLocaleString()}</div>
                  {p.verify && (
                    <a href={p.verify} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                      Verify price →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">CPU Coolers</h3>
            <div className="space-y-3">
              {coolerProducts.map((p) => (
                <div key={p.name} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                  <div className="text-xs text-[#666] mb-1">{p.type}</div>
                  <div className="text-sm text-white font-bold">RM{p.price.toLocaleString()}</div>
                  {p.verify && (
                    <a href={p.verify} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">
                      Verify price →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="font-bold text-white">Authorized Distributors</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-6">
            {components.distributors.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white">{d.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
