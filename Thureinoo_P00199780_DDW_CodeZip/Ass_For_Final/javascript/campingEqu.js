function addToBasket1(btn) {
    let item = btn.parentNode;
    let child = item.children;
  
    let img = child[0].innerText;
    let name = child[1].innerText;
    let price = child[2].innerText;

    sessionStorage.setItem("price", price);

    let stri = "<div class='carts'>";
    stri += "<p>" + img + "</p>";
    stri+="<p>" + name+ "</p>";
    stri+="<p>" +price+ "</p>";

    stri += "</div>";
  
    if (sessionStorage.getItem("carts") == null) {
      sessionStorage.setItem("carts", stri);
    } else {
      let prev = sessionStorage.getItem("carts");
      prev += stri;
      sessionStorage.setItem("carts", prev);
    }
  
    let totalPrice = parseFloat(sessionStorage.getItem("campingequprice")) || 0.0;
    let currentPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    totalPrice += currentPrice;
    sessionStorage.setItem("campingequprice", totalPrice.toFixed(2));
  
    alert("Add To Cart");
    
  }
  