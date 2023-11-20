const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data_agendamento } = req.body;
    if (!nome || !endereco || !telefone || !data_agendamento) {
        res.sendFile(__dirname + '/views/erro.html');
    } else {
        const formData = { nome, endereco, telefone, data_agendamento };
        res.send(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dados do Formulário</title>
            </head>
            <body>
                <h1>Dados do Formulário</h1>
                <div id="dadosFormulario"></div>
                <script>
                    var formData = ${JSON.stringify(formData)};
                    var content = "<p>Nome: " + formData.nome + "</p>" +
                                  "<p>Endereço: " + formData.endereco + "</p>" +
                                  "<p>Telefone: " + formData.telefone + "</p>" +
                                  "<p>Data de Agendamento: " + formData.data_agendamento + "</p>";
                    document.getElementById('dadosFormulario').innerHTML = content;
                </script>
            </body>
            </html>
        `);
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

