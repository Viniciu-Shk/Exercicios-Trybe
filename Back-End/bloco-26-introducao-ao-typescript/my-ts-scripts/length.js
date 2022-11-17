"use strict";
exports.__esModule = true;
exports.convert = void 0;
var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, baseUnit, conversionUnit) {
    return value * (Math.pow(10, (units.indexOf(conversionUnit) - units.indexOf(baseUnit))));
}
exports.convert = convert;

console.log(convert(100, 'km', 'm'));