const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let cors = require('cors');

app.use(cors());

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Welcome to Stock Portflio Analysis API!');
});

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;
  let result;
  result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result;
  result = stock1 + stock2 + stock3 + stock4;
  res.send(result.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result;
  result = (returns / boughtAt) * 100;
  res.send(result.toString());
});

app.get('total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result;
  result = stock1 + stock2 + stock3 + stock4;
  res.send(result.toString());
});

app.get('/status', (req, res) => {
  let returnPercentage = req.query.returnPercentage;
  if (returnPercentage > 0) {
    res.send('profit');
  } else {
    res.send('loss');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
