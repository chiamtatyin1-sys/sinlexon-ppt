export const powerData = {
  rate: 0.45, // RM per kWh (commercial tariff)
  hoursPerDay: 8,
  daysPerMonth: 22,
  tiers: {
    starter: {
      gpuSetup: '1x RTX 5090',
      powerLoad: 750,
      powerIdle: 150,
    },
    performance: {
      gpuSetup: '2x RTX 5090',
      powerLoad: 1300,
      powerIdle: 250,
    },
    enterprise: {
      gpuSetup: '1x PRO 6000',
      powerLoad: 750,
      powerIdle: 200,
    },
  },
};

export function calcPower(tier) {
  const d = powerData.tiers[tier];
  const rate = powerData.rate;
  const hours = powerData.hoursPerDay;
  const days = powerData.daysPerMonth;

  const perHour = (d.powerLoad / 1000) * rate;
  const perDay = perHour * hours;
  const perMonth = perDay * days;
  const perYear = perMonth * 12;
  const fiveYear = perYear * 5;

  return {
    powerLoad: d.powerLoad,
    powerIdle: d.powerIdle,
    perHour: perHour.toFixed(2),
    perDay: perDay.toFixed(2),
    perMonth: Math.round(perMonth),
    perYear: Math.round(perYear),
    fiveYear: Math.round(fiveYear),
  };
}
