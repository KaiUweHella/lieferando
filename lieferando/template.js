function dishesHTML(i) {
  return /*html*/ `
       <div class="dishes"> 
           <div class="dishes-info">
               <div class="dishes-text">
                   <div>
                       <h3 class="dish-header">${dishes[i].name}</h3>
                       <p class="dish-discription">${dishes[i].description}</p>
                       <p class="dish-sub-discription" id="info-pizza">Wahl aus: Classic (Ø 25cm), Medium (Ø 28cm), oder Large (Ø 32cm)</p>
                   </div>
                   <p class="price">${dishes[i].price}€</p>
               </div>
               <img class="preview-img" src="${dishes[i].img}" alt="">
               <div class="plus-icon " onclick="addDish(${i})">
                   <img src="img/plus.svg" alt="" id="plus-icon${i}">
                   <div id="amount-dishes${i}">
                   
                   </div>
               </div>
           </div>
       </div>
      `;
}

function selectedItem(i) {
  return /*html*/ `
        <div class="cart-price">
            <div class="selected-dish">
                <p class="number">${cart[i].number}</p>
                <p>${cart[i].name}</p>
            </div>
            <p class="selected-dish-price"><span >${cart[i].price*cart[i].number}</span>€</p>
        </div>
        <div class="add-number">
            <a href="#">Anmerkungen hinzufügen</a>
            <div>
                <img src="img/minus.svg" alt="" onclick="removeNumber(${i})">
                <img src="img/plus.svg" alt="" onclick="addNumber(${i})">
            </div>
        </div>
    `;
}

function overviewHTML() {
  return /*html*/ `
    <div class="subtotal delivery-info">
        <p>Zwischensumme</p>
        <p><span id="subtotal"></span>€</p>
    </div>
    <div class="delivery-costs delivery-info" id="delivery">
        <p>Lieferkosten</p>
        <p><span id="delivery-costs"></span>€</p>
    </div>
    <div class="total delivery-info">
        <p>Gesamt</p>
        <p><span id="total-price"></span>€</p>
    </div>
    <button onclick="joke()">Bezahlen (<span id="total-button"></span>&nbsp;€)</button>
    `;
}

function sdCartHTML() {
  return /*html*/ `
    <button onclick="openSdOverview()">
        <div class="cart-counter">
            <img src="img/cart_white.svg" alt="">
            <div class="sd-counter" id="number-selection">
                <span></span>
            </div>
        </div>
        <p> Warenkorb (<span id="total-sd-button"></span>&nbsp;€) </p>
    </button>
    `;
}

function sdSelectedItem(i) {
  return /*html*/ `
    <div class="select-cart">
        <div class="cart-price">
            <div class="selected-dish">
                <p class="number">${cart[i].number}</p>
                <p>${cart[i].name}</p>
            </div>
            <p class="selected-dish-price"><span>${cart[i].price*cart[i].number}</span>€</p>
        </div>
        <div class="add-number">
            <a href="#">Anmerkungen hinzufügen</a>
            <div>
                <img src="img/minus.svg" alt="" onclick="removeNumber(${i})">
                <img src="img/plus.svg" alt="" onclick="addNumber(${i})">
            </div>
        </div>
    </div>
    `;
}

function sdOverviewHTML() {
  return /*html*/ `
    <div class="subtotal delivery-info">
        <p>Zwischensumme</p>
        <p><span id="sd-subtotal"></span>€</p>
    </div>
    <div class="delivery-costs delivery-info" id="sd-delivery">
        <p>Lieferkosten</p>
        <p><span id="sd-delivery-costs"></span>€</p>
    </div>
    <div class="total delivery-info">
        <p>Gesamt</p>
        <p><span id="sd-total-price"></span>€</p>
    </div>
    <button onclick="joke()">Bezahlen (<span id="sd-overview-button"></span>&nbsp;€)</button>
    `;
}
