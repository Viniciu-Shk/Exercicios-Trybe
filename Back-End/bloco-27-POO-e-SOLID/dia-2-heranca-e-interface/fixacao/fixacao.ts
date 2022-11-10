class SuperClass {
  constructor(public isSuper: boolean = true,) {}
  protected sayHello() {
    console.log('Olá Mundo!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super(false);
  }
  public sayHello2() {
    this.sayHello();
    
  }
}

const myFunc = (objeto: SubClass) => {
  objeto.sayHello2();
}

const isProtFunc = (objeto: SuperClass) => {
  const log = objeto.isSuper ? 'Super' : 'Sub';
  console.log(log);
  
}

const superObj = new SuperClass();
const subObj = new SubClass();

// myFunc(superObj);
// myFunc(subObj);

// isProtFunc(superObj);
// isProtFunc(subObj);


interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    return `${this.myNumber + myParam}`
  }
}

const minhaClasse = new MyClass(10);

// console.log(minhaClasse.myNumber);
// console.log(minhaClasse.myFunc(59));


interface Logger {
  log(param: string): void;
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger{
  public log(param:string): void {
    console.log('Logger 2 -', param);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger) {}

  public save(key: string, value: string): void {
    this.logger.log(key);
    this.logger.log(value);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('save1', 'batata');
db2.save('save2', 'maça');
db3.save('sabe3', 'melancia');


