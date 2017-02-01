var dropdown = function () {
    document.querySelector('.leestijd_noshow').classList.toggle('drop');
};

document.querySelector('.leestijd').addEventListener('click', dropdown);

var dropdown2 = function () {
    document.querySelector('.sorteren_noshow').classList.toggle('drop');
};

document.querySelector('.sorteren').addEventListener('click', dropdown2);

var dropdown3 = function () {
    document.querySelector('.sfeerwoord_noshow').classList.toggle('drop');
};

document.querySelector('.sfeerwoord').addEventListener('click', dropdown3);