 
var link = document.querySelector(".write-us");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".close-popup-bttn");
  
var form = popup.querySelector("form");
var user_name = popup.querySelector(".title");
var user_email = popup.querySelector(".email");
  
var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("user_name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      user_name.value = storage;
      user_email.focus();
    } else {
      user_name.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!user_name.value || !user_email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("user_name", user_name.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

 
var mapLink = document.querySelector(".about-map");

var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector("close-popup-bttn");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });


var goods = document.querySelector(".buy-button");
var order = document.querySelector(".order-popup");
var finish_order = order.querySelector(".close-popup-bttn");
var continue_shopping = order.querySelector(".shopping-continue");
  
  for (var i = 0; i < goods.length; i++) {

  goods[i].addEventListener("click", function (evt) {
   evt.preventDefault();
   order.classList.add("modal-show");
   });
 }
  
  finish_order.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("modal-show");
   });
  
   continue_shopping.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("modal-show");
   });
  


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (order.classList.contains("modal-show")) {
      	evt.preventDefault();
        order.classList.remove("modal-show");
      }
    }
  });
};