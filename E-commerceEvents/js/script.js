const items2 = document.querySelector(".items2");

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
  btnAddCart.appendChild(tagA);

  divCard.appendChild(imgProd);
  divCard.appendChild(subTitulo);

  divCard.appendChild(preco);
  divCard.appendChild(btnAddCart);

  return divCard;
}

function addCardProdPage(arrProducts) {
  for (let i = 0; i < arrProducts.length; i++) {
    let divCard = cardProd(arrProducts[i]);
    items2.appendChild(divCard);
  }
}

addCardProdPage(infoProducts);
