var invisibleMaken = function () {              document.querySelector('img[src="images/enigzins.svg"]').classList.toggle('noshow');
};

document.querySelector('.button1').addEventListener('click', invisibleMaken);

var visibleMaken = function () {      
 document.querySelector('.stap1').classList.add('expanded');
 document.querySelector('.button2').classList.add('noshow');
};

document.querySelector('.button2').addEventListener('click', visibleMaken);

var invisibleMaken2 = function () {      
 document.querySelector('img[src="images/aan_de_omslachtige_kant.svg"]').classList.toggle('noshow');
};

document.querySelector('.button3').addEventListener('click', invisibleMaken2);

var visibleMaken2 = function () {      
 document.querySelector('.stap2').classList.add('expanded');
 document.querySelector('.button3').classList.add('noshow');
};

document.querySelector('.button3').addEventListener('click', visibleMaken2);