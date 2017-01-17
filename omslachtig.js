var invisibleMaken = function () {              document.querySelector('img[src="images/enigzins.svg"]').classList.add('noshow');
 document.querySelector('.button1').classList.add('noshow');
};

document.querySelector('.button1').addEventListener('click', invisibleMaken);

var visibleMaken = function () {      
 document.querySelector('.stap1').classList.add('expanded');
 document.querySelector('.button2').classList.add('noshow');
};

document.querySelector('.button2').addEventListener('click', visibleMaken);