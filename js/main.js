document.addEventListener("DOMContentLoaded", function () {
	const parentLinks = document.querySelectorAll(".parent");

	parentLinks.forEach(function (parentLink) {
		parentLink.addEventListener("click", function () {
			if (parentLink.classList.contains("active")) {
				parentLinks.forEach(function (link) {
					link.classList.remove("active", "not-active");
				});

				const submenus = document.querySelectorAll(".submenu");
				submenus.forEach(function (submenu) {
					submenu.style.opacity = "0";
					submenu.style.top = "100%";

					submenu.addEventListener("transitionend", function (event) {
						if (event.propertyName === "opacity" && submenu.style.opacity === "0") {
							submenu.style.display = "none";
						}
					});
				});
			} else {
				parentLinks.forEach(function (link) {
					link.classList.remove("active");
					link.classList.add("not-active");
				});

				parentLink.classList.remove("not-active");
				parentLink.classList.add("active");

				const submenus = document.querySelectorAll(".submenu");
				submenus.forEach(function (submenu) {
					submenu.style.opacity = "0";
					submenu.style.top = "100%";

					submenu.addEventListener("transitionend", function (event) {
						if (event.propertyName === "opacity" && submenu.style.opacity === "0") {
							submenu.style.display = "none";
						}
					});
				});

				const submenu = parentLink.nextElementSibling;
				submenu.style.display = "block";

				requestAnimationFrame(function () {
					// Delaying the transition start slightly to ensure smooth animation
					submenu.style.top = "125%";
					submenu.style.opacity = "1";
				});
			}
		});
	});

	const mobileMenu = document.querySelector(".mobile-menu");
	const hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", function () {
		mobileMenu.classList.toggle("open");
	});

	/**
	 * Search Clicked
	 */
	const searchIcon = document.querySelector(".search-icon");
	const searchContainer = document.querySelector(".search");
	const closeButton = document.querySelector(".close");

	searchIcon.addEventListener("click", function () {
		searchContainer.classList.add("expanded");
		searchIcon.style.display = "none";
		closeButton.classList.add("opened");

		searchContainer.addEventListener("transitionend", function () {
			searchContainer.querySelector("form").style.display = "flex !important";
			closeButton.style.display = "flex !important";
			searchIcon.style.display = "none";

			searchContainer.removeEventListener("transitionend", this);
		});
	});

	closeButton.addEventListener("click", function () {
		searchContainer.classList.remove("expanded");
		searchContainer.querySelector("form").style.display = "none !important";
		closeButton.classList.remove("opened");

		searchContainer.addEventListener("transitionend", function () {
			closeButton.style.display = "none !important";
			searchContainer.querySelector("form").style.display = "none !important";

			searchIcon.style.display = "block";

			searchContainer.removeEventListener("transitionend", this);
		});
	});
});
