let carteTotales;
let cartes = [
    'as de pique',
    'roi de pique',
    'dame de pique',
    'valet de pique',
    '10 de pique',
    '9 de pique',
    '8 de pique',
    '7 de pique',
    '6 de pique',
    '5 de pique',
    '4 de pique',
    '3 de pique',
    '2 de pique',
    'as de coeur',
    'roi de coeur',
    'dame de coeur',
    'valet de coeur',
    '10 de coeur',
    '9 de coeur',
    '9 de coeur',
    '8 de coeur',
    '7 de coeur',
    '6 de coeur',
    '5 de coeur',
    '4 de coeur',
    '3 de coeur',
    '2 de coeur',
    'as de carreau',
    'roi de carreau',
    'dame de carreau',
    'valet de carreau',
    '10 de carreau',
    '9 de carreau',
    '8 de carreau',
    '7 de carreau',
    '6 de carreau',
    '5 de carreau',
    '4 de carreau',
    '3 de carreau',
    '2 de carreau',
    'as de trefle',
    'roi de trefle',
    'dame de trefle',
    'valet de trefle',
    '10 de trefle',
    '9 de trefle',
    '8 de trefle',
    '7 de trefle',
    '6 de trefle',
    '5 de trefle',
    '4 de trefle',
    '3 de trefle',
    '2 de trefle'
];
let cartes_tirees = [];

function generateBoard(num) {
    if (num > 108) {
        num = 108;
    }
    if (num % 2 !== 0) {
        alert('veillez choisir un nombre pair');
    } else {
        carteTotales = num;
        for (let i = 0; i < num; i++) {
            let divContenu = document.createElement('div');
            divContenu.className = 'carte';
            divContenu.id = 'carte' + i;
            divContenu.style.backgroundImage = 'url("images/dos.png")';
            divContenu.style.backgroundSize = 'cover';
            document.getElementById('cartes').appendChild(divContenu);
        }
    }
    alert(document.getElementById('carte1').style.backgroundImage);
}

function choixAleaCarte() {
    let rd = Math.floor(Math.random() * cartes.length);


}

function randomizeCard() {
    nbCarte = carte.length;

}


generateBoard(12);