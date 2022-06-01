// const fetch = require('node-fetch');
const url_api = 'https://api.coincap.io/v2/assets';
const urlUSD = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
const olCrypto = document.getElementById("listaCrypto");

const crypto = async () => {
  try {
    const rateBRL = await convertBRL();
    const array = [];
    const response = await fetch(url_api, myObject);
    const data = await response.json();
    data.data.forEach((crypto) => {
      array.push(crypto);
    });
    const newArray = array.filter((crypto) => crypto.rank <= 10);
    newArray.forEach((crypto) => {
      const newCoin = document.createElement('li');
      newCoin.innerHTML = `${crypto.id} (${crypto.symbol}): ${crypto.priceUsd * rateBRL} reais.`
      console.log(newCoin);
      olCrypto.appendChild(newCoin);
    });
  } catch (error) {
    console.log(`Erro ocorrido: \n${error}`);
  }
}

const convertBRL = async () => {
  try {
    const response = await fetch(urlUSD);
    const data = await response.json();
    return data.usd.brl;
  } catch (error) {
    console.log(`Deu erro: \n${error}`);
  }
}

window.onload = () => crypto();
