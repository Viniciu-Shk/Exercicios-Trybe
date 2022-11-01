"use strict";
// exercicio 1
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzinou');
    }
    turnOn() {
        console.log('Ligou');
    }
    turnOff() {
        console.log('Desligou');
    }
    speedUp() {
        console.log('Acelerou');
    }
    speedDown() {
        console.log('Desacelerou');
    }
    stop() {
        console.log('Acelerou');
    }
    turn(direcao) {
        console.log(`Virou para ${direcao}`);
    }
}
const car1 = new Car('volks', 'blue', 4);
let calabresa = {
    flavor: 'Calabresa',
    slices: 8,
};
let marguerita = {
    flavor: 'Marguerita',
    slices: 6,
};
let nutela = {
    flavor: 'Nutela',
    slices: 4,
};

console.log(calabresa, marguerita, nutela);