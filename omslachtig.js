var button1 = document.querySelector('button');

var eersteStap = document.querySelector('.tweede_paragraaf');

var visibleMaken = function () {
    eersteStap.classList.toggle('expanded');
};

button1.addEventListener('click', visibleMaken);