var eersteStap = document.querySelector('p:nth-of-type(1)');

var button1 = document.querySelector('button:nth-of-type(1)');

var show = function () {
    eersteStap.classList.add('visible');
};

button1.addEventListener('click', show);