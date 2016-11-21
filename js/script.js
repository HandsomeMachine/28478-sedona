var hotelSearch = document.querySelector(".search-form-btn");
var popup = document.querySelector(".modal-content");

var formSubmit = document.querySelector("form");
var arrival = formSubmit.querySelector("[name=arrival-date]");
var departure = formSubmit.querySelector("[name=departure-date]");
var adults = formSubmit.querySelector("[name=adults-number]");
var children = formSubmit.querySelector("[name=children-number]");

var storage = localStorage.getItem("adults");

hotelSearch.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-close");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (!popup.classList.contains("modal-content-close")) {
			popup.classList.add("modal-content-close");
			popup.classList.remove("modal-content-error");
		}
	}
});
