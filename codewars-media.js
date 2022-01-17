/**
 * É o final do ano letivo, momento fatídico do seu relatório escolar. As médias devem ser calculadas. Todos os alunos vêm até você e pedem que você calcule sua média para eles. Fácil ! Você só precisa escrever um script.

Retorna a média da matriz fornecida arredondada para o número inteiro mais próximo.

A matriz nunca estará vazia.

//////////////////////////////////// ESTRUTURANDO A LÓGICA

As médias devem ser calculadas
Retorna a média do array fornecido 
Aredondar o resultado para o número inteiro mais próximo
 */

function calculaMediaNotaAlunos(arrNotas) {
  let resultTotalSoma = 0;
  let resultadoMedia = 0;
  //let valorPrimeiroStr = 0;
  let vlrString;

  for (let i = 0; i < arrNotas.length; i++) {
    // resultTotalSoma = resultTotalSoma + arrNotas[i];
    resultTotalSoma += arrNotas[i];
  }
  resultadoMedia = resultTotalSoma / arrNotas.length;

  vlrString = resultadoMedia.toString();
  //valorPrimeiroStr = vlrString.substr(0, 1);

  console.log(parseInt(vlrString));
  return parseInt(vlrString);
}
/*
1+2+3+4+5 = 15
15 / 5 = 3
*/

let mediaAlunosNov21 = calculaMediaNotaAlunos([2, 2, 2, 2]);
let mediaAlunosT10 = calculaMediaNotaAlunos([1, 2, 3, 4, 5]);
calculaMediaNotaAlunos([1, 1, 1, 1, 1, 1, 1, 2]);

calculaMediaNotaAlunos([5, 8, 3, 1, 1]);

console.log(mediaAlunosT10);
