import { AgeFromDate } from 'age-calculator'
import Str from '@supercharge/strings'

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

abstract class Person {
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

class Student extends Person implements Enrollable {
  public enrollment: string ;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = Str.random(16);
  }
  public get evaluationsResults() {
    return this._evaluationsResults;
  }

  public sumGrades(): number {
    return [...this.evaluationsResults].reduce((acc, cur) => acc + cur.score, 0)
  }

  public sumAverageGrades(): number {
    const sumGrades = this.sumGrades();
    return sumGrades / this.evaluationsResults.length
  }
  public generateEnrollment(): string {
    return this.enrollment
  }
  public addEvaluationResult(value: EvaluationResult): void {
    this.evaluationsResults.push(value);
  }
}

class Employee extends Person implements Enrollable {
  private _enrollment: string;
  private _adimissionDate: Date = new Date();
  constructor(name: string, birthDate: Date, private _salary: number) {
    super(name, birthDate);
    this.salary = _salary;
    this._enrollment = Str.random(16);
  }
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this.salaryValidation(value);
    this._salary = value;
  }
  public get adimissionDate(): Date {
    return this._adimissionDate;
  }
  public set adimissionDate(value: Date) {
    this.admissionValidation(value);
    this._adimissionDate = value;
  }
  public get enrollment() {
    return this._enrollment;
  }
  public set enrollment(value) {
    this._enrollment = value;
  }
  public generateEnrollment(): string {
    return this.enrollment
  }
  private salaryValidation(value: number): void {
    if (value < 0) throw new Error('O salário não pode ser negativo'); 
  }
  private admissionValidation(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser no futuro'); 
  }
}

// const e1 = new Employee('Robson', new Date('2000/05/11'), 2000);

// console.log(e1);
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// e1.adimissionDate = today;


class Teacher extends Employee {
  constructor(name: string, birthDate: Date, salary: number, private _subject: Subject) {
    super(name, birthDate, salary)
  }
  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }
}

// const t1 = new Teacher('Cleide', new Date('1990/03/03'), 2000, 'História');

// console.log(t1);
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// t1.adimissionDate = tomorrow;

abstract class Evaluation {
  constructor(private _score: number, private _teacher: Teacher) {
    this.score = _score;
  }
  public get teacher(): Teacher {
    return this._teacher;
  }
  public set teacher(value: Teacher) {
    this._teacher = value;
  }
  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    this.scoreValidation(value);
    this._score = value;
  }
  private scoreValidation(value: number): void {
    if (value < 0) throw new Error('A pontuação não pode ser negativa');  
  }
}

class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.scoreMaxValidation(score);
  }
  private scoreMaxValidation(value: number): void {
    if (value > 25) throw new Error('A pontuação não pode passar de 25 pontos');
  }
}

class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.scoreMaxValidation(score);
  }
  private scoreMaxValidation(value: number): void {
    if (value > 50) throw new Error('A pontuação não pode passar de 50 pontos');
  }
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

class EvaluationResult {
  constructor(private _evaluation: Evaluation, private _score: number) {
    this.score = _score;
    this.evaluation = _evaluation;
  }
  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    this.scoreValidation(value, this.evaluation);
    this._score = value;
  }
  public get evaluation(): Evaluation {
    return this._evaluation;
  }
  public set evaluation(value: Evaluation) {
    this._evaluation = value;
  }
  private scoreValidation(score: number, evaluation: Evaluation): void {
    if (score < 0) throw new Error('A pontuação não pode ser negativa');
    if (score > evaluation.score) throw new Error('A pontuação não pode ser maior que a pontuação da avaliação');
  }
}

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

// const math = new Subject('Matemática');
// const history = new Subject('História');

// const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

// const examMath = new Exam(25, marta);
// const workMath = new Work(50, marta);
// const examHistory = new Exam(25, joao);
// const workHistory = new Work(50, joao);

// carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
// carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
// carolina.addEvaluationResult(new EvaluationResult(examHistory, 25));
// carolina.addEvaluationResult(new EvaluationResult(workHistory, 50));

// console.log('Avaliações: ', carolina.evaluationsResults);
// console.log('Soma das notas: ', carolina.sumGrades());
// console.log('Média das notas: ', carolina.sumAverageGrades());

// lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
// lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
// lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
// lucas.addEvaluationResult(new EvaluationResult(workHistory, 50));

// console.log('Avaliações: ', lucas.evaluationsResults);
// console.log('Soma das notas: ', lucas.sumGrades());
// console.log('Média das notas: ', lucas.sumAverageGrades());