//VARIABLES DECLARATIONS
let carteTotales;
let tours = 0;
let pairs = 0;
let nbClick = 0;
let div1;
let div2;
let carte1 = '';
let carte2 = '';
let carteId1;
let carteId2;
let num = 12;
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

//MIX ARRAY FUNCTION
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cartes);
if (num > 54) {//MAX NUMBER OF CARDS
    num = 54;
}
if (num % 2 !== 0) {//CHECK EVEN NUMBER
    alert('veillez choisir un nombre pair');
} else {
    choixAleaCarte(num / 2);
    carteTotales = num;
    for (let i = 0; i < carteTotales; i++) {
        let divContenu = document.createElement('div');
        divContenu.className = 'carte';
        divContenu.id = 'carte' + i;
        divContenu.innerHTML = '<img id="img' + i + '" src="images/dos.png" visibility="visible" width="100px" alt="' + cartes_tirees[i] + '">';
        document.getElementById('cartes').appendChild(divContenu);
        document.getElementById('carte' + i).addEventListener('click', function () {
                if (nbClick < 2) {
                    if (nbClick === 0) {
                        /*if (document.getElementById('carte' + i).style.visibility === 'visible') {*/
                        nbClick++;
                        div1 = document.getElementById('img' + i);
                        carte1 = cartes_tirees[i];
                        carteId1 = 'img' + i;
                        document.getElementById(carteId1).src = 'images/cartes/' + cartes_tirees[i] + '.png';
                        /*}*/
                    } else {
                        console.log(tours);
                        /*if (document.getElementById('carte' + i).style.visibility === 'visible') {*/
                        tours++;

                        nbClick++;
                        div2 = document.getElementById('img' + i);
                        carte2 = cartes_tirees[i];

                        carteId2 = 'img' + i;
                        document.getElementById(carteId2).src = 'images/cartes/' + cartes_tirees[i] + '.png';
                        console.log('carte1 : ' + carte1 + ', ID : ' + carteId1);
                        console.log('carte2 : ' + carte2 + ', ID : ' + carteId2);
                        if (carte1 === carte2 && carte1 !== '' && carte2 !== '' && carteId1 !== carteId2) {
                            setTimeout(function () {
                                nbClick = 0;
                                /*let div = document.getElementById('carte' + i);
                                let carte = document.getElementById(carteId1);
                                div1.removeChild(carteId1);
                                div2.removeChild(carteId2);
                                /*document.getElementById('cartes').removeChild(document.getElementById(carteId1));
                                document.getElementById('cartes').removeChild(document.getElementById(carteId2));*/
                                document.getElementById(div1).style.visibility = 'hidden';
                                document.getElementById(div2).style.visibility = 'hidden';
                                carte1 = null;
                                carteId1 = null;
                                carte2 = null;
                                carteId2 = null;

                            }, 500);
                        } else {

                            setTimeout(function () {
                                nbClick = 0;
                                pairs++;
                                document.getElementById(carteId1).src = 'images/dos.png';
                                document.getElementById(carteId2).src = 'images/dos.png';
                                carteId1 = null;
                                carteId2 = null;
                            }, 500);
                        }
                        /*}*/
                    }
                }
        });
    }
}

//alert(document.getElementById('carte1').style.backgroundImage);
//}

function choixAleaCarte(num) {
    for (let i = 0; i < num; i++) {
        let pioche = Math.floor(Math.random() * cartes.length);
        let dejapioche = 0;
        for (let a = 0; a < cartes_tirees.length; a++) {
            dejapioche = 0;
            if (cartes_tirees !== 'undefined' && cartes[pioche] === cartes_tirees[a]) {
                dejapioche = 1
            }
        }
        if (dejapioche === 0) {
            cartes_tirees.push(cartes[pioche]);
            cartes_tirees.push(cartes[pioche]);
        }
    }
    shuffleArray(cartes_tirees);
}