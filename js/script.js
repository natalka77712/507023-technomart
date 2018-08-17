var popup_modal = document.querySelector(".write-us");
var popup = document.querySelector(".contact-us");
var close = document.querySelector(".close-popup-bttn");
var form = document.querySelector(".contact-us-form");
var user_name = document.querySelector(".title");
var user_email = document.querySelector(".email");
var mapLink = document.querySelector(".about-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".close-popup-bttn");


var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("user_name");
  } catch (err) {
    isStorageSupport = false;
  }

  popup_modal.addEventListener("click", function (evt) {
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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
  }
});

 
