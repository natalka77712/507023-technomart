var order = document.querySelector(".order-popup");
var goods = document.querySelectorAll(".buy-button");
var finish_order = document.querySelector(".close-popup-bttn");

for (var i = 0; i < goods.length; i++) {
	goods[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    order.classList.add('modal-show');
  });
}

finish_order.addEventListener("click", function (evt) {
  evt.preventDefault();
  order.classList.remove("modal-show");
});



