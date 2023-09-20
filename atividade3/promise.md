# Promise <h1>

* É um proxy para um valor não necessariamente conhecido quando a promessa é criada. Ele permite que você associe manipuladores ao eventual valor de sucesso ou motivo de fracasso de uma ação assíncrona. Isso permite que os métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa de fornecer o valor em algum momento no futuro.

* Exemplo

ˋˋˋ
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
ˋˋˋ