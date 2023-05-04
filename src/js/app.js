// Webp check
const webpCheck = (callback) => {
	var webP = new Image();
	webP.onload = webP.onerror = () => {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
webpCheck((support) => {
	if (support == true) {
		document.querySelector("html").classList.add("webp");
	} else {
		document.querySelector("html").classList.add("no-webp");
	}
});

// Burger menu
(function () {
	const burger = document.querySelector(".burger");
	const burgerOpen = document.querySelector(".burger__img--open");
	const burgerClose = document.querySelector(".burger__img--close");
	const menu = document.querySelector(".mobile-menu");
	const body = document.querySelector("body");

	burger.addEventListener("click", (e) => {
		burgerOpen.classList.toggle("active");
		burgerClose.classList.toggle("active");
		menu.classList.toggle("active");
		body.classList.toggle("dis-scroll");
	});

	let viewportWidth;

	let setViewportWidth = function () {
		viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	};

	let logWidth = function () {
		if (viewportWidth >= 992) {
			burgerOpen.classList.add("active");
			burgerClose.classList.remove("active");
			menu.classList.remove("active");
			body.classList.remove("dis-scroll");
		}
	};

	setViewportWidth();
	logWidth();

	window.addEventListener(
		"resize",
		function () {
			setViewportWidth();
			logWidth();
		},
		false
	);
})();
