 
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

 