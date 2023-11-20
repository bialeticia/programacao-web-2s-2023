const express = require('express');
const path = require('path');
const calculatorRouter = require('./routes/calculator.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'calculadora'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', calculatorRouter);

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});
