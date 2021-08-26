'use strict';
let addCart = document.querySelectorAll(".add_cart");
let bascetSpan = document.querySelector(".basket span");
let basketItemsHead = document.querySelector(".basket-item_head");
let basketItemTotal = document.querySelector(".basket-item_total");
let bascetInp;
let imgProd;
let nameProd;
let idProd;
let PriceProd;
let newPriceProd;
let proceProd = 1;
let sumPrice;
let total = 0;


function addText() {
   basketItemsHead.innerHTML += `<li class="basket-item_li"><img class="basket-item_img" src= ${imgProd} >
            <p class="basket-item_p"> ${nameProd}</p>
            <p class="basket-item_p">Кол-во: <input id="${idProd}" class="cart_p_span2" type="number"
            required min="1" max="999" placeholder="${proceProd}"></p>
            <p class="basket-item_p"> $${newPriceProd} </p>
            <p class="basket-item_p">Сумма: $${sumPrice} </p></li>`;
};
function insertsDiv() {
   if (basketItemsHead.childElementCount !== 0) {
      bascetInp = document.querySelectorAll(".basket-item_p input");
      for (let i = 0; i < bascetInp.length; i++)
         if (bascetInp[i].id == idProd) {
            bascetInp[i].placeholder++;
            sumPrice = newPriceProd * bascetInp[i].placeholder;
            bascetInp[i].parentNode.parentNode.children[4].innerHTML = `Сумма: $${sumPrice}`; return
         } addText()

   } else {
      addText()
   }
};
addCart.forEach(element => {
   element.addEventListener('click', (e) => {
      let parent = e.path[3].children[0];
      if (parent) {
         imgProd = parent.children[0].attributes[1].textContent;
         nameProd = parent.children[1].children[0].textContent;
         PriceProd = parent.children[1].children[2].textContent;
         idProd = imgProd[imgProd.length - 5];
         newPriceProd = Number(PriceProd.replace(/\$/g, ''));
         bascetSpan.textContent++;
         sumPrice = newPriceProd;
         insertsDiv();
         total += newPriceProd;
         basketItemTotal.innerHTML = `ИТОГО :  $${total}`;
      };
   });
});



