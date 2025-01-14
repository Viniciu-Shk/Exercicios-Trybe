const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');
const app = express();
app.use(express.json());

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await cacaoTrybe.putChocolateById(Number(id), { name, brandId });
  if(chocolate) return res.status(200).json({ chocolate });
  res.status(404).json({ message: 'chocolate not found' });
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacaoTrybe.getChocolatesByQuery(name);
  if(chocolates.length > 0) {
    res.status(200).json({ chocolates });
  } else {
    res.status(404).json([]);
  }
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await cacaoTrybe.putChocolateById(Number(id), name, Number(brandId));
  res.status(200).json({ chocolate });
});

module.exports = app;