const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'atividade5', 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataDeAgendamento } = req.body;
  res.render('dados', { nome, endereco, telefone, dataDeAgendamento });
});
app.listen(port, () => {
  console.log(`Em execução: ${port}`);
});