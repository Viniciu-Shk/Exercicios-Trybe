const bodyParser = require('body-parser');
const express = require('express');

const accountControler = require('./controllers/accountController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', accountControler.getById);

app.get('/accounts-v2/:id', accountControler.getByIdLazy);

app.get('/accounts/:id/comments', accountControler.getComments);

app.post('/accounts', accountControler.createAccount);

app.post('/accounts/:id/comment', accountControler.createComment);

module.exports = app;
