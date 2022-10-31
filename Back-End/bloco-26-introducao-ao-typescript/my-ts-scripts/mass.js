"use strict";
exports.__esModule = true;
exports.exec = exports.convert = void 0;
var readlineSync = require('readline-sync');
var masses = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convert(value, baseMass, conversionMass) {
    return value * (Math.pow(10, (masses.indexOf(conversionMass) - masses.indexOf(baseMass))));
}
exports.convert = convert;
function exec() {
    var baseValue = readlineSync.questionFloat('Give me a natural number');
    var baseUnit = readlineSync.keyInSelect(masses, 'Select base unit');
    var conversionUnit = readlineSync.keyInSelect(masses, 'Select conversion unit');
    var result = convert(baseValue, masses[baseUnit], masses[conversionUnit]);
    console.log("".concat(baseValue).concat(masses[baseUnit], " \u00E9 igual a ").concat(result).concat(masses[conversionUnit]));
}
exports.exec = exec;
exec();
