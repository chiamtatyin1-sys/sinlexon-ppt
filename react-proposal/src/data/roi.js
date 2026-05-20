import { tiers } from './pricing';
import { calcPower } from './power';

export const cloudCost = {
  monthly: 230, // ChatGPT Team
  yearly: 2760,
  fiveYear: 13800,
};

export function calcROI(tierKey) {
  const tier = tiers[tierKey];
  const power = calcPower(tierKey);
  const queriesPerDay = 500;
  const queries5Year = queriesPerDay * 365 * 5;

  const year1 = tier.budget + power.perYear;
  const year2to5 = power.perYear + 3000; // annual service
  const total5Year = year1 + year2to5 * 4;
  const revenue10Clients = 5000 * 10 * 12; // RM600k/year
  const netWithRevenue = total5Year - revenue10Clients;

  return {
    initial: tier.budget,
    year1,
    year2to5: year2to5,
    total5Year,
    cloud5Year: cloudCost.fiveYear,
    queries5Year,
    costPer1k: (total5Year / (queries5Year / 1000)).toFixed(2),
    revenue10Clients,
    netWithRevenue,
    power,
  };
}

export const roiComparison = {
  starter: calcROI('starter'),
  performance: calcROI('performance'),
  enterprise: calcROI('enterprise'),
};

export const cloudVsLocal = [
  { feature: 'Monthly cost', cloud: 'RM230 - RM5,000+/mo', local: 'RM59-140/mo (electricity)', cloudBad: true },
  { feature: '5-year total cost', cloud: 'RM13,800 - RM300,000+', local: 'RM30k-100k (one-time)', cloudBad: true },
  { feature: 'Data privacy', cloud: 'Data goes to US servers', local: 'Data never leaves your control', cloudBad: true },
  { feature: 'Offline access', cloud: 'Requires internet', local: 'Works completely offline', cloudBad: true },
  { feature: 'Customization', cloud: 'Limited to provider options', local: 'Full control over models & config', cloudBad: false },
  { feature: 'Fine-tuning', cloud: 'Expensive or unavailable', local: 'Free with Unsloth', cloudBad: false },
  { feature: 'Vendor lock-in', cloud: 'Dependent on provider', local: 'Open-source, no lock-in', cloudBad: false },
  { feature: 'Asset ownership', cloud: 'Nothing to own', local: 'Depreciable company asset', cloudBad: false },
  { feature: 'Query limits', cloud: 'Rate-limited, throttled', local: 'Unlimited queries', cloudBad: false },
  { feature: 'Revenue potential', cloud: 'Cannot resell', local: 'Sell API access to clients', cloudBad: false },
];
