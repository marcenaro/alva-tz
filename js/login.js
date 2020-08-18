        var link = document.querySelector(".item-login");
        var link_mobile = document.querySelector(".mobile_login");
        
        var popup = document.querySelector(".modal-login");
        var close = document.querySelector(".modal-close");
        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        var bodylock = document.querySelector("body");

        var isStorageSupport = true;
        var storage = " ";
        


        try {
            storage = localStorage.getItem("login");
        } catch (err) {
            isStorageSupport = false;
        }

        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            bodylock.classList.add("no-scroll");

            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });
        link_mobile.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            bodylock.classList.add("no-scroll");

            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });


        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            body.classList.remove("no-scroll");
        });

        form.addEventListener("submit", function (evt) {
            if (!login.value || !password.value) {
                evt.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("login", login.value);
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