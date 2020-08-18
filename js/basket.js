var basketlink = document.querySelector(".header-cart");
var link_basket = document.querySelector(".mobile_basket");
var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");
var bodylock = document.querySelector("body");

basketlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
    bodylock.classList.add("no-scroll");
});

link_basket.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
    bodylock.classList.add("no-scroll");
});

basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
    bodylock.classList.remove("no-scroll");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (basketPopup.classList.contains("modal-show")) {
            basketPopup.classList.remove("modal-show");
        }
    }
});

