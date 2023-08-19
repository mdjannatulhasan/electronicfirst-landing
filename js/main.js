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
});
