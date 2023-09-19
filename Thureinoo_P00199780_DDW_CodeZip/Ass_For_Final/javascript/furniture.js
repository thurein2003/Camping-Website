function addToBasket(btn) {
  let item = btn.parentNode;
  let child = item.children;

  let img = child[0].innerText;
  let name = child[1].innerText;
  let price = child[3].innerText;

  let str = "<div class='carts'>";
  str += "<p>" + img + "</p>";
  str += "<p>" + name + "</p>";
  str += "<p>" + price + "</p>";
  // str += "<button onclick='clearCard(this)'>Remove</button>";
  str += "</div>";

  if (sessionStorage.getItem("carts") == null) {
    sessionStorage.setItem("carts", str);
  } else {
    let prev = sessionStorage.getItem("carts");
    prev += str;
    sessionStorage.setItem("carts", prev);
  }
  let totalPrice = parseFloat(sessionStorage.getItem("funitureprice")) || 0.0;
  let currentPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  totalPrice += currentPrice;
  sessionStorage.setItem("funitureprice", totalPrice.toFixed(2));

  alert("Add To Cart");
}

// function clearCard(button) {
//   let cartItem = button.parentNode;
//   cartItem.parentNode.removeChild(cartItem);
// }


let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}
