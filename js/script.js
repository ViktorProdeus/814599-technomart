var link = document.querySelector('.button-contacts');
var popup = document.querySelector('.modal-login');

if(popup){	
	var close = popup.querySelector(".button-close");
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=user-name]");
	var mail = popup.querySelector("[name=user-mail]");
	
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
	
	if(link){	
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
	}
}

var isStorageSupport = true;
var storage = "";

var mapPopup = document.querySelector(".modal-map");

if(mapPopup){	
	var mapClose = mapPopup.querySelector(".map-close-js");
}

var mapLink = document.querySelector(".map-content");

if(mapLink){
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});
}

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

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

// slider-1
var sliderMain = document.querySelector(".slider");
if(sliderMain) {
	var buttonNext = sliderMain.querySelector(".next");
	var buttonPrev = sliderMain.querySelector(".prev");
	var item1 = sliderMain.querySelector(".slider-list li:first-child");
	var item2 = sliderMain.querySelector(".slider-list li:last-child");
	var radio1 = sliderMain.querySelector(".slider-controls li:first-child");
	var radio2 = sliderMain.querySelector(".slider-controls li:last-child");

	buttonNext.addEventListener("click", function (evt) {
		evt.preventDefault();
		item1.classList.toggle("slide-1");	
		item2.classList.toggle("slide-2");	
		radio1.classList.toggle("active");
		radio2.classList.toggle("active");
	});

	buttonPrev.addEventListener("click", function (evt) {
		evt.preventDefault();
		item2.classList.toggle("slide-2");	
		item1.classList.toggle("slide-1");	
		radio2.classList.toggle("active");
		radio1.classList.toggle("active");	
	});

	radio1.addEventListener("click", function (evt) {
		evt.preventDefault();
		item2.classList.remove("slide-2");	
		item1.classList.add("slide-1");
		radio2.classList.remove("active");
		radio1.classList.add("active");	
	});

	radio2.addEventListener("click", function (evt) {
		evt.preventDefault();
		item1.classList.remove("slide-1");	
		item2.classList.add("slide-2");	
		radio1.classList.remove("active");
		radio2.classList.add("active");
	});
}

// модалка при покупке товара
var productsList = document.querySelector('.products-list');
if (productsList) {
	var productBuyInform = function () {
		var elements = productsList.querySelectorAll('.products-item');
		var cartModal = document.querySelector('.modal-in-cart');
		if (cartModal) {
			var closeCartModal = cartModal.querySelector(".button-close");
			var closeCartContinue = cartModal.querySelector(".button-continue");
			
			for (var i = 0; i < elements.length; i++) {
				var element = elements[i]; 
				var child = element.querySelector('.button-buy');
				
				child.addEventListener('click', function(evt) {
					evt.preventDefault();
					cartModal.classList.add('modal-show');
				});
			}
			
			closeCartModal.addEventListener("click", function (evt) {
				evt.preventDefault();
				cartModal.classList.remove("modal-show");
			});

			closeCartContinue.addEventListener("click", function (evt) {
				evt.preventDefault();
				cartModal.classList.remove("modal-show");
			});
		}		
	};
	productBuyInform();
}

