let carteTotales;
let nbClick = 0;
let carte1 = '';
let carte2 = '';
let carteId1;
let carteId2;
let cartes = [
    'ace_of_spades2',
    'king_of_spades2',
    'queen_of_spades2',
    'jack_of_spades2',
    '10_of_spades',
    '9_of_spades',
    '8_of_spades',
    '7_of_spades',
    '6_of_spades',
    '5_of_spades',
    '4_of_spades',
    '3_of_spades',
    '2_of_spades',
    'ace_of_hearts',
    'king_of_hearts2',
    'queen_of_hearts2',
    'jack_of_hearts2',
    '10_of_hearts',
    '9_of_hearts',
    '9_of_hearts',
    '8_of_hearts',
    '7_of_hearts',
    '6_of_hearts',
    '5_of_hearts',
    '4_of_hearts',
    '3_of_hearts',
    '2_of_hearts',
    'ace_of_diamonds',
    'king_of_diamonds2',
    'queen_of_diamonds2',
    'jack_of_diamonds2',
    '10_of_diamonds',
    '9_of_diamonds',
    '8_of_diamonds',
    '7_of_diamonds',
    '6_of_diamonds',
    '5_of_diamonds',
    '4_of_diamonds',
    '3_of_diamonds',
    '2_of_diamonds',
    'ace_of_clubs',
    'king_of_clubs2',
    'queen_of_clubs2',
    'jack_of_clubs2',
    '10_of_clubs',
    '9_of_clubs',
    '8_of_clubs',
    '7_of_clubs',
    '6_of_clubs',
    '5_of_clubs',
    '4_of_clubs',
    '3_of_clubs',
    '2_of_clubs'
];
let cartes_tirees = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function generateBoard(num) {
    shuffleArray(cartes);
    if (num > 108) {
        num = 108;
    }
    if (num % 2 !== 0) {
        alert('veillez choisir un nombre pair');
    } else {
        choixAleaCarte(num);
        carteTotales = num;
        num = (num /2);
        for (let i = 0; i < carteTotales; i++) {
            let divContenu = document.createElement('div');
            divContenu.className = 'carte';
            divContenu.id = 'carte' + i;
            divContenu.innerHTML = '<img id="img' + i + '" src="images/cartes/' + cartes_tirees[i] + '.png" visibility="hidden" height ="100px" width="100px" alt="' + cartes_tirees[i] + '">';
            //divContenu.style.backgroundImage = 'url("images/dos.png")';
            //divContenu.onclick = "afficher('img" + i + "')";

            divContenu.style.backgroundSize = 'cover';
            document.getElementById('cartes').appendChild(divContenu);
            document.getElementById('carte' + i).addEventListener('click', function() {
                switch (nbClick) {
                    case 0:
                        carte1 = card;
                        carteId1 = 'img' + i;
                        document.getElementById('img' + i).style.visibility = 'visible';
                        break;
                    case 1:
                        carte2 = card;
                        carteId2 = 'img' + i;
                        document.getElementById('img' + i).style.visibility = 'visible';
                        break;
                        if (carte1 === carte2) {
                            nbClick = 0;
                            document.getElementById('cartes').removeChild(document.getElementById(carteId1));
                            document.getElementById('cartes').removeChild(document.getElementById(carteId2));
                        } else {
                            nbClick = 0;
                            document.getElementById(carteId1).style.visibility = 'hidden';
                            document.getElementById(carteId2).style.visibility = 'hidden';
                        }
                    default:

                        nbClick = 0;
                        carteId1 = null;
                        carteId2 = null;
                }
            });
        }
    }
    //alert(document.getElementById('carte1').style.backgroundImage);
}

function choixAleaCarte(num) {
    for (let i = 0; i < num; i++) {
        let pioche = Math.floor(Math.random() * cartes.length);
        let dejapioche = 0;
        for (let a = 0; a < cartes_tirees.length; a++) {
            dejapioche = 0;
            console.log(cartes[pioche]);
            console.log(cartes_tirees[a]);
            if (cartes_tirees !== 'undefined' && cartes[pioche] === cartes_tirees[a]) {
                dejapioche = 1
            }
        }
        if (dejapioche === 0) {
            cartes_tirees.push(cartes[pioche]);
            cartes_tirees.push(cartes[pioche]);
        }
    }
    console.log(cartes_tirees);
    shuffleArray(cartes_tirees);
    console.log(cartes_tirees);
}



generateBoard(12);




