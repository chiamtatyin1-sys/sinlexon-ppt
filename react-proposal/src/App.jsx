import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import WhyOwn from './components/WhyOwn';
import AI101 from './components/AI101';
import AILandscape from './components/AILandscape';
import Tiers from './components/Tiers';
import Costing from './components/Costing';
import Calculator from './components/Calculator';
import RTX6000 from './components/RTX6000';
import PowerCost from './components/PowerCost';
import SoftwareStack from './components/SoftwareStack';
import SelfUse from './components/SelfUse';
import Security from './components/Security';
import Compliance from './components/Compliance';
import Expansion from './components/Expansion';
import MarketCalc from './components/MarketCalc';
import MarketRevenue from './components/MarketRevenue';
import ValueProp from './components/ValueProp';
import AIBrands from './components/AIBrands';
import PricingService from './components/PricingService';
import Timeline from './components/Timeline';
import SLA from './components/SLA';
import BackupRecovery from './components/BackupRecovery';
import Datacenter from './components/Datacenter';
import TaxBenefits from './components/TaxBenefits';
import FAQ from './components/FAQ';
import WhereToBuy from './components/WhereToBuy';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      section.classList.add('section-animate');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0]">
      <Nav activeSection={activeSection} />
      <div className="scroll-hint fixed bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#444] z-50 flex items-center gap-1.5 transition-opacity duration-300">
        <span className="animate-bounce">&#8595;</span> Scroll to explore
      </div>

      <Hero />
      <ExecutiveSummary />
      <WhyOwn />
      <AI101 />
      <AILandscape />
      <Tiers />
      <Costing />
      <Calculator />
      <RTX6000 />
      <PowerCost />
      <SoftwareStack />
      <SelfUse />
      <Security />
      <Compliance />
      <Expansion />
      <MarketCalc />
      <MarketRevenue />
      <ValueProp />
      <AIBrands />
      <PricingService />
      <Timeline />
      <SLA />
      <BackupRecovery />
      <Datacenter />
      <TaxBenefits />
      <FAQ />
      <WhereToBuy />
      <NextSteps />
      <Footer />
    </div>
  );
}

export default App;
