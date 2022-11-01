// exercicio 1

class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzinou');
    
  }

  turnOn(): void {
    console.log('Ligou');
  }

  turnOff(): void {
    console.log('Desligou');
  }

  speedUp(): void {
    console.log('Acelerou');
  }

  speedDown(): void {
    console.log('Desacelerou');
  }

  stop(): void {
    console.log('Acelerou');
  }

  turn(direcao: string): void {
    console.log(`Virou para ${direcao}`);
  }
}

const car1 = new Car('volks', 'blue', 4);

//exercicio 3

type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

let calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

let marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

let nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4,
}