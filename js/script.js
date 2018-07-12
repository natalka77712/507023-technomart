
var link = document.querySelector(".write-us");
var popup = document.querySelector(".contact-us");
var close = document.querySelector(".close-popup-bttn");

var form = document.querySelector("form");
var user_name = document.querySelector(".title");
var user_email = document.querySelector(".email");

var mapLink = document.querySelector(".about-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = document.querySelector("#close_map");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("user_name");
} catch (err) {
  isStorageSupport = false;
}

if (popup !== null && link !== null && form !== null ) {
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

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
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
}

if (mapLink !== null && mapPopup !== null && mapClose !== null) {

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}


var goods = document.querySelectorAll(".buy-button");
var order = document.querySelector(".order-popup");
var finish_order = document.querySelector(".close-popup-bttn");
var continue_shopping = document.querySelector(".shopping-continue");

if (goods !== null && order !== null) {

  for (var i = 0; i < goods.length; i++) {

    goods[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      order.classList.add("modal-show");
    });

    finish_order.addEventListener("click", function (evt) {
      evt.preventDefault();
      order.classList.remove("modal-show");
    });

    continue_shopping.addEventListener("click", function (evt) {
      evt.preventDefault();
      order.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (order.classList.contains("modal-show")) {
        order.classList.remove("modal-show");
      }
    }
  });
}
