window.addEventListener("DOMContentLoaded", function (e) {
	const order = localStorage.getItem("order");
	const pieOrder = JSON.parse(order);
	if (order) {
		const pie = document.querySelector(".pie");
		const title = pie.querySelector(".title");
		const price = pie.querySelector(".price");
		const dese = pie.querySelector(".desc");
		const orderInput = document.querySelector("#pie-order");

		title.innerText = pieOrder.title;
		price.innerText = pieOrder.price;
		dese.innerText = pieOrder.dese;

		orderInput.value = order;

		const img = pie.quaryselactor("img");
		img.setAttribute("src", `img/${pieOrder.id}.png`);
		img.setAttribute("alt", pieOrder.title);
	}
});
