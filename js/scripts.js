/* MAP */
var buttonMap = document.querySelector(".footer__marker");
var popupMap = document.querySelector(".popup-map");
var closeMap = popupMap.querySelector(".popup-close");

  buttonMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
  });

  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
    popupMap.classList.remove("popup-error");
  });

  window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("popup-show")) {
          popupMap.classList.remove("popup-show");
          popupMap.classList.remove("popup-error");
        }
      }
    });

/* REGISTRATION FORM */
var buttonToReg = document.querySelector(".button-reg");
var linkToReg = document.querySelector(".header-nav__item-registration");
var popupToReg = document.querySelector(".popup-register");
var close = popupToReg.querySelector(".popup-close");
var user = popupToReg.querySelector("[name=user]");
var form = popupToReg.querySelector(".popup__form");
var email = popupToReg.querySelector("[name=e-mail]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("user");
  } catch (err) {
  isStorageSupport = false;
}

  buttonToReg.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupToReg.classList.add("popup-show");

    if (storage) {
      user.value = storage;
      email.focus();
    } else {
      user.focus();
    }
  });

  linkToReg.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupToReg.classList.add("popup-show");

    if (storage) {
      user.value = storage;
      email.focus();
    } else {
      user.focus();
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupToReg.classList.remove("popup-show");
    popupToReg.classList.remove("popup-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!user.value || !email.value) {
      evt.preventDefault();
      popupToReg.classList.remove("popup-error");
      popupToReg.offsetWidth = popupToWrite.offsetWidth;
      popupToReg.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("user", user.value);
      }
    }
  });

  window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupToReg.classList.contains("popup-show")) {
          popupToReg.classList.remove("popup-show");
          popupToReg.classList.remove("popup-error");
        }
      }
    });
