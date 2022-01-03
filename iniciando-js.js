/* console.log
console.log("teste console");

console.log(2);
*/

//comentando uma linha

/** VARIÁVEIS
**** VAR(NÃO VAMOS USAR) escopo global ***

* let (escopo local)
* const (escopo local)
*/

/*TIPOS DE DADOS BASICOS
STRING - TEEXTO "VAI ESTAR ENTRE ASPAS"
INTEIRO - NÚMEOROS (fora de  aspas)
BOOLEAN - Verdaeiro ou Falso

*/

const var_const = "texto primario";

// var_const = 555; constante não altera

// console.log(var_const);

let var_let = 2;
var_let = "novo texto";
// console.log(var_let);

/*OPERADOR*/

/*Atribuição
variavel = (atribuição) valor
*/

let variavel_atribuicao;

variavel_atribuicao = 123;

/*UNÁRIO*/

let var_unario = 3;

var_unario++; //posfix
++var_unario; //prefix

// console.log("var_unario: " + var_unario);

/*BINARIO

//let var_binario = 3;

// varBinario = varBinario + 3;
// varBinario += 7;
// varBinario = varBinario + 7;

// varBinario = 10 + 7;

//concatenando string (texto) "varBinario: " com a variavel varBinario
//console.log("varBinario: " + varBinario);
*/

/* relacionais 


(Retornam verdadeiro ou falso (true or false))

// > maior
// < menor
// == igual
// === identico
// >= maior ou igual
// <= menor ou igual
// != diferente (não usa)
// !== mais que diferente

//console.log("5 > 10: " + (5 > 10)); // false
//console.log("5 > 5: " + (5 > 5)); // false

//console.log("5 < 10: " + (5 < 10)); // true
//console.log("5 <  5: " + (5 < 5)); // false

//console.log("5 == 5: " + (5 == 5)); // true
//console.log("`5` == 5: " + ("5" == 5)); // true (não se usa)
//console.log("`5` === 5: " + ("5" === 5)); // false (testando o tipo e o valor)

//console.log("5 <= 10: " + (5 <= 10)); // true
//console.log("5 <=  5: " + (5 <= 5)); // true

//console.log("5 >= 10: " + (5 >= 10)); // false
//console.log("5 >=  5: " + (5 >= 5)); // true

//console.log("5 != 10: " + (5 != 10)); // true
//console.log("'5' !==  5: " + ("5" != 5)); // true ignorou o tipo comparou o valor
//console.log("\"5\" !==  5: " + ("5" !== 5)); // true comparou o tipo e o valor

//let varRelacionalUm;
//let varRelacionalDois;

//varRelacionalUm = '55';
//varRelacionalDois = 55

//console.log(varRelacionalUm === varRelacionalDois);

//console.log(varRelacionalUm + varRelacionalDois);

*/

//lógicos

// AND e(&&)
// OR ou(||)
// NOT negação (!)

let varVaiChover = true;
let varVouSair = true;

let varLevarGuardaChuva = varVaiChover && varVouSair;

//console.log("varLevarGuardaChuva: " + varLevarGuardaChuva);

let varMeuCarroTemGasolina = false;
let varTenhoDinheiro = false;

let varIrParaFesta = varMeuCarroTemGasolina || varTenhoDinheiro;

// console.log("varIrParaFesta: "+varIrParaFesta);

//console.log("NOT (!) varIrParaFesta: "+(!varIrParaFesta));
//console.log(!varIrParaFesta);

//console.log("!!'teste': "+(!!'teste'))

/*USANDO NOT na vida Real
let varPessoaDoContra;
let varOpnicaoDaGalera =false;

varPessoaDoContra = !varOpnicaoDaGalera

let varTodosTopamIrParaOParque = varOpnicaoDaGalera && varPessoaDoContra;

//console.log("varOpnicaoDaGalera: "+ varOpnicaoDaGalera);

//console.log("varPessoaDoContra: "+ varPessoaDoContra);


//console.log("varTodosTopamIrParaOParque: "+varTodosTopamIrParaOParque);


*/

/* // ESTRUTURA DE CONTROLE



let varPessoaDoContra;
let varOpnicaoDaGalera = false;
let varTuristaVaiNoParque = false;

varPessoaDoContra = !varOpnicaoDaGalera;

let varTodosTopamIrParaOParque = varOpnicaoDaGalera || varPessoaDoContra;

//console.log("varTodosTopamIrParaOParque: "+ varTodosTopamIrParaOParque);

console.log("varOpnicaoDaGalera: " + varOpnicaoDaGalera);

if (varOpnicaoDaGalera) {
  console.log("Criar grupo adicionar todo mundo!");
} else {
  console.log("Assistir filme!");
}

// if(varTuristaVaiNoParque){
//   console.log("add o turista.");
// }

//if(varOpnicaoDaGalera && varTuristaVaiNoParque){
//console.log('criar grupo, adicionar todo mundo e o turista')
//}

let varTextoInicial = "textoInicial";
// console.log(varTextoInicial);
varTextoInicial = 5;

// console.log(varTextoInicial);

*/

//Parametros LOOP FOR
// INICIALIZADOR - let i=0
// CONDIÇÃO DE SAÍDA
// ITERADOR

// inicia em zero e percorre imprimindo até cinco
// for (let i = 0; i <= 5; i++) {
//   console.log("valor de i: " + i);
// }

// for (let x = 5; x > 0; x--) {
//   console.log("valor de x: " + x);
// }

// INICIALIZADOR - let varConviteVendidos = 0
// CONDIÇÃO DE SAÍDA - varConviteVendidos <= 100
// ITERADOR - varConviteVendidos++

// for (
//   let varNumConviteVendido = 0;
//   varNumConviteVendido <= 100;
//   varNumConviteVendido++
// ) {
//   if (varNumConviteVendido % 2 === 0) {
//     console.log("Convite Numero: " + varNumConviteVendido + " PISTA");
//   } else {
//     console.log("Convite Numero: " + varNumConviteVendido + " CAMAROTE");
//   }
// }

/* TESTE DE MESA */

// INICIALIZADOR - varIncrementavel = 0;
// CONDIÇÃO DE SAÍDA -  varIncrementavel < 3;
// ITERADOR - varIncrementavel++;

let varResultado = 0;
let varIncrementavel;

for (varIncrementavel = 0; varIncrementavel < 3; varIncrementavel++) {
  varResultado = varResultado + varIncrementavel + 1;
}

/*console.log("varIncrementavel: " + varIncrementavel);
console.log("varResultado: " + varResultado);*/

//Sintaxe

/*for (let i = 0; i < 5; i++) {
  //semântica
  console.log("no FOR variável i está valendo: " + i);

  if (i === 3) {
    //console.log("A variável i é igual a 3");
  }
}*/
// console.log("fora do for o i vale: " + i);
let numero = 0;
/*while (numero < 5) {
 // console.log("valor da variável numero é: " + numero);
  //numero++;
}*/

