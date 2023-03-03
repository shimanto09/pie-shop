window.addEventListener("DOMContentLoaded", function (e) {
	let orderButton = document.querySelectorAll("button[data-order]");

	orderButton.forEach(function (button) {
		button.addEventListener("click", function (e) {
			console.log(e);
			const buttons = e.currentTarget;
			const container = buttons.parentNode;
			const Order = {
				id: (id = buttons.getAttribute("data-order")),
				title: container.querySelector(".titel").innerText,
				price: container.querySelector(".price").innerText,
				dese: container.querySelector(".desc").innerText,
			};
			localStorage.setItem("order", JSON.stringify(Order));
			const Url = window.location.href.replace("pies.html", "oder.html");
			window.location.href = Url;
		});
	});
});
