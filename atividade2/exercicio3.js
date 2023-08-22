var matrizA = [
    [1, 3],
    [2, 5]
  ];
  
  var matrizB = [
    [2, 2],
    [0, 1]
  ];
  
 if (matrizA[0].length !== matrizB.length) {
    console.log("Não é possível calcular");
  } 
  else {
    function multiplicarMatrizes(matrizA, matrizB) {
      var resultado = [];
      for (var i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizB[0].length; j++) {
          var soma = 0;
          for (var k = 0; k < matrizA[0].length; k++) {
            soma += matrizA[i][k] * matrizB[k][j];
          }
          resultado[i][j] = soma;
        }
      }
      return resultado;
    }
  
    var matrizC = multiplicarMatrizes(matrizA, matrizB);
  
    console.log("AxB = C");
    for (var i = 0; i < matrizC.length; i++) {
      console.log(matrizC[i]);
    }
  }  