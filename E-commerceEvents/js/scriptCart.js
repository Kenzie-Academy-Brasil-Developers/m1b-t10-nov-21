//console.log(infoProducts);

/*
 <div class="cart-item" id="item1">
            <img src="../assets/produtos/img-Nike4.jpg" />
            <p>Nike Air Max (Pink)</p>
            <p>$299.90</p>
            <input type="number"name="quantity"id="no-of-items"
              value="1" min="1" max="6" step="1"
            />
            <button id="remove2" class="remove">
              <i class="fas fa-trash fa-2x"></i>
            </button>
          </div>
*/

/*
{
  idProduto: 1090,
  img: "./assets/produtos/img-Nike1.jpg",
  subTitle: "Nike Free RN OC",
  price: 399.99,
},
*/

const cartItems = document.querySelector(".cart-items");

function createCardProdInCart(infoProduto) {
  const divCardItem = document.createElement("div");
  divCardItem.classList.add("cart-item");
  divCardItem.id = infoProduto.idProduto;

  const imgProd = document.createElement("img");
  //imgProd.src = "../assets/produtos/img-Nike4.jpg";
  imgProd.src = "../" + infoProduto.img;

  const descProd = document.createElement("p");
  descProd.innerText = infoProduto.subTitle;

  const preco = document.createElement("p");
  preco.innerText = `$${infoProduto.price}`;

  const inputNum = document.createElement("input");
  inputNum.type = "number";
  inputNum.name = "quantity";
  inputNum.id = "no-of-items";
  inputNum.value = "1";
  inputNum.min = "1";
  inputNum.max = "6";
  inputNum.step = "1";

  const btnRemove = document.createElement("button");
  btnRemove.classList.add("remove");
  btnRemove.id = infoProduto.idProduto;

  const tagI = document.createElement("i");
  tagI.classList.add("fas", "fa-trash", "fa-2x");

  btnRemove.appendChild(tagI);

  divCardItem.appendChild(imgProd);
  divCardItem.appendChild(descProd);
  divCardItem.appendChild(preco);
  divCardItem.appendChild(inputNum);
  divCardItem.appendChild(btnRemove);

  return divCardItem;
}

function showProductsCart(arrProducts) {
  for (let i = 0; i < arrProducts.length; i++) {
    let divCardItem = createCardProdInCart(arrProducts[i]);
    cartItems.appendChild(divCardItem);
  }
}

showProductsCart(infoProducts);
