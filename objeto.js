let usuario = {
  //colchetes
  nome: "João",
  idade: 30,
  email: "joao@email.com.br",
  local: "São Paulo",
};

//console.log(usuario);

//console.log(`T nome usuario: ${usuario.nome}`);
//console.log("nome usuario: "+usuario.nome);

//console.log(usuario["email"]);

let localUsuario = "local";

//console.log(usuario[localUsuario]);

usuario["nome"] = "Novo Nome";

//console.log(usuario["nome"]);

usuario.idade = 35;
//console.log(usuario);

/* Array de objetos */

let funcionarios = [
  {
    nome: "João",
    idade: 30,
    email: "joao@email.com.br",
    local: "Curitiba",
    cargos: ["Cargo 1", "Cargo 2"],
  },
  {
    nome: "Marco",
    idade: 25,
    email: "marco@email.com.br",
    local: "São Paulo",
    cargos: ["Cargo 1", "Cargo 2", "Cargo 3"],
  },
  {
    nome: "Elias",
    idade: 27,
    email: "elias@email.com.br",
    local: "São Paulo",
    cargos: ["Cargo 1", "Cargo 2"],
  },
];

//console.log(funcionarios);
//console.log(funcionarios.length);

function lerArrayDeObjeto(arr) {
  let arrResultNome = [];

  for (let i = 0; i < arr.length; i++) {
     
    console.log(arr[i].nome);

    arrResultNome.push(arr[i].nome);
  }
  return arrResultNome;
}

// lerArrayDeObjeto(funcionarios);

// console.log(lerArrayDeObjeto(funcionarios));


function arrCddSP(arr) {
  let arrResultNome = [];

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i].local);
    if(arr[i].local === "São Paulo"){

      arrResultNome.push(arr[i].nome);
    }

  }
 return  arrResultNome;
}

console.log(arrCddSP(funcionarios));