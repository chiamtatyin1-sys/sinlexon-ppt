import { useState, useEffect } from 'react';

// Sourcing Evidence Images Database (11 user screenshots)
const SOURCING_IMAGES = [
  {
    id: 'media__1779429531686.png',
    title: 'TMT Blackwell Shopee Listing',
    tag: 'Blackwell GPU',
    price: 'RM48,888.00 Retail',
    desc: 'Active Shopee e-commerce listing for the high-end NVIDIA RTX PRO 6000 Blackwell workstation GPU card from retail store TMT by Thundermatch.',
    insight: 'Validates the baseline market price for the Enterprise GPU tier. Our direct-to-dealer sourcing price of RM47,500.00 saves RM1,388.00 and guarantees immediate local warranty fulfillment.'
  },
  {
    id: 'media__1779428396823.jpg',
    title: 'Emarque Turnkey official Quote',
    tag: 'Turnkey Baseline',
    price: 'RM30,000.00 flat',
    desc: 'Official Facebook post quotation from local system integrator Emarque Technologies (Kelana Jaya, Selangor) outlining their standard RM30,000.00 workstation pre-build.',
    insight: 'Used as the core comparative baseline. Establishes the exact retail market standard for a professional Ultra 9 285K build, proving our dealer sourcing cuts CapEx while adding custom AI software layers.'
  },
  {
    id: 'media__1779428393213.jpg',
    title: '4U Server Chassis Cabinet Pile',
    tag: 'Cabinet Chassis',
    price: 'In-Stock Verification',
    desc: 'Physical warehousing verification photo showing a stack of multiple SilverStone RM44 4U rackmount server chassis cabinet frames assembled on-site.',
    insight: 'Guarantees that essential rack cabinet parts are physically in-stock locally, completely bypassing potential US-China container shipping export holds.'
  },
  {
    id: 'media__1779428599175.jpg',
    title: 'Open Workstation PC Interior',
    tag: 'Interior Hardware',
    price: 'Air-Cooling Safety',
    desc: 'Internal close-up view of the assembled system showcasing professional active air-cooling layout, GPU clearance, and neat power supply cables routing.',
    insight: 'Demonstrates our 100% active leak-proof thermal design using premium Noctua/Thermalright coolers. Eliminates water pump wear-out and liquid leaks, keeping investment safe.'
  },
  {
    id: 'media__1779428389352.jpg',
    title: 'ASUS ROG Astral RTX 5090 Sourcing',
    tag: 'GPU Sourcing Box',
    price: 'RM17,000.00 Sourced',
    desc: 'ASUS ROG Astral GeForce RTX 5090 OC product box confirmation from verified local supplier inventory.',
    insight: 'Confirms immediate physical inventory availability of the ultra-high liquidity RTX 5090 GPU and our wholesale dealer sourcing rate of RM17,000.00 (saving RM1,500.00 vs. retail).'
  },
  {
    id: 'media__1779428385240.png',
    title: 'Z890 Motherboard Cart Receipt',
    tag: 'Receipt Sourcing',
    price: 'Cart Verification',
    desc: 'Pre-checkout shopping cart list from local distributor verifying unit pricing for the GIGABYTE Z890 AI TOP mainboard panels.',
    insight: 'Provides transparent hardware costing verification. Confirms we procure components directly at baseline cost with zero artificial markups passed onto the client.'
  },
  {
    id: 'media__1779428408995.png',
    title: 'Corsair 96GB Memory Sourcing Cart',
    tag: 'RAM Sourcing',
    price: 'Cart Verification',
    desc: 'Distributor shopping cart receipt documenting pricing for Corsair Vengeance high-capacity 96GB DDR5 memory modules.',
    insight: 'Validates accurate memory configuration pricing for the Starter Workstation package, ensuring optimized high-speed memory buffers for large model inference.'
  },
  {
    id: 'media__1779428614025.jpg',
    title: 'Z890 Board Slot Architecture',
    tag: 'Motherboard Spec',
    price: 'Dual PCIe 5.0 lanes',
    desc: 'Interior macro photograph highlighting the GIGABYTE Z890 AORUS MASTER AI TOP motherboard slots, copper heatsinks, and RAM lanes inside the chassis.',
    insight: 'Validates that the motherboard is structurally optimized for multi-GPU configurations, with reinforced PCIe slots to support heavy processing graphics cards safely.'
  },
  {
    id: 'media__1779428618846.jpg',
    title: 'RM44 Casing Rear View & I/O',
    tag: 'Server Backplate',
    price: 'Professional I/O',
    desc: 'Rear-view plate diagram of the lockable RM44 rackmount server chassis indicating brackets, cooling fan exhaust slots, and modular PSU slot placement.',
    insight: 'Proves the casing conforms to professional server rack form factors. Enables clean integration into datacenters and locks internal components securely.'
  },
  {
    id: 'media__1779428637286.png',
    title: 'Mounting Slide Cabinet Rails',
    tag: 'Slide Rails Sourcing',
    price: 'Datacenter Ready',
    desc: 'Distributor catalog listing and blueprint specification sheet for heavy-duty server cabinet sliding drawer rail brackets.',
    insight: 'Ensures that the RM44 server unit is fully datacenter-ready, permitting smooth drawer expansion inside standard Cyberjaya Tier-3 colocation server racks.'
  },
  {
    id: 'media__1779341909295.png',
    title: 'Client Proposal Pricing Mockup',
    tag: 'Proposal Framework',
    price: 'Standard Quote Sizer',
    desc: 'Preliminary client-facing quote sheet mockup summarizing the server hardware specifications table, supplier warranty options, and developer deployment hours.',
    insight: 'Provides a structured blueprint for presenting the Sinlexon AI Server proposal, focusing on clear comparative metrics that make corporate signing straightforward.'
  }
];

function App() {
  const [activeSpace, setActiveSpace] = useState('pitch-overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  
  // VRAM Planner state
  const [plannerModelB, setPlannerModelB] = useState('performance');
  
  // Custom Calculator state
  const [calcGpu, setCalcGpu] = useState(17000);
  const [calcCpu, setCalcCpu] = useState(2799);
  const [calcMobo, setCalcMobo] = useState(2400);
  const [calcRam, setCalcRam] = useState(1600);
  const [calcStorage, setCalcStorage] = useState(1500);
  const [calcPsu, setCalcPsu] = useState(750);
  const [calcCase, setCalcCase] = useState(950);
  const [calcCooler, setCalcCooler] = useState(180);
  
  const calcTotal = calcGpu + calcCpu + calcMobo + calcRam + calcStorage + calcPsu + calcCase + calcCooler + 199 + 150 + 2000;
  let calcBudget = 30000;
  if (calcTotal > 40000) calcBudget = 50000;
  if (calcTotal > 75000) calcBudget = 100000;
  const calcRemaining = calcBudget - calcTotal;

  // Key visual detail mappings for VRAM Sizing Proposal Planner
  const plannerData = {
    starter: {
      tierName: 'Sovereign Starter AI Workstation',
      vramLabel: '32GB Single RTX 5090 VRAM Sizing',
      price: 'RM29,528',
      saving: 'Wholesale Dealer Sourcing Savings: RM1,500',
      gpu: '1x MSI Gaming Trio RTX 5090 (Dealer rate)',
      cpu: 'Intel Core Ultra 9 Processor 285K (24 Cores)',
      ram: '96GB Corsair Vengeance DDR5',
      storage: '4TB Kingston KC3000 PCIe 4.0 NVMe SSD',
      software: [
        'Preloaded Docker & Open WebUI (Multi-tenant secured portal)',
        'Offline Local Quantized Models (Llama-3-8B-Instruct preloaded)',
        'Pre-configured offline Python deep-learning dependency caches'
      ],
      physical: [
        'SilverStone RM44 4U professional rackmount server chassis',
        'Thermalright Peerless Assassin 120 (100% leak-proof active air cooling)',
        'Operating power draw limits: ~680W under full inference load'
      ]
    },
    performance: {
      tierName: 'Sovereign Performance AI PC',
      vramLabel: '64GB Dual RTX 5090 VRAM Sizing',
      price: 'RM50,033',
      saving: 'Wholesale Dealer Sourcing Savings: RM3,000',
      gpu: '2x ASUS ROG Astral RTX 5090 (Dealer rate)',
      cpu: 'AMD Ryzen 9 9950X (16 Cores, up to 5.7 GHz)',
      ram: '128GB DDR5 ECC (Error-Correcting Memory)',
      storage: '1.92TB Enterprise NVMe PLP SSD (Power-Loss Protection)',
      software: [
        'Preloaded Docker & Open WebUI (Multi-tenant secured portal)',
        'Offline Local Quantized Models (Qwen-2.5-72B-Instruct preloaded)',
        'Local fine-tuning library environment pre-configured (Unsloth)'
      ],
      physical: [
        'Fractal Design Define 7 XL tower sound-dampened server casing',
        'Noctua NH-D15 premium copper double-tower heatsink air cooler',
        'Operating power draw limits: ~1,300W under concurrent multi-user load'
      ]
    },
    enterprise: {
      tierName: 'Sovereign Enterprise AI Server',
      vramLabel: '96GB Unified GDDR7 VRAM Blackwell Sizing',
      price: 'RM92,795',
      saving: 'Wholesale Sourcing Savings: RM1,388 on Blackwell GPU',
      gpu: '1x RTX PRO 6000 Blackwell 96GB Unified GDDR7',
      cpu: 'AMD Threadripper 7980X (64 Cores, 128 Threads)',
      ram: '256GB DDR5 ECC RDIMM (High Speed Enterprise)',
      storage: '3.84TB Micron Enterprise NVMe PLP SSD',
      software: [
        'Enterprise multi-tenant secure client API gateways + Open WebUI dashboards',
        'Capable of loading quantized massive 671B models (DeepSeek-R1 quantized)',
        'Continuous 24/7 background batch document retrieval & fine-tuning pipelines'
      ],
      physical: [
        'SilverStone RM44 4U professional cabinet drawer casing with sliding rails',
        'Integrated ASPEED AST2600 BMC microcontroller for out-of-band IPMI remote power reboots',
        'Operating power draw: ~750W (Highly power efficient enterprise architecture!)'
      ]
    }
  };

  const activePlanner = plannerData[plannerModelB];

  // Lightbox Navigation Controls
  const nextLightbox = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev === SOURCING_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev === 0 ? SOURCING_IMAGES.length - 1 : prev - 1));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') setActiveLightboxIndex((prev) => (prev === SOURCING_IMAGES.length - 1 ? 0 : prev + 1));
      if (e.key === 'ArrowLeft') setActiveLightboxIndex((prev) => (prev === 0 ? SOURCING_IMAGES.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <div className="min-h-screen bg-[#060609] text-[#f0f0f5] flex overflow-x-hidden">
      
      {/* MOBILE HEADER */}
      <div className="mobile-header md:hidden fixed top-0 left-0 right-0 h-14 bg-[#0a0a0f] border-b border-white/5 z-[110] px-4 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="font-['Outfit'] font-black text-white text-base">Sinlexon <span className="bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">AI</span></div>
          <span className="text-[8px] font-bold bg-[#64b5f6]/10 border border-[#64b5f6]/20 text-[#64b5f6] px-1.5 py-0.5 rounded-sm uppercase">Wiki</span>
        </div>
        <button 
          className="text-white text-xl cursor-pointer p-1"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* LEFT SIDEBAR NAVIGATION */}
      <aside className={`wiki-sidebar fixed md:w-[290px] w-[260px] top-0 bottom-0 left-0 bg-[#0a0a0f] border-r border-white/5 p-6 overflow-y-auto z-100 flex flex-col transition-transform duration-300 ease-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-2 px-2.5 mb-7">
          <div className="font-['Outfit'] font-black text-white text-lg">Sinlexon <span className="bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">AI</span></div>
          <span className="text-[9px] font-bold bg-[#64b5f6]/10 border border-[#64b5f6]/20 text-[#64b5f6] px-1.5 py-0.5 rounded-sm uppercase">Sovereign</span>
        </div>

        {/* Group 1: Strategic Pitch */}
        <div className="wiki-nav-group mb-6">
          <div className="wiki-nav-group-title font-['Outfit'] text-[10px] uppercase tracking-widest text-[#555565] font-bold mb-2.5 pl-2.5">Strategic Pitch</div>
          <ul className="wiki-nav-links list-none">
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'pitch-overview' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('pitch-overview'); setIsSidebarOpen(false); }}
              >
                🚀 Executive Pitch
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'cloud-vs-local' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('cloud-vs-local'); setIsSidebarOpen(false); }}
              >
                ⚖️ Cloud vs. Local Owning
              </a>
            </li>
          </ul>
        </div>

        {/* Group 2: Sourcing Engines */}
        <div className="wiki-nav-group mb-6">
          <div className="wiki-nav-group-title font-['Outfit'] text-[10px] uppercase tracking-widest text-[#555565] font-bold mb-2.5 pl-2.5">Sourcing Engines</div>
          <ul className="wiki-nav-links list-none">
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'comparison-engine' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('comparison-engine'); setIsSidebarOpen(false); }}
              >
                📦 Sourcing Packages
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'ai-vram-planner' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('ai-vram-planner'); setIsSidebarOpen(false); }}
              >
                🤖 VRAM Model Planner
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'costing-calculator' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('costing-calculator'); setIsSidebarOpen(false); }}
              >
                🧮 Custom Calculator
              </a>
            </li>
          </ul>
        </div>

        {/* Group 3: Sourcing Verification */}
        <div className="wiki-nav-group mb-6">
          <div className="wiki-nav-group-title font-['Outfit'] text-[10px] uppercase tracking-widest text-[#555565] font-bold mb-2.5 pl-2.5">Sourcing Evidence</div>
          <ul className="wiki-nav-links list-none">
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'sourcing-gallery' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('sourcing-gallery'); setIsSidebarOpen(false); }}
              >
                📸 Sourcing Proofs (11)
              </a>
            </li>
          </ul>
        </div>

        {/* Group 4: Hardware Wiki */}
        <div className="wiki-nav-group mb-6">
          <div className="wiki-nav-group-title font-['Outfit'] text-[10px] uppercase tracking-widest text-[#555565] font-bold mb-2.5 pl-2.5">Hardware Wiki</div>
          <ul className="wiki-nav-links list-none">
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-gpus' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-gpus'); setIsSidebarOpen(false); }}
              >
                🔌 GPUs: Consumer vs. PRO
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-hardening' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-hardening'); setIsSidebarOpen(false); }}
              >
                🛡️ Server Sizing Hardening
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-aircooling' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-aircooling'); setIsSidebarOpen(false); }}
              >
                ❄️ Noctua Air Cooling
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-ipmi' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-ipmi'); setIsSidebarOpen(false); }}
              >
                📡 Remote BMC Management
              </a>
            </li>
          </ul>
        </div>

        {/* Group 5: Software & Operations */}
        <div className="wiki-nav-group mb-6">
          <div className="wiki-nav-group-title font-['Outfit'] text-[10px] uppercase tracking-widest text-[#555565] font-bold mb-2.5 pl-2.5">Software & Ops</div>
          <ul className="wiki-nav-links list-none">
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-software' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-software'); setIsSidebarOpen(false); }}
              >
                💻 Multi-Tenant Containers
              </a>
            </li>
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-sla' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-sla'); setIsSidebarOpen(false); }}
              >
                🤝 MSP SLA & Warranty
              </a>
            </li>
          </ul>
        </div>

        {/* Group 6: Macro Geopolitics */}
        <div className="wiki-nav-group mb-6">
          <div className="wiki-nav-group-title font-['Outfit'] text-[10px] uppercase tracking-widest text-[#555565] font-bold mb-2.5 pl-2.5">Macro Geopolitics</div>
          <ul className="wiki-nav-links list-none">
            <li className="mb-1">
              <a 
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#9090a0] text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/2 border-l-2 border-transparent transition-all duration-200 ${activeSpace === 'wiki-geopolitics' ? 'text-white bg-gradient-to-r from-[#64b5f6]/8 to-[#00e676]/8 border-l-[#00e676]' : ''}`}
                onClick={() => { setActiveSpace('wiki-geopolitics'); setIsSidebarOpen(false); }}
              >
                🌐 Malaysia DC & Export
              </a>
            </li>
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="wiki-sidebar-footer mt-auto pt-4 border-t border-white/5">
          <a 
            href="presentation.html" 
            className="flex items-center justify-center gap-2 w-100 p-2.5 bg-[#ffc107]/10 border border-[#ffc107]/20 text-[#ffc107] rounded-lg text-[10.5px] font-bold transition-all duration-200 hover:bg-[#ffc107]/18 hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            Open 2D Slide presentation
          </a>
        </div>
      </aside>

      {/* MOBILE SIDEBAR BACKGROUND OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* MAIN VIEW CONTENT PANE */}
      <main className="flex-1 md:ml-[290px] p-6 md:p-14 min-h-screen relative bg-[radial-gradient(circle_at_80%_20%,_rgba(0,230,118,0.02)_0%,_transparent_50%),_radial-gradient(circle_at_20%_80%,_rgba(100,181,246,0.02)_0%,_transparent_50%)]">
        <div key={activeSpace}>
        {/* ================= SPACE: EXECUTIVE PITCH ================= */}
        {activeSpace === 'pitch-overview' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Strategic Executive Summary</div>
              <h2 className="font-['Outfit'] text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">Sovereign Private <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">AI Infrastructure</em></h2>
              <p className="text-sm md:text-base text-[#9090a0] mb-7 max-w-[800px]">Stop renting overseas API tokens and exposing proprietary company intelligence. One-time capital investment, unlimited secure offline operations.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#64b5f6]/15 text-[#64b5f6] px-2 py-0.5 rounded uppercase mb-2 inline-block">POC VALIDATION</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Phase 1: Local Office POC</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Deploy a standalone workstation into the head office. Instantly replaces USD-denominated cloud API billing. Zero data packets leave physical bounds, maintaining strict regulatory air-gaps.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#00e676]/15 text-[#00e676] px-2 py-0.5 rounded uppercase mb-2 inline-block">MULTI-TENANT SAAS</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Phase 2: Commercial Hosting</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Configured with secure multi-tenant portals, reselling dedicated secure AI accounts to professional offices (legal chambers, clinics, financial teams) for RM1,500 - RM5,000/month in passive revenue.</p>
                </div>
              </div>

              <div className="mt-8 border-l-3 border-[#64b5f6] pl-5">
                <p className="text-xs md:text-sm italic text-[#ccc] leading-relaxed">
                  "Owning local high-liquidity AI processing nodes secures our margins against the high-depreciation cloud renting models. By selecting components with maximum consumer secondary liquidity, we lock in an asset-backed risk hedge for our capital."
                </p>
                <span className="text-[10px] text-[#555565] block mt-1.5 font-bold uppercase tracking-wider">— Procurement Sourcing Strategy, May 2026</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: CLOUD VS LOCAL ================= */}
        {activeSpace === 'cloud-vs-local' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">The Financial Audit</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Renting Cloud vs. <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Owning Servers</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Subscription structures stack ongoing fees that compound as company usage grows. Local assets pay for themselves and offer a structured exit route.</p>

              <div className="overflow-x-auto border border-white/5 rounded-xl bg-black/15 mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">Metric</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">Overseas Renting (API / Cloud VPs)</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">Sovereign Local Server (Own)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Financial Model</td>
                      <td className="p-3.5 text-[#ff5252] font-semibold">OpEx (Ongoing Recurring Cost)</td>
                      <td className="p-3.5 text-[#00e676] font-semibold">CapEx (One-time Sourced Asset)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Cost Scalability</td>
                      <td className="p-3.5 text-[#ff5252] font-semibold">Scales exponentially with users/queries</td>
                      <td className="p-3.5 text-[#00e676] font-semibold">Flat-rate power utility (RM59 - RM140/mo)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Data Security</td>
                      <td className="p-3.5 text-[#ff5252] font-semibold">Queries sent to foreign nodes (PDPA threat)</td>
                      <td className="p-3.5 text-[#00e676] font-semibold">100% Local Air-Gap (Local Disk storage)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Customization</td>
                      <td className="p-3.5 text-[#9090a0]">Standard generic vendor APIs</td>
                      <td className="p-3.5 text-[#00e676] font-semibold">Preloaded Docker container custom pipelines</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Residual Asset Value</td>
                      <td className="p-3.5 text-[#ff5252] font-semibold">RM0.00 (Zero value left after subscription)</td>
                      <td className="p-3.5 text-[#00e676] font-semibold">High (High-liquidity parts resell on secondary market)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#ff5252]/5 border border-[#ff5252]/15 rounded-xl p-5">
                <h4 className="color-[#ff5252] text-xs font-bold mb-1.5 flex items-center gap-1.5 text-[#ff5252] uppercase">⚠️ Regulatory Risk: Malaysia PDPA Compliance</h4>
                <p className="text-[11px] text-[#cc8888] leading-relaxed">
                  Under Malaysia's Personal Data Protection Act (PDPA), transferring confidential client profiles, financial ledgers, or clinical diagnoses to overseas third-party cloud servers without explicit user authentication carries major corporate liabilities and data leakage exposure risks. Air-gapped local deployment fully hedges this regulatory threat.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: COMPARISON ENGINE ================= */}
        {activeSpace === 'comparison-engine' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Sourcing Comparison</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Standard DIY Sourcing vs. <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Turnkey Integrators</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Understand exactly where the market prices stand. Contrast standard retail sourcing, Emarque's pre-built packages, and our dealer-sourcing pricing models.</p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Package 1 */}
                <div className="border border-white/8 rounded-2xl p-6 bg-white/1 flex flex-col">
                  <div className="text-center pb-5 border-b border-white/5">
                    <div className="font-['Outfit'] text-sm font-bold text-white">A: Retail Sourcing DIY</div>
                    <div className="text-[10.5px] text-[#9090a0] mt-1">Individual retail checkout</div>
                    <div className="font-['Outfit'] text-2xl font-black text-white mt-3.5 mb-1">RM32,099+</div>
                    <div className="text-[9.5px] text-[#555565] uppercase font-bold tracking-wider">Excludes assembly labor</div>
                  </div>
                  <ul className="list-none my-5 text-[11px] text-[#aaa] flex-1">
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> No bulk dealer discount rates</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> Retail RTX 5090 pricing: <span className="text-white font-semibold">RM18,500+</span></li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> Base 2TB standard storage drive</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> Assembly & cable-routing overhead</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> <span className="text-white font-semibold">Bare-metal OS</span> (Must set up AI stack)</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> Individual parts warranty claims</li>
                  </ul>
                </div>

                {/* Package 2 */}
                <div className="border border-white/8 rounded-2xl p-6 bg-white/1 flex flex-col">
                  <div className="text-center pb-5 border-b border-white/5">
                    <div className="font-['Outfit'] text-sm font-bold text-white">B: Emarque Technologies</div>
                    <div className="text-[10.5px] text-[#9090a0] mt-1">Kelana Jaya Turnkey Workstation</div>
                    <div className="font-['Outfit'] text-2xl font-black text-white mt-3.5 mb-1">RM30,000</div>
                    <div className="text-[9.5px] text-[#555565] uppercase font-bold tracking-wider">Bare-metal pre-built</div>
                  </div>
                  <ul className="list-none my-5 text-[11px] text-[#aaa] flex-1">
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> Core Intel Ultra 9 + Z890 board</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> 96GB DDR5 High-speed RAM</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> Base 2TB storage SSD</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> Professional 4U RM44 chassis build</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#ff5252] font-black">✗</span> <span className="text-white font-semibold">No preloaded AI</span> (Standard Windows)</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> Local SI warranty services</li>
                  </ul>
                </div>

                {/* Package 3 */}
                <div className="border border-[#00e676] rounded-2xl p-6 bg-gradient-to-b from-[#00e676]/4 to-transparent relative shadow-[0_0_20px_rgba(0,230,118,0.04)] flex flex-col">
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-[#00e676] text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">BEST SOVEREIGN VALUE</div>
                  <div className="text-center pb-5 border-b border-white/5">
                    <div className="font-['Outfit'] text-sm font-bold text-white">C: Sinlexon Dealer Sourcing</div>
                    <div className="text-[10.5px] text-[#9090a0] mt-1">Wholesale Sourced + Preloaded Stack</div>
                    <div className="font-['Outfit'] text-2xl font-black text-[#00e676] mt-3.5 mb-1">RM29,528</div>
                    <div className="text-[9.5px] text-[#555565] uppercase font-bold tracking-wider">Fully configured AI appliance</div>
                  </div>
                  <ul className="list-none my-5 text-[11px] text-[#aaa] flex-1">
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> <span className="text-white font-semibold">Dealer Price RTX 5090</span>: <span className="text-[#00e676] font-semibold">RM17,000</span></li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> <span className="text-white font-semibold">Double storage capacity</span>: 4TB Kingston</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> Professional 4U RM44 rackmount casing</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> <span className="text-white font-semibold">Preloaded Multi-tenant AI Stack</span></li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> Local hardware active warranties</li>
                    <li className="mb-3 flex items-start gap-2"><span className="text-[#00e676] font-black">✓</span> Included Cyberjaya Tier-3 rack rails</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: AI VRAM PLANNER ================= */}
        {activeSpace === 'ai-vram-planner' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Interactive AI Sourcing Planner</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">VRAM-Centric <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Package Planner</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Select the size of the AI model parameters (in Billions) you plan to run. The AI sourcing planner will dynamically configure the VRAM, hardware tier, and preloaded software stacks.</p>

              <div className="bg-white/2 border border-white/5 rounded-xl p-6 mb-6">
                <div className="flex gap-4 flex-wrap">
                  <div className="flex-1 min-w-[250px]">
                    <label className="block text-[11px] text-[#9090a0] mb-1.5 uppercase font-bold tracking-wider">Target Model Sizing (Billion Parameters):</label>
                    <select 
                      className="w-full bg-[#0a0a0f] border border-white/8 rounded-lg p-3 text-white text-xs font-semibold focus:border-[#64b5f6] focus:outline-none transition-all duration-200"
                      value={plannerModelB}
                      onChange={(e) => setPlannerModelB(e.target.value)}
                    >
                      <option value="starter">Lightweight Models (7B - 14B B) — e.g. Llama-3-8B, Qwen-2.5-14B</option>
                      <option value="performance">Production Reasoning Models (32B - 72B B) — e.g. Llama-3-70B, Qwen-2.5-72B</option>
                      <option value="enterprise">Large Enterprise Models (230B+ or Multi-Tenant Concurrency) — e.g. DeepSeek-R1-671B</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dynamic Sizing Proposal Pitch Card */}
              <div className="border border-white/8 bg-gradient-to-br from-[#64b5f6]/2 to-[#00e676]/2 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle,_var(--primary-glow)_0%,_transparent_70%)] pointer-events-none" />
                
                <div className="flex justify-between items-center border-b border-white/5 pb-5 mb-5 flex-wrap gap-3">
                  <div>
                    <h3 className="font-['Outfit'] text-lg md:text-xl font-bold text-white">{activePlanner.tierName}</h3>
                    <p className="text-[11px] text-[#9090a0] mt-0.5">{activePlanner.vramLabel}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-['Outfit'] text-2xl md:text-3xl font-black text-[#00e676]">{activePlanner.price}</div>
                    <div className="text-[10px] text-[#64b5f6] font-semibold">{activePlanner.saving}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/[0.015] border border-white/[0.03] rounded-lg p-3">
                    <span className="text-[9px] uppercase text-[#555565] font-bold tracking-wider">GPU Configuration</span>
                    <p className="text-xs text-white font-medium mt-1">{activePlanner.gpu}</p>
                  </div>
                  <div className="bg-white/[0.015] border border-white/[0.03] rounded-lg p-3">
                    <span className="text-[9px] uppercase text-[#555565] font-bold tracking-wider">Processor</span>
                    <p className="text-xs text-white font-medium mt-1">{activePlanner.cpu}</p>
                  </div>
                  <div className="bg-white/[0.015] border border-white/[0.03] rounded-lg p-3">
                    <span className="text-[9px] uppercase text-[#555565] font-bold tracking-wider">Memory Hardening</span>
                    <p className="text-xs text-white font-medium mt-1">{activePlanner.ram}</p>
                  </div>
                  <div className="bg-white/[0.015] border border-white/[0.03] rounded-lg p-3">
                    <span className="text-[9px] uppercase text-[#555565] font-bold tracking-wider">Storage Hardening</span>
                    <p className="text-xs text-white font-medium mt-1">{activePlanner.storage}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-white/5 pt-5">
                  <div>
                    <h4 className="text-[11px] text-[#9090a0] uppercase font-bold tracking-wider mb-2.5">Included Preloaded Software Stack</h4>
                    <ul className="list-none p-0 m-0">
                      {activePlanner.software.map((item, idx) => (
                        <li key={idx} className="text-[11px] text-[#aaa] mb-2 flex items-start gap-1.5">
                          <svg className="w-3.5 h-3.5 text-[#00e676] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] text-[#9090a0] uppercase font-bold tracking-wider mb-2.5">Physical Sizing & Operations</h4>
                    <ul className="list-none p-0 m-0">
                      {activePlanner.physical.map((item, idx) => (
                        <li key={idx} className="text-[11px] text-[#aaa] mb-2 flex items-start gap-1.5">
                          <svg className="w-3.5 h-3.5 text-[#00e676] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#64b5f6] to-[#00e676] border-none text-black font-['Outfit'] font-extrabold text-xs py-3.5 px-6 rounded-lg cursor-pointer w-full mt-6 shadow-[0_4px_15px_rgba(0,230,118,0.2)] active:scale-[0.99] transition-all duration-200"
                  onClick={() => window.print()}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                  Print Sovereign AI Proposal Sizing Sheet
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: COSTING CALCULATOR ================= */}
        {activeSpace === 'costing-calculator' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Price Calculator</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Configure Your <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Own Server</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Select components below to dynamically adjust prices. Sourced from active suppliers in Malaysia (Jayacom, E-Cytech, Aspiration).</p>

              <div className="bg-white/2 border border-white/5 rounded-xl p-6 mb-5">
                <div className="flex justify-between mb-3 border-b border-white/5 pb-2.5 text-[10px] font-bold text-[#9090a0] uppercase tracking-wider">
                  <span>Component Selection</span>
                  <span>Supplier Sourced Price (RM)</span>
                </div>
                
                {/* GPU Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">GPU Sizing:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcGpu} 
                    onChange={(e) => setCalcGpu(parseInt(e.target.value))}
                  >
                    <option value="17000">1x MSI Gaming Trio RTX 5090 (Dealer rate) — RM17,000</option>
                    <option value="34000">2x ASUS ROG Astral RTX 5090 (Dealer rate) — RM34,000</option>
                    <option value="47500">1x RTX PRO 6000 Blackwell 96GB (Wholesale) — RM47,500</option>
                    <option value="10899">1x Zotac RTX 5090 Solid (Basic retail) — RM10,899</option>
                    <option value="21798">2x Zotac RTX 5090 Solid (Basic retail) — RM21,798</option>
                  </select>
                </div>

                {/* CPU Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">CPU Sizing:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcCpu} 
                    onChange={(e) => setCalcCpu(parseInt(e.target.value))}
                  >
                    <option value="2799">AMD Ryzen 9 9950X (16 Cores) — RM2,799</option>
                    <option value="2799">Intel Ultra 9 285K (24 Cores) — RM2,799</option>
                    <option value="24999">AMD Threadripper 7980X (64 Cores) — RM24,999</option>
                  </select>
                </div>

                {/* Motherboard Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">Motherboard:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcMobo} 
                    onChange={(e) => setCalcMobo(parseInt(e.target.value))}
                  >
                    <option value="2400">GIGABYTE Z890 AI TOP (AI TOP bios) — RM2,400</option>
                    <option value="2158">ASUS ProArt X870E Creator — RM2,158</option>
                    <option value="4799">ASUS Pro WS TRX50 Sage (BMC remote reboot) — RM4,799</option>
                  </select>
                </div>

                {/* RAM Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">RAM Capacity:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcRam} 
                    onChange={(e) => setCalcRam(parseInt(e.target.value))}
                  >
                    <option value="1600">96GB Corsair Vengeance DDR5 — RM1,600</option>
                    <option value="1990">128GB DDR5 ECC (Error-Correcting) — RM1,990</option>
                    <option value="4450">256GB DDR5 ECC RDIMM (Threadripper WS) — RM4,450</option>
                  </select>
                </div>

                {/* Storage Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">Enterprise Storage:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcStorage} 
                    onChange={(e) => setCalcStorage(parseInt(e.target.value))}
                  >
                    <option value="1500">4TB Kingston KC3000 M.2 NVMe SSD — RM1,500</option>
                    <option value="1100">1.92TB Enterprise NVMe SSD with PLP — RM1,100</option>
                    <option value="1950">3.84TB Micron Enterprise NVMe PLP SSD — RM1,950</option>
                  </select>
                </div>

                {/* PSU Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">Power Supply (PSU):</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcPsu} 
                    onChange={(e) => setCalcPsu(parseInt(e.target.value))}
                  >
                    <option value="750">NZXT C1000 ATX 3.1 Modular Gold 1000W — RM750</option>
                    <option value="1699">Seasonic Prime PX 1600W Platinum — RM1,699</option>
                    <option value="1899">Corsair AX1600i Titanium 1600W — RM1,899</option>
                  </select>
                </div>

                {/* Chassis Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">Server Casing:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcCase} 
                    onChange={(e) => setCalcCase(parseInt(e.target.value))}
                  >
                    <option value="950">SilverStone RM44 4U Rackmount Server Case — RM950</option>
                    <option value="1050">Fractal Design Define 7 XL sound-dampened Tower — RM1,050</option>
                  </select>
                </div>

                {/* Cooler Selector */}
                <div className="flex items-center gap-4 my-3 flex-wrap">
                  <label className="min-w-[140px] text-xs text-[#9090a0]">CPU Cooling:</label>
                  <select 
                    className="flex-1 bg-[#0a0a0f] border border-white/8 p-2.5 text-white rounded-md text-xs font-semibold focus:outline-none focus:border-[#64b5f6]"
                    value={calcCooler} 
                    onChange={(e) => setCalcCooler(parseInt(e.target.value))}
                  >
                    <option value="180">Thermalright Peerless Assassin 120 Air — RM180</option>
                    <option value="529">Noctua NH-D15 premium copper tower air cooler — RM529</option>
                    <option value="599">Noctua TR5-SP6 high dissipation air cooler — RM599</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#64b5f6]/10 border border-[#64b5f6]/30 rounded-2xl p-6 text-center">
                <span className="text-[10px] text-[#64b5f6] font-bold uppercase tracking-widest">Calculated Sovereign Sourced Total Cost</span>
                <div className="font-['Outfit'] text-4xl font-black text-white mt-1.5 mb-1">RM{calcTotal.toLocaleString()}</div>
                <p className="text-[11px] text-[#9090a0] mb-3">Calculated with AIMS datacenter mounting rails + Docker configuration bundle services.</p>
                <span className={`tag text-xs ${calcRemaining >= 0 ? 'tag-g' : 'tag-r'}`}>
                  {calcRemaining >= 0 
                    ? `Within Budget: RM${calcBudget.toLocaleString()} (Remaining: RM${calcRemaining.toLocaleString()})`
                    : `Exceeds Budget: RM${calcBudget.toLocaleString()} (Deficit: RM${Math.abs(calcRemaining).toLocaleString()})`
                  }
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: VERIFIED SOURCING GALLERY ================= */}
        {activeSpace === 'sourcing-gallery' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Verification Evidence Library</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Verified Hardware <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Sourcing Proofs</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Transparency first. Below are the 11 real-world receipts, product screens, cabinet stacks, and active Shopee listings validating exact dealer pricing and hardware dimensions.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SOURCING_IMAGES.map((img, idx) => (
                  <div 
                    key={img.id}
                    className="bg-white/2 border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-4px] hover:border-[#64b5f6] hover:shadow-[0_4px_15px_rgba(100,181,246,0.15)] transition-all duration-200"
                    onClick={() => setActiveLightboxIndex(idx)}
                  >
                    <div className="w-full h-[140px] bg-[#111] overflow-hidden relative group">
                      <img src={`./images/${img.id}`} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                      </div>
                    </div>
                    <div className="p-3">
                      <span className="text-[8px] font-bold text-[#64b5f6] bg-[#64b5f6]/10 px-1.5 py-0.5 rounded uppercase mb-1.5 inline-block">{img.tag}</span>
                      <h4 className="font-['Outfit'] text-[11px] font-bold text-white mb-0.5 truncate">{img.title}</h4>
                      <p className="text-[10px] text-[#9090a0] leading-relaxed line-clamp-2 h-7.5">{img.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: GPUS WIKI ================= */}
        {activeSpace === 'wiki-gpus' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Hardware Sourcing Wiki</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">AI Sizing: Consumer vs. <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Enterprise GPUs</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Understand why selecting GPUs with maximum secondary market liquidity forms a key financial exit strategy hedge for Sinlexon, while enterprise cards suit deep workloads.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 border-l-4 border-l-[#64b5f6]">
                  <span className="text-[9px] font-bold text-[#64b5f6] bg-[#64b5f6]/15 px-2 py-0.5 rounded uppercase mb-2 inline-block">CONSUMER LIQUIDITY (RTX 5090)</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">High Resell Exit Route</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">
                    The <strong>GeForce RTX 5090 OC</strong> draws extreme global demand across three massive secondary markets: PC gamers, independent AI developers, and 3D animators. If Sinlexon ever needs to exit, liquidate, or upgrade their server assets, these GPUs retain excellent secondary pricing stability and can be sold off instantly, minimizing capitalization loss.
                  </p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 border-l-4 border-l-[#ffc107]">
                  <span className="text-[9px] font-bold text-[#ffc107] bg-[#ffc107]/15 px-2 py-0.5 rounded uppercase mb-2 inline-block">ENTERPRISE SPECIALIZATION (PRO 6000)</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Enterprise 96GB Unified Sizing</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">
                    Workstation enterprise cards (like the <strong>RTX PRO 6000 Blackwell</strong>) command high retail prices (RM48,888) with minimal secondary market liquidity due to a highly niche corporate-only buyer base. However, for massive 230B+ parameters or continuous server operations, its massive 96GB unified GDDR7 VRAM memory remains unmatched.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto border border-white/5 rounded-xl bg-black/15">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">GPU Sizing Metric</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">MSI RTX 5090 OC (Consumer)</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">RTX PRO 6000 Blackwell (Enterprise)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">VRAM Sizing</td>
                      <td className="p-3.5 text-white">32GB GDDR7</td>
                      <td className="p-3.5 text-[#00e676] font-bold">96GB GDDR7</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Retail Market Price</td>
                      <td className="p-3.5 text-[#ffc107]">RM18,500.00</td>
                      <td className="p-3.5 text-[#ffc107]">RM48,888.00 (TMT Shopee Verify)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Dealer Sourcing Price</td>
                      <td className="p-3.5 text-[#64b5f6] font-bold">RM17,000.00 (Saves RM1,500!)</td>
                      <td className="p-3.5 text-[#64b5f6] font-bold">RM47,500.00 (Saves RM1,388!)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">Exit Resell Liquidity</td>
                      <td className="p-3.5 text-[#00e676]">Extreme (Broad secondary base)</td>
                      <td className="p-3.5 text-[#ff5252]">Very Low (Slow niche business sales)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white whitespace-nowrap">ECC Support</td>
                      <td className="p-3.5 text-[#9090a0]">Soft ECC (Driver-level)</td>
                      <td className="p-3.5 text-[#00e676] font-bold">Native Hardware ECC (Zero corruption)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: HARDENING WIKI ================= */}
        {activeSpace === 'wiki-hardening' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Server Hardening</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Zero-Downtime <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Server Sizing</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Standard desktop workstations crash under 24/7 server loads. We source hardened enterprise components with active local Malaysia warranties to ensure extreme operations stability.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#00e676]/15 text-[#00e676] px-2 py-0.5 rounded uppercase mb-2 inline-block">ECC MEMORY</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">DDR5 ECC / RDIMM</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Standard RAM suffers from "bit-flips" caused by ambient electrical noise, crashing large model inference pipelines randomly. We size our Performance and Enterprise tiers with <strong>ECC RAM</strong>, containing on-die correction controllers to ensure zero memory crashes.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#00e676]/15 text-[#00e676] px-2 py-0.5 rounded uppercase mb-2 inline-block">POWER PROTECTION</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Micron NVMe PLP SSDs</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Unexpected office power failures instantly corrupt models and user databases mid-write. We standardize on <strong>Enterprise SSDs with PLP (Power-Loss Protection)</strong>, carrying capacitor arrays that supply instant current to flush active data safely to disk.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#00e676]/15 text-[#00e676] px-2 py-0.5 rounded uppercase mb-2 inline-block">RELIABILITY BASE</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Seasonic Titanium PSUs</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Standard power supplies run hot and waste electricity, generating heat that shortens CPU/GPU lifespan. We build using <strong>Titanium & Platinum Grade modular power supplies</strong>, drawing 94%+ efficiency ratings to reduce heat and power bills.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: AIR COOLING WIKI ================= */}
        {activeSpace === 'wiki-aircooling' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Cooling Optimization</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Noctua Active <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Air-Cooling</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Why we enforce 100% professional dual-tower active air-cooling instead of fragile liquid loops.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 border-l-4 border-l-[#ff5252]">
                  <span className="text-[9px] font-bold text-[#ff5252] bg-[#ff5252]/15 px-2 py-0.5 rounded uppercase mb-2 inline-block">LIQUID COOLING DANGERS</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Water Pumps & Leak Failures</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">
                    Liquid AIO loops contain liquid pumps, tubes, and gaskets that decay over time. In a 24/7 office or server room, a single pump motor failure instantly overheats the CPU, causing total downtime. A liquid leak instantly destroys RM17,000+ graphics cards.
                  </p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 border-l-4 border-l-[#00e676]">
                  <span className="text-[9px] font-bold text-[#00e676] bg-[#00e676]/15 px-2 py-0.5 rounded uppercase mb-2 inline-block">100% AIR SAFETY</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Zero-leak Premium Fans</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">
                    We implement custom copper <strong>Noctua NH-D15 & Thermalright Peerless Assassin 120</strong> dual-tower heatsinks with SSO2 high-lifespan bearings. Air cooling contains ZERO liquids. There is nothing to leak. If a fan motor fails, the massive copper heatsink continues passive dissipation, preventing hardware damage and giving you time to swap fans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: REMOTE BMC WIKI ================= */}
        {activeSpace === 'wiki-ipmi' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">IPMI Out-of-band remote control</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">ASPEED AST2600 <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Remote BMC</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Control your local hardware nodes from anywhere in the world, even if the primary Operating System has frozen.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#64b5f6]/15 text-[#64b5f6] px-2 py-0.5 rounded uppercase mb-2 inline-block">OUT-OF-BAND ADMINISTRATION</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Remote Hardware Access</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Traditional workstation computers require an operator to physically walk up to the machine, plug in a monitor/keyboard, and reboot the system if a crash occurs. This is unacceptable for remote deployment.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#00e676]/15 text-[#00e676] px-2 py-0.5 rounded uppercase mb-2 inline-block">SERVER-GRADE BMC</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">IPMI 2.0 Web Interface</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Our Enterprise server tiers include an integrated <strong>ASPEED AST2600 BMC microcontroller</strong> on the ASUS Pro WS TRX50 Sage motherboard. By plugging an ethernet line directly into the dedicated IPMI socket, you can access BIOS, read thermal sensors, mount bootable OS images, and force hardware reboots remotely.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: SOFTWARE WIKI ================= */}
        {activeSpace === 'wiki-software' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">AI Software Infrastructure</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Pre-configured <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">Docker Containers</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">We do not ship bare workstations. Every server appliance is configured with a fully offline, multi-tenant AI stack and pre-cached local models.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#64b5f6]/15 text-[#64b5f6] px-2 py-0.5 rounded uppercase mb-2 inline-block">DOCKER WORKSPACE</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Secured container stack</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">AI services run inside isolated Docker containers. Prevents library version conflicts and keeps database containers securely isolated from main network lanes.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#00e676]/15 text-[#00e676] px-2 py-0.5 rounded uppercase mb-2 inline-block">OPEN WEBUI</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Multi-Tenant Client Portal</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">A clean, modern chat interface resembling ChatGPT. Supports multiple user credentials, system prompt templates, custom company RAG document databases, and API key management.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#ffc107]/15 text-[#ffc107] px-2 py-0.5 rounded uppercase mb-2 inline-block">LOCAL INFERENCE ENGINE</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">VLLM & Ollama Pipeline</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">High-speed local inference routing with cached quantized checkpoints of **Llama-3**, **Qwen-2.5**, and **DeepSeek-R1** models running 100% offline from local NVMe.</p>
                </div>
              </div>

              <h3 className="font-['Outfit'] text-sm text-white mb-2.5 font-bold">Model Parameters vs. VRAM Allocation Guide</h3>
              <div className="overflow-x-auto border border-white/5 rounded-xl bg-black/15">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">Model Parameter Size (B)</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">Ideal Local Models</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">VRAM Required</th>
                      <th className="p-4 text-[#9090a0] font-bold uppercase tracking-wider text-[10px]">Hardware Sizing Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white">7B - 14B Parameters</td>
                      <td className="p-3.5 text-[#aaa]">Llama-3-8B, Qwen-2.5-14B (Excellent speed)</td>
                      <td className="p-3.5 text-white">24GB - 32GB</td>
                      <td className="p-3.5 text-[#64b5f6] font-semibold">Starter Tier (1x RTX 5090 32GB)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white">32B - 72B Parameters</td>
                      <td className="p-3.5 text-[#aaa]">DeepSeek-Coder-32B, Llama-3-70B, Qwen-2.5-72B</td>
                      <td className="p-3.5 text-white">48GB - 64GB</td>
                      <td className="p-3.5 text-[#00e676] font-semibold">Performance Tier (2x RTX 5090 64GB)</td>
                    </tr>
                    <tr className="border-b border-white/3">
                      <td className="p-3.5 font-bold text-white">230B+ Parameters</td>
                      <td className="p-3.5 text-[#aaa]">DeepSeek-R1-671B (quantized) or Concurrent Users</td>
                      <td className="p-3.5 text-white">96GB+</td>
                      <td className="p-3.5 text-[#ffc107] font-semibold">Enterprise Tier (1x RTX PRO 6000 96GB)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: OPERATIONS & SLA ================= */}
        {activeSpace === 'wiki-sla' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Operations Maintenance</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Zero-Downtime <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">SLA & Warranty</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Eliminate the high cost of hiring an in-house RM80,000/yr AI Engineer. Our Managed Service Provider agreement secures full operations uptime.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 border-l-4 border-l-[#ff5252]">
                  <span className="text-[9px] font-bold text-[#ff5252] bg-[#ff5252]/15 px-2 py-0.5 rounded uppercase mb-2 inline-block">Hiring Overhead</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">The In-house Employee Trap</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">
                    Hiring an in-house DevOps engineer to deploy and maintain Docker containers, update offline models, and monitor hardware temperatures averages **RM80,000+ annually** before benefits. This heavily depletes AI project ROI.
                  </p>
                </div>
                <div className="bg-[#00e676]/4 border border-[#00e676]/15 rounded-xl p-5 border-l-4 border-l-[#00e676]">
                  <span className="text-[9px] font-bold text-[#00e676] bg-[#00e676]/15 px-2 py-0.5 rounded uppercase mb-2 inline-block">Managed Service SLA</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Direct MSP Coverage</h4>
                  <p className="text-xs text-[#aaa] leading-relaxed">
                    Our monthly service retainer covers comprehensive remote software patches, local model updates, database backups, and instant parts-swap services. Your hardware runs safely under local distributor active warranties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SPACE: MACRO GEOPOLITICS ================= */}
        {activeSpace === 'wiki-geopolitics' && (
          <div className="max-w-[1000px] mx-auto animate-fade-in-up">
            <div className="bg-[#0f0f14]/65 backdrop-blur-lg border border-white/8 rounded-2xl p-8 mb-6">
              <div className="text-[10px] uppercase tracking-[2px] text-[#64b5f6] font-bold mb-2">Geopolitical Landscape</div>
              <h2 className="font-['Outfit'] text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">Malaysia DC Boom & <em className="not-italic bg-gradient-to-r from-[#64b5f6] to-[#00e676] bg-clip-text text-transparent">US Export Hedges</em></h2>
              <p className="text-sm text-[#9090a0] mb-7 max-w-[800px]">Why locating sovereign computing nodes in Malaysia is a key strategic advantage as US-China export restrictions tighten.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#ff5252]/15 text-[#ff5252] px-2 py-0.5 rounded uppercase mb-2 inline-block">EXPORT LIMITS</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">US Chip Controls</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">Tightening US Department of Commerce controls limit the export of high-performance enterprise GPUs (such as NVIDIA H100/H800/B200) to Asia. Sourcing consumer RTX 5090 cards acts as a crucial strategic hedge, bypassing strict export controls.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#64b5f6]/15 text-[#64b5f6] px-2 py-0.5 rounded uppercase mb-2 inline-block">MALAYSIA BOOM</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Data Center Powerhouse</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">With billions pouring into data centers in Cyberjaya and Johor (NVIDIA + YTL $4.3B, ByteDance $2.1B), Malaysia is the rising AI hub. Securing server chassis space now guarantees early access to premium colocation lanes.</p>
                </div>
                <div className="bg-white/2 border border-white/5 rounded-xl p-5 hover:translate-y-[-2px] hover:border-white/10 hover:bg-white/3 transition-all duration-200">
                  <span className="text-[9px] font-bold bg-[#ffc107]/15 text-[#ffc107] px-2 py-0.5 rounded uppercase mb-2 inline-block">VALUATION HEDGE</span>
                  <h4 className="font-['Outfit'] text-sm font-bold text-white mb-1.5">Ringgit Sourcing Hedge</h4>
                  <p className="text-xs text-[#9090a0] leading-relaxed">With the USD-Ringgit currency volatility, cloud VM renting bills spike dynamically. Owning local server assets locks in a solid, fixed-cost operating expense profile, shielding you from currency shocks.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>{/* end key={activeSpace} wrapper */}

      </main>

      {/* REACT LIGHTBOX MODAL WITH FULL PAGE SWIPE CONTROLS */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-[#050508]/95 backdrop-blur-md z-[200] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="bg-[#0f0f14] border border-white/8 rounded-2xl w-full max-w-[950px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] max-h-[90vh] shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-black/60 border border-white/15 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-white/10 z-[210]"
              onClick={() => setActiveLightboxIndex(null)}
            >
              &times;
            </button>

            {/* Media side with Arrow Buttons */}
            <div className="bg-black flex items-center justify-center relative overflow-hidden h-[300px] lg:h-full group">
              <img 
                src={`./images/${SOURCING_IMAGES[activeLightboxIndex].id}`} 
                alt={SOURCING_IMAGES[activeLightboxIndex].title} 
                className="max-w-full max-h-full object-contain w-full"
              />
              
              {/* Left arrow */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border border-white/10 text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/10"
                onClick={prevLightbox}
              >
                &#8592;
              </button>

              {/* Right arrow */}
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border border-white/10 text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/10"
                onClick={nextLightbox}
              >
                &#8594;
              </button>

              {/* Index indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">
                {activeLightboxIndex + 1} / {SOURCING_IMAGES.length}
              </div>
            </div>

            {/* Details panel */}
            <div className="p-6 md:p-8 flex flex-col overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/8">
              <span className="text-[8px] font-bold text-[#64b5f6] bg-[#64b5f6]/10 px-2 py-0.5 rounded uppercase mb-2 inline-block self-start">
                {SOURCING_IMAGES[activeLightboxIndex].tag}
              </span>
              <h3 className="font-['Outfit'] text-xl font-bold text-white mb-4">
                {SOURCING_IMAGES[activeLightboxIndex].title}
              </h3>
              
              <div className="mb-4 text-xs">
                <span className="text-[#555565] block uppercase font-bold tracking-wider text-[9px] mb-1">Distributor Price / Sizing</span>
                <p className="font-bold text-white">{SOURCING_IMAGES[activeLightboxIndex].price}</p>
              </div>

              <div className="mb-4 text-xs">
                <span className="text-[#555565] block uppercase font-bold tracking-wider text-[9px] mb-1">Verification Detail</span>
                <p className="text-[#9090a0] leading-relaxed">{SOURCING_IMAGES[activeLightboxIndex].desc}</p>
              </div>

              <div className="bg-[#64b5f6]/10 border border-[#64b5f6]/15 rounded-xl p-4.5 text-xs text-[#64b5f6] mt-4 leading-relaxed">
                <strong className="block mb-1">Strategic Business Sourcing Insight:</strong>
                {SOURCING_IMAGES[activeLightboxIndex].insight}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
