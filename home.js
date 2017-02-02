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

var mijnNS = function () {
    document.querySelector('.bookmark_ns').classList.toggle('mijnNS_bookmark');
}
document.querySelector('.bookmark').addEventListener('click', mijnNS);