class Aluno {
  
  constructor(
    private _matricula: number,
    private _nome: string,
    private _notaProva: number[],
    private _notaTrabalho: number[]
  ) {}
  somaNotasProva() {
    return this._notaProva.reduce((acc, cur) => acc + cur);
  }
  somaNotasTrabalho() {
    return this._notaTrabalho.reduce((acc, cur) => acc + cur);
  }
  
  public get notaTrabalho(): number[] {
    return this._notaTrabalho;
  }
  public set notaTrabalho(value: number[]) {
    this._notaTrabalho = value;
  }
  public get notaProva(): number[] {
    return this._notaProva;
  }
  public set notaProva(value: number[]) {
    this._notaProva = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get matricula(): number {
    return this._matricula;
  }
  public set matricula(value: number) {
    this._matricula = value;
  }
};

// ex 3 - Lanchonete

class Cliente {
  constructor(private _nome: string) {}
}

class Item {
  constructor(private _nome: string, private _preco: number) {}
  public get preco(): number {
    return this._preco;
  }
  public set preco(value: number) {
    this._preco = value;
  }
}

class Pedido {
  constructor(
    private _cliente: Cliente,
    private _items: Item[],
    private _metodoPag: string,
    private _desconto?: number) {}
  total() {
    return this._items.reduce((acc, cur) => acc + cur.preco, 0)
  }
  totalComDesconto() {
    return this.total() * (1 - (this._desconto || 0))
  }
}

const client = new Cliente('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.total());
console.log('Valor com desconto: ', order.totalComDesconto());

// 4 - Data

class Data {
  constructor(private _dia: number = 1, private _mes: number = 1, private _ano: number = 1900) {}
  public get ano(): number {
    return this._ano;
  }
  public set ano(value: number) {
    this._ano = value;
  }
  public get mes(): number {
    return this._mes;
  }
  public set mes(value: number) {
    this._mes = value;
  }
  public get dia(): number {
    return this._dia;
  }
  public set dia(value: number) {
    this._dia = value;
  }
  getMonthName(): string {
    const names = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return names[this._mes - 1];
  }
  isLeapYear(): boolean {
    return this._ano % 4 === 0;
  }
  compare(data: Data): number {
    if (this.ano === data.ano && this.mes === data.mes && this.dia === data.dia) return 0
    if (this.ano > data.ano) return 1
    if (this.ano === data.ano && this.mes > data.mes) return 1
    if (this.ano === data.ano && this.mes === data.mes && this.dia > data.dia) return 1
    return -1
  }
  format(format: string): string {
    if (format.includes('/')) {
      const formatList = format.split('/');
      formatList.forEach((piece, index) => {
        piece.includes('d') && formatList.splice(index, 1, String(this.dia).length < 2 ? `0${String(this.dia)}` : String(this.dia));
        piece.includes('m') && formatList.splice(index, 1, String(this.mes).length < 2 ? `0${String(this.mes)}` : String(this.mes));
        piece.includes('a') && formatList.splice(index, 1, piece.length <= 3 ? String(this.ano).slice(-2) : String(this.ano));
      })
        return formatList.join('/');
    } if (format.includes('-')) {
      const formatList = format.split('-');
      formatList.forEach((piece, index) => {
        piece.includes('d') && formatList.splice(index, 1, String(this.dia).length < 2 ? `0${String(this.dia)}` : String(this.dia));
        piece.includes('m') && formatList.splice(index, 1, String(this.mes).length < 2 ? `0${String(this.mes)}` : String(this.mes));
        piece.includes('a') && formatList.splice(index, 1, piece.length <= 3 ? String(this.ano).slice(-2) : String(this.ano));
      })
        return formatList.join('-');
    }
    const formatList = format.split(' ');
    formatList.forEach((piece, index) => {
      piece.includes('dd') && formatList.splice(index, 1, String(this.dia).length < 2 ? `0${String(this.dia)}` : String(this.dia));
      piece.includes('dd,') && formatList.splice(index, 1, String(this.dia).length < 2 ? `0${String(this.dia)},` : String(this.dia) + ',');
      piece.includes('m') && formatList.splice(index, 1, String(this.mes).length < 2 ? `0${String(this.mes)}` : String(this.mes));
      piece.includes('M') && formatList.splice(index, 1, this.getMonthName());
      piece.includes('a') && formatList.splice(index, 1, piece.length <= 3 ? String(this.ano).slice(-2) : String(this.ano));
    });
    return formatList.join(' ');
  }
}

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.dia);
console.log('Mês: ', testDate.mes);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.ano);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));