const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// app.post('/dados', (req, res) => {
//     const { nome, endereco, telefone, data_agendamento } = req.body;
//     if (!nome || !endereco || !telefone || !data_agendamento) {
//         res.sendFile(__dirname + '/views/erro.html');
//     } else {
//         res.sendFile(__dirname + '/views/dados.html');
//     }
// });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});