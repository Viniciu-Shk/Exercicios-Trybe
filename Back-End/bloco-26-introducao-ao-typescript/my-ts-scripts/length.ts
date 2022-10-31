const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function convert(value: number, baseUnit: string, conversionUnit: string): number {
  return value * (10 ** (units.indexOf(conversionUnit) - units.indexOf(baseUnit)));
} 