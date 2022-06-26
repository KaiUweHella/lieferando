let dishes = [
  {
    number: 1,
    category: "pizza",
    name: "Pizza Tonno",
    description: "mit Thunfisch, Zwiebeln und Knoblauch",
    price: 10.99,
    img: "img/pizza_tonno.jpg",
  },
  {
    number: 1,
    category: "pizza",
    name: "Pizza Salami",
    description: "auf Wunsch gern mit Knoblauch",
    price: 9.99,
    img: "img/pizza_salami.jpg",
  },
  {
    number: 1,
    category: "pizza",
    name: "Pizza Spinat",
    description: "mit Blattspinat und Knoblauch",
    price: 8.99,
    img: "img/pizza_spinat.jpg",
  },
  {
    number: 1,
    category: "pizza",
    name: "Pizza Mix",
    description: "mit Oliven, Salami, Mais und  Jalapenos",
    price: 11.99,
    img: "img/pizza_mix2.jpg",
  },
  {
    number: 1,
    category: "pizza",
    name: "Pizza Mix Special",
    description: "mit Oliven, Salami, Mais, Jalapenos und Pilzen",
    price: 12.99,
    img: "img/pizza_mix.jpg",
  },
  {
    number: 1,
    category: "pasta",
    name: "Die Klassische",
    description: "mit Basilikum, Tomaten und Parmesan",
    price: 7.99,
    img: "img/pasta_1.jpg",
  },
  {
    number: 1,
    category: "pasta",
    name: "Nudeln mit Meeresfrüchte",
    description: "kräftig gewürzt mit Muscheln und Pesto",
    price: 12.99,
    img: "img/pasta_2.jpg",
  },
  {
    number: 1,
    category: "pasta",
    name: "Nudeln mit Sahne Soße",
    description: "mit Sahne Soße, Parmesan und Bandnudeln",
    price: 9.99,
    img: "img/pasta_3.jpg",
  },
  {
    number: 1,
    category: "pasta",
    name: "Bolognese",
    description: "mit Bandnudeln, Tomatensoße und Hackfleisch",
    price: 9.99,
    img: "img/pasta_4.jpg",
  },
];

let cart = [];

function render() {
  loadDishes();
  alert("Bei dieser Seite handelt es sich um eine Übungsseite und nicht um die original Seite.");
}

function loadDishes() {
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i]["category"] == "pizza") {
      document.getElementById("pizza").innerHTML += dishesHTML(i);
    }
    if (dishes[i]["category"] == "pasta") {
      document.getElementById("pasta").innerHTML += dishesHTML(i);
    }
  }
}

function AmountCounter(i) {
    let positionOfDish = cart.indexOf(dishes[i])
    document.getElementById(`plus-icon${i}`).classList.add("d-none");
    document.getElementById(`amount-dishes${i}`).innerHTML = `<span class="amount-dish">${cart[positionOfDish].number}</span>`;
}

function addAmount(i){
  let positionOfDish = dishes.indexOf(cart[i])
  document.getElementById(`amount-dishes${positionOfDish}`).innerHTML = `<span class="amount-dish">${cart[i].number}</span>`;
}

function removeAmount(i){
  let positionOfDish = dishes.indexOf(cart[i])
  document.getElementById(`plus-icon${positionOfDish}`).classList.remove("d-none");
  document.getElementById(`amount-dishes${positionOfDish}`).innerHTML = "";
}

function addDish(i) {
  let positionOfDish = cart.indexOf(dishes[i]);
  document.getElementById("empty-cart").classList.add("d-none");
  showCart();

  if (positionOfDish >= 0) {
    cart[positionOfDish].number++;
  } else {
    cart.push(dishes[i]);
    setArray("cart", cart);
  }
  
  loadCart();
  AmountCounter(i);
}

function loadCart() {
  loadOverviewCosts();
  calculateSubtotal();
  deliveryCosts();
  calculateTotal();
  numberOfDishes();
}

function numberOfDishes() {
  let total = 0;
  for (i = 0; i < cart.length; i++) {
    total += cart[i].number;
  }

  document.getElementById("number-selection").innerHTML = `${total}`;
}

function loadOverviewCosts() {
  document.getElementById("sd-selected-dishes").innerHTML = "";
  document.getElementById("selected-dishes").innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    document.getElementById("selected-dishes").innerHTML += selectedItem(i);
    document.getElementById("sd-selected-dishes").innerHTML +=
      sdSelectedItem(i);
  }
  loadOverview();
}

function loadOverview() {
  document.getElementById("overview-costs").innerHTML = overviewHTML();
  document.getElementById("sd-overview-costs").innerHTML = sdOverviewHTML();
}

function showCart() {
  document.getElementById("cart").classList.remove("d-none");
  document.getElementById("sd-cart").innerHTML = sdCartHTML();
}

function hideCart() {
  document.getElementById("cart").classList.add("d-none");
  document.getElementById("sd-cart").innerHTML = "";
  document.getElementById("empty-cart").classList.remove("d-none");
  document.getElementById("sd-overview").classList.add("d-none");
}

function calculateSubtotal() {
  let subtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].number;
    document.getElementById("subtotal").innerHTML = `${subtotal.toFixed(2)}`;
    document.getElementById("sd-subtotal").innerHTML = `${subtotal.toFixed(2)}`;
  }
}

function deliveryCosts() {
  let subtotal = +document.getElementById("subtotal").innerHTML;
  let delivery = 4.9;

  if (subtotal > 20) {
    delivery = 0;
    addSubtotal(delivery);
  } else {
    addSubtotalDelivery(delivery);
  }
}

function addSubtotal(delivery) {
  document.getElementById("delivery-costs").innerHTML = `${delivery.toFixed(
    2
  )}`;
  document.getElementById("sd-delivery-costs").innerHTML = `${delivery.toFixed(
    2
  )}`;
  document.getElementById("delivery").classList.add("d-none");
  document.getElementById("sd-delivery").classList.add("d-none");
}

function addSubtotalDelivery(delivery) {
  document.getElementById("delivery-costs").innerHTML = `${delivery.toFixed(
    2
  )}`;
  document.getElementById("sd-delivery-costs").innerHTML = `${delivery.toFixed(
    2
  )}`;
}

function calculateTotal() {
  let subtotal = +document.getElementById("subtotal").innerHTML;
  let delivery = +document.getElementById("delivery-costs").innerHTML;
  let total = subtotal + delivery;

  addTotal(total);
}

function addTotal(total) {
  document.getElementById("total-price").innerHTML = `${total.toFixed(2)}`;
  document.getElementById("total-button").innerHTML = `${total.toFixed(2)}`;
  document.getElementById("sd-total-price").innerHTML = `${total.toFixed(2)}`;
  document.getElementById("total-sd-button").innerHTML = `${total.toFixed(2)}`;
  document.getElementById("sd-overview-button").innerHTML = `${total.toFixed(
    2
  )}`;
}

function openSdOverview() {
  document.getElementById("sd-overview").classList.remove("d-none");
}

function addNumber(i) {
  cart[i].number++;
  loadCart();
  addAmount(i);
}

function removeNumber(i) {
  if (cart[i].number == 1) {
    removeAmount(i);
    cart.splice(i, 1);
    setArray("cart", cart);
  } else {
    cart[i].number--;
    addAmount(i);
  }
 removeCart();
}

function removeCart(){
  if (cart.length == 0) {
    hideCart();
  } else {
    loadCart();
  }
}

function closeSdOverview() {
  document.getElementById("sd-overview").classList.add("d-none");
}

function joke() {
  alert("Soviel Geld hast du nicht!");
}

function setArray(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
  return JSON.parse(localStorage.getItem(key));
}
