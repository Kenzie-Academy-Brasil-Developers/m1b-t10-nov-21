/*Split
Divide nossa string em partes iguais identificado pelo divisor
*/

let meuTexto = "Olá, sejam bem vindos";
let textoCarros = "Tesla, Audi, Subaru, BMW, Caoa Chery, GM";
let arrayCarros = ["Tesla", "Audi", "Subaru", "BMW", "Caoa Chery", "GM"];

//let resultadoTextoUm = meuTexto.split(" ");
let resultArrayCarros = textoCarros.split(", ");

//console.log(resultadoTextoUm);
//console.log(resultArrayCarros);

let resultJoinCarros = resultArrayCarros.join(",");

//console.log(resultJoinCarros);

function tratandoTexto(texto, separador) {
  let result = texto.split(separador);

  console.log("O texto original é: " + texto);
  console.log("O separador é: " + separador);
  console.log(
    "O array tem " + result.length + " elementos: " + result.join(separador)
  );
  return result;
}

//tratandoTexto(meuTexto, ",")
//console.log(tratandoTexto(meuTexto, ","));

/*SLICE */

//console.log(arrayCarros);
let resTextoSlice = meuTexto.slice(5, -3);
let resArraySlice = arrayCarros.slice(2,5);

//console.log(resArraySlice);

/*REPLACE
substiruir um trecho de uma string por outro valor
*/

let fraseInicial = "Aprendendo HTML e CSS consigo aplicar lógica no código";
let fraseCorreta = fraseInicial.replace("HTML e CSS", 'JavaScript');

let fraseErrada = "Aprendendo HTML consigo aplicar lógica no código, estou estudando HTML";
resultCorrigeFrase = fraseErrada.replace(/html/gi,"JS"); //regex

console.log(resultCorrigeFrase);

//console.log(fraseCorreta);


/*REVERSE*/
let ordem = ['terceiro','segundo','primeiro'];

let arrResultOrdem = ordem.reverse();

//console.log(arrResultOrdem);

/*toUpperCase toLowerCase*/

let nome = "ricaRdO";
let = nomeMinusculo = nome.toLowerCase();
let = nomeMaiusculo = nome.toUpperCase();

let PrimeiraLetraMaiuscula = nomeMinusculo[0].toUpperCase();

let resultadoNome = PrimeiraLetraMaiuscula + nomeMinusculo.substr(1);

//console.log(resultadoNome);