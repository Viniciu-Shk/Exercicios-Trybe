class Tv {
  constructor(
    private _brand: string,
    private _size: number,
    private _resolution: string,
    private _connections: string,
    private _connectedTo?: string
    ) {}

  turnOn() {
    console.log((`Criando a tv ${this._brand} ${this._size} ${this._resolution} ${this._connections}`));
  }

  get connectedTo() {
    return this._connectedTo || '';
  }

  set connectedTo(newValue: string) {
    if (this._connections.includes(newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable');
      
    }
  }
}

const toshiba = new Tv('Toshiba', 18, 'FullHD', 'WiFi');

toshiba.turnOn();
toshiba.connectedTo = 'WiFi';
console.log(toshiba.connectedTo);
