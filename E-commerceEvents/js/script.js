const items2 = document.querySelector(".items2");
const arrProdInCart = [];

function filterArrayByID(arrProd, id) {
  let result = [];
  for (let i = 0; i < arrProd.length; i++) {
    if(arrProd[i].idProduto === id) {
      result.push(arrProd[i]);
    }
  }
  return result
}

function incrementProduct(arrProd, id) {
  for (let i = 0; i < arrProd.length; i++) {
    if(arrProd[i].idProduto === id) {
      arrProd[i].quantity += 1;
    }
  }
}

function cardProd(infoProd) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const imgProd = document.createElement("img");
  imgProd.src = infoProd.img;

  const subTitulo = document.createElement("h3");
  subTitulo.innerText = infoProd.subTitle;

  const preco = document.createElement("p");
  preco.classList.add("price");
  preco.innerText = "$" + infoProd.price;

  const btnAddCart = document.createElement("p");
  const tagA = document.createElement("a");
  tagA.href = "#";
  tagA.innerText = "Adicionar ao Carrinho";
  tagA.addEventListener("click", function () {
    let prod = infoProd
    
    if(filterArrayByID(arrProdInCart, infoProd.idProduto).length === 0) {
      prod.quantity = 1;
      arrProdInCart.push(prod);
    } else {
      incrementProduct(arrProdInCart, infoProd.idProduto);
    }
    console.log(arrProdInCart);
    localStorage.setItem("productInCart", JSON.stringify(arrProdInCart));
  });

  btnAddCart.appendChild(tagA);

  divCard.appendChild(imgProd);
  divCard.appendChild(subTitulo);

  divCard.appendChild(preco);
  divCard.appendChild(btnAddCart);

  //console.log(divCard);
  return divCard;
}

function addCardProdPage(arrProducts) {
  for (let i = 0; i < arrProducts.length; i++) {
    let divCard = cardProd(arrProducts[i]);
    items2.appendChild(divCard);
  }
  return;
}

addCardProdPage(infoProducts);
