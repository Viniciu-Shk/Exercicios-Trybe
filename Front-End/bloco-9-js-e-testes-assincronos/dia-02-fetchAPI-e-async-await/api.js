// const fetch = require('node-fetch');
const url_api = 'https://api.coincap.io/v2/assets';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
const olCrypto = document.getElementById("listaCrypto");

const crypto = async () => {
  try {
    const array = [];
    const response = await fetch(url_api, myObject);
    const data = await response.json();
    data.data.forEach((crypto) => {
      array.push(crypto);
    });
    const newArray = array.filter((crypto) => crypto.rank <= 10);
    newArray.forEach((crypto) => {
      const newCoin = document.createElement('li');
      newCoin.innerHTML = `${crypto.id} (${crypto.symbol}): ${crypto.priceUsd}`
      console.log(newCoin);
      olCrypto.appendChild(newCoin);
    });
  } catch (error) {
    console.log(`Erro ocorrido: \n${error}`);
  }
}

window.onload = () => crypto();