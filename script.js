var mijnNSLink = document.querySelector("a[href='mijn_ns.html']");

mijnNSLink.addEventListener("click", function (event) {
	event.preventDefault();
	event.target.parentNode.classList.toggle("expanded");
});