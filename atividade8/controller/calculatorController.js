const path = require('path');

exports.index = (req, res) => {
    res.render('index'); // Renderiza a página com o formulário da calculadora
};

exports.calculate = (req, res) => {
    const numA = parseFloat(req.body.numA);
    const numB = parseFloat(req.body.numB);
    const operation = req.body.operation;
    let result;

    switch (operation) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            if (numB !== 0) result = numA / numB;
            else result = 'Divisão por zero não permitida';
            break;
        default:
            result = 'Operação inválida';
    }

    res.render('calculate', { result: result }); // Renderiza a página com o resultado
};
