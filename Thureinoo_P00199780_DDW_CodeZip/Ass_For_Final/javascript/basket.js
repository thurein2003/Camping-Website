
//Basket print button
$(document).ready(function() {
  // Attach an event listener to the Print button
  $('#print-button').on('click', function() {
    // Use the jQuery print plugin with custom settings
    $("#printable").print({
      globalStyles: false,
      mediaPrint: false,
      stylesheet: "http://fonts.googleapis.com/css?family=Inconsolata",
      iframe: false,
      noPrintSelector: ".avoid-this",
      append: "Free jQuery Plugins<br/>",
      prepend: "<br/>jQueryScript.net",
      manuallyCopyFormValues: true,
      deferred: $.Deferred(),
      timeout: 250,
      title: null,
      doctype: '<!doctype html>'
    });
  });
});

let showData=()=>{
  basketCard.innerHTML = sessionStorage.getItem("carts");
}
let price = 0.00;
function showPrice() {
  let campingEquPrice = parseFloat(sessionStorage.getItem("campingequprice")) || 0.00;
  let furniturePrice = parseFloat(sessionStorage.getItem("funitureprice")) || 0.00;
  
  let grandTotal = campingEquPrice + furniturePrice;
  const totalprice = document.getElementById('totalprice');
  totalprice.innerHTML = parseFloat(grandTotal); 
}
function clearPrice() {
  sessionStorage.removeItem('campingequprice');
  sessionStorage.removeItem('funitureprice');
  const totalprice = document.getElementById('totalprice');
  totalprice.innerHTML = '0.00';

  sessionStorage.removeItem('carts');
  basketCard.innerHTML = "";
}
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearPrice);
