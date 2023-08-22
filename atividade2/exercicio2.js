var matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

  function calcularTransposta(matriz) {
    var transposta = [];
    for (var i = 0; i < matriz[0].length; i++) {
      transposta[i] = [];
      for (var j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }
    return transposta;
  }
  
  var matrizTransposta = calcularTransposta(matrizA);
  
  console.log("A = ");
  for (var i = 0; i < matrizA.length; i++) {
    console.log(matrizA[i]);
  }
  
  console.log("At = ");
  for (var i = 0; i < matrizTransposta.length; i++) {
    console.log(matrizTransposta[i]);
  }  