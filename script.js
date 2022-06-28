let buttons = document.querySelectorAll(".button");

buttons.forEach(function(item) {
	item.addEventListener("click", buttonHandler);
})

function buttonHandler(event) {
	event.target.classList.add("no-shadow");
	
	setTimeout(function() {
		event.target.classList.remove("no-shadow");
	}, 300) 	
}
