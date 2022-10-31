const readlineSync = require('readline-sync');

const masses = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

export function convert(value: number, baseMass: string, conversionMass: string): number {
  
  return value * (10 ** (masses.indexOf(conversionMass) - masses.indexOf(baseMass)));
} 

export function exec() {
  const baseValue = readlineSync.questionFloat('Give me a natural number');
  const baseUnit = readlineSync.keyInSelect(masses, 'Select base unit');
  const conversionUnit = readlineSync.keyInSelect(masses, 'Select conversion unit');
  const result = convert(baseValue, masses[baseUnit], masses[conversionUnit]);
  console.log(`${baseValue}${masses[baseUnit]} é igual a ${result}${masses[conversionUnit]}`);
}

exec();