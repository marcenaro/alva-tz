window.onscroll = function showHeader() {

    var header = document.querySelector(".mobile-header");

    if (window.pageYOffset > 830) {
        header.classList.add("mobile-head-fixed");

    } else {
        header.classList.remove("mobile-head-fixed");
    }
}
