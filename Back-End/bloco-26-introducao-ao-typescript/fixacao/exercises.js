"use strict";
exports.__esModule = true;
exports.circle = exports.trapeze = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1 ".concat(name, "!");
}
exports.greeter = greeter;
function personAge(name, age) {
    return "".concat(name, " tem ").concat(age, " anos!");
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return Math.pow(side, 2);
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function rhombus(smallDiagonal, bigDiagonal) {
    return smallDiagonal * bigDiagonal / 2;
}
exports.rhombus = rhombus;
function trapeze(bigBase, smallBase, heigth) {
    return (bigBase + smallBase) * heigth / 2;
}
exports.trapeze = trapeze;
function circle(radius) {
    return (Math.pow(radius, 2)) * 3.14;
}
exports.circle = circle;
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 0] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 1] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 2] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1
var weekDays;
(function (weekDays) {
    weekDays[weekDays["segundaFeira"] = 1] = "segundaFeira";
    weekDays[weekDays["ter\u00E7aFeira"] = 2] = "ter\u00E7aFeira";
    weekDays[weekDays["quartaFeita"] = 3] = "quartaFeita";
    weekDays[weekDays["quintaFeira"] = 4] = "quintaFeira";
    weekDays[weekDays["sextaFeira"] = 5] = "sextaFeira";
    weekDays[weekDays["sabado"] = 6] = "sabado";
    weekDays[weekDays["domingo"] = 7] = "domingo";
})(weekDays || (weekDays = {}));
var coresArcoIris;
(function (coresArcoIris) {
    coresArcoIris[coresArcoIris["vermelho"] = 0] = "vermelho";
    coresArcoIris[coresArcoIris["azul"] = 1] = "azul";
    coresArcoIris[coresArcoIris["amarelo"] = 2] = "amarelo";
    coresArcoIris[coresArcoIris["roxo"] = 3] = "roxo";
    coresArcoIris[coresArcoIris["verde"] = 4] = "verde";
})(coresArcoIris || (coresArcoIris = {}));
var terça = weekDays.terçaFeira;
console.log(terça);
var cor = coresArcoIris.azul;
console.log(cor);
