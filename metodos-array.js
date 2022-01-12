



let arrBoods = ["CLivro1", "DLivro2", "1Livro3", "ZLivro4", "VLivro5"];

let buscaLivro = arrBoods.includes("Livro7");

// console.log(buscaLivro);
// console.log(buscaLivroObj);

// FILTER

const numeros = [36, 99, 37, 63];

let resulNumeros = numeros.filter(function (item) {
  let result;
  result = item > 60;
  return result;
});

// console.log(resulNumeros);

const produtos = [
  { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
  { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
  { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
  { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
  { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" },
];

const alimentos = produtos.filter(function(item) {
  let result;
  result = item.categoria == 'alimento';
  return result;
});

//exmplo com sintaxe de arrow function
//const alimentos = produtos.filter((item) => item.categoria == "alimento");

// console.log(alimentos);

// CONCAT

const arrUm = [10, 11, 12];
const arrDois = [13, 14, 15];

const resultConcat = arrDois.concat(arrUm);
const arrOrder = resultConcat.sort();

const resultFilterArr = arrOrder.filter(function(item){
  return item > 10;
})

// const orderBooks = arrBoods.sort();

// console.log(orderBooks);
