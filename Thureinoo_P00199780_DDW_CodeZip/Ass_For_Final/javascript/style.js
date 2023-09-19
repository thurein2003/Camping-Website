function submitBtn() {
  const userEmail = document.getElementById('userEmail');
  if (userEmail.value === '') {
    alert("Input Your email");
  } else {
    alert("Thanks for subscribing");
  }
}

let toggleNavList=() => {
  if(navList.style.display =="flex" ){
    navList.style.display ="table";
  }
  else if (navList.style.display =="none" ) {
    navList.style.display ="table";
  } else{
    navList.style.display ="none";

  }
}


function accept() {
  setCookie('accept', 'true', 365); // Set the cookie to expire in 365 days
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function closePopup() {
  var popup = document.getElementById("gdpr-cookie-message");
  popup.style.display = "none";
}


