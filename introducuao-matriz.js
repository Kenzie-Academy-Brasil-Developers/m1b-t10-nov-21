/*
const arraySimples = ["info1", "info2"];

console.log("arraySimples: " + arraySimples[0]);

const arrayBiDimencional = [
  ["info1", "info2"],
  ["info1", "info2"],
  ["info1", "info2"],
];

console.log("arrayBiDimencional: " + arrayBiDimencional[0][1]);
*/

const arrProdutos = [
  ["feijão", "arroz", "macarrão", "azeite", "bolacha"],
  ["05/11/2022", "15/11/2022", "05/11/2022", "15/10/2022", "04/11/2022"],
  ["R$4,99", "R$6,15", "R$3,28", "R$23,05", "R$3,25"],
];

// console.table(arrProdutos[0]);

function inverterPosicaoColLinTabelaPrecos(arr) {
  const totalColunasArr = arr[0].length;
  const totalLinhasArr = arr.length;

  // console.log(arr[0]+" total colunas: "+totalColunasArr);
  //console.log(" total linhas: "+totalLinhasArr);

  let arrResultProdutos = new Array(totalColunasArr);
  //arrResultProdutos[] nascendo com a primeira dimensão

  for (
    let colunaArrayResult = 0;
    colunaArrayResult < totalColunasArr;
    colunaArrayResult++
  ) {
    arrResultProdutos[colunaArrayResult] = Array(totalLinhasArr);
    //arrResultProdutos[][]
    //segunda dimensão
    // console.table(arrResultProdutos);
    for (
      let linhaArrayResult = 0;
      linhaArrayResult < totalLinhasArr;
      linhaArrayResult++
    ) {
      arrResultProdutos[colunaArrayResult][linhaArrayResult] =
        arr[linhaArrayResult][totalColunasArr - 1 - colunaArrayResult];

      console.log(
        arr[linhaArrayResult][totalColunasArr - 1 - colunaArrayResult]+
        " **linhaArrayResult: " +
          linhaArrayResult +
          " totalColunasArr: " +
          totalColunasArr +
          " colunaArrayResult:" +
          colunaArrayResult
      );
    }
  }
  // arrResultProdutos.push(['café', '17/10/2023', 'R$7,95']);
  // arrResultProdutos.sort();
  arrResultProdutos.splice(0, 0, ["café", "17/10/2023", "R$7,95"]);
  // console.table(arrResultProdutos);
}

inverterPosicaoColLinTabelaPrecos(arrProdutos);

for (i = 0; i < arrProdutos.length; i++) {
  for (j = 0; j < arrProdutos[i].length; j++) {
    // console.log(arrProdutos[i][j]);
  }
}
