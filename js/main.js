var link = document.querySelector('.button-contacts');
var popup = document.querySelector('.modal-login');
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var mail = popup.querySelector("[name=user-mail]");

var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".map-content");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".button-close");


try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		mail.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");	
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !mail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error"); // добавили хак
		popup.offsetWidth = popup.offsetWidth; // добавили хак
		popup.classList.add("modal-error");
		console.log("Нужно ввести имя и почту");
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
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
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
