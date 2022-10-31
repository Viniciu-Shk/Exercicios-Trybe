export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(smallDiagonal: number, bigDiagonal: number): number {
  return smallDiagonal * bigDiagonal / 2;
}

export function trapeze(bigBase: number, smallBase: number, heigth: number): number {
  return (bigBase + smallBase) * heigth / 2;
}

export function circle(radius: number): number {
  return (radius ** 2) * 3.14;
}

enum StudentStatus {
  Active,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

enum weekDays {
  segundaFeira = 1,
  terçaFeira,
  quartaFeita,
  quintaFeira,
  sextaFeira,
  sabado,
  domingo
}

enum coresArcoIris {
  vermelho,
  azul,
  amarelo,
  roxo,
  verde,
}

const terça = weekDays.terçaFeira;
console.log(terça);
const cor = coresArcoIris.azul;
console.log(cor);

