var link = document.querySelector("a[href='mijn_ns.html']");

console.log(link);

link.addEventListener("click", function (event) {
	event.preventDefault();
	event.target.parentNode.classList.toggle("expanded");
});