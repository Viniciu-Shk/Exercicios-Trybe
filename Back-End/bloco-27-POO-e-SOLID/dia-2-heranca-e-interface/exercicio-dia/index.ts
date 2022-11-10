import { AgeFromDate } from 'age-calculator'
import Str from '@supercharge/strings'
// class Aluno {
  
//   constructor(
//     private _matricula: number,
//     private _nome: string,
//     private _notaProva: number[],
//     private _notaTrabalho: number[]
//   ) {}
//   somaNotasProva() {
//     return this._notaProva.reduce((acc, cur) => acc + cur);
//   }
//   somaNotasTrabalho() {
//     return this._notaTrabalho.reduce((acc, cur) => acc + cur);
//   }
  
//   public get notaTrabalho(): number[] {
//     return this._notaTrabalho;
//   }
//   public set notaTrabalho(value: number[]) {
//     this._notaTrabalho = value;
//   }
//   public get notaProva(): number[] {
//     return this._notaProva;
//   }
//   public set notaProva(value: number[]) {
//     this._notaProva = value;
//   }
//   public get nome(): string {
//     return this._nome;
//   }
//   public set nome(value: string) {
//     this._nome = value;
//   }
//   public get matricula(): number {
//     return this._matricula;
//   }
//   public set matricula(value: number) {
//     this._matricula = value;
//   }
// };

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.nameValidarion(value);
    this._name = value;
  }

  private nameValidarion(value: string): void {
    if (value.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    
  }
}

class Person {
  constructor(private _name: string, private _birthDate: Date ) {}
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }
  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve ter no mínimo três caracteres');
  }
  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro');
    if (new AgeFromDate(value).age > 120) throw new Error('A pessoa não pode possuir mais de 120 anos');
  }
}

class Student extends Person {
  public enrollment: string ;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = Str.random(16);
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    this.validateWorks(value);
    this._worksGrades = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades
  }

  public set examsGrades(value: number[]) {
    this.validateExams(value);
    this._examsGrades = value;
  }

  public sumGrades(): string {
    const exSum = this.examsGrades.reduce((acc, cur) => acc + cur);
    const wkSum = this.worksGrades.reduce((acc, cur) => acc + cur);
    return `exams sum: ${exSum}, works sum: ${wkSum}`
  }

  public sumAverageGrade(): string {
    const exAvgSum = this.examsGrades.reduce((acc, cur) => acc + cur) / this.examsGrades.length;
    const wkAvgSum = this.worksGrades.reduce((acc, cur) => acc + cur) / this.worksGrades.length;
    return `exams avarage score: ${exAvgSum}, works avarage score: ${wkAvgSum}`
  }
  public generateEnrollment(): string {
    return this.enrollment
  }

  private validateExams(list: number[]): void {
    if (list.length > 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
  }

  private validateWorks(list: number[]): void {
    if (list.length > 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
  }
}

// const p1 = new Person('Maria da Consolação', new Date('1980/01/25'));
// const p2 = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(p1.name, p1.birthDate);
// console.log(p2.name, p2.birthDate);

// p1.name = 'Rl';
// p1.birthDate = new Date('1500/01/25');
// p1.birthDate = new Date('2500/01/25');
// console.log(p1.name);

// const s1 = new Student('Vini', new Date('1990/06/21'));
// const s2 = new Student('Vicki', new Date('1980/02/01'));

// console.log(s1.name, new AgeFromDate(s1.birthDate).age);
// console.log(s2.name, new AgeFromDate(s2.birthDate).age);

// s1.examsGrades = [5, 5, 5, 5 ,6]
// s1.worksGrades = [2, 3, 4]

// s1.examsGrades = [5, 5, 5, 5]
// s1.worksGrades = [7, 9]

// console.log((s1.sumGrades()));
// console.log((s1.sumAverageGrade()));

// const math = new Subject('Matemática');
// const story = new Subject('História');
// const philosophy = new Subject('Filosofia');

// console.log(math);
// console.log(story);
// console.log(philosophy);

// const invalidSubjectName = new Subject('Po');
// console.log(invalidSubjectName);

class Teacher extends Person implements Employee {
  private _registration: string;
  private _admissionDate: Date;
  constructor(name: string, birthDate: Date, private _salary: number, private _subject: Subject) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
    this.salary = _salary;
    this._admissionDate = new Date();
  }
  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }
  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    this._registration = value;
  }
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this.salaryValidation(value);
    this._salary = value;
  }
  public get admissionDate(): Date {
    return this._admissionDate;
  }
  public set admissionDate(value: Date) {
    this.admissionValidation(value);
    this._admissionDate = value;
  }
  generateRegistration(): string {
    return Str.random(16)
  }
  private salaryValidation(value: number): void {
    if (value < 0) throw new Error('O salário não pode ser negativo'); 
  }
  private admissionValidation(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser no futuro');
    
  }
}

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
// const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), -2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;