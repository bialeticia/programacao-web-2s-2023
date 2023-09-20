# Arrow functions <h1>

* Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

* Exemplo

ˋˋˋ
function somar(a, b) {
  return a + b;
}

const somarArrow = (a, b) => a + b;

console.log(somar(5, 3));        // Saída: 8
console.log(somarArrow(5, 3));   // Saída: 8
ˋˋˋ