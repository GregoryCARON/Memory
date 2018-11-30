//VARIABLES DECLARATIONS
var carteTotales, tours = 0, pairs = 0, nbClick = 0, div1, div2, carte1 = '', carte2 = '', carteId1, carteId2, tmpTimer, num = 12;
var cartes = [
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
var cartes_tirees = [];
try {
    document.body.requestFullscreen();
} catch (e) {
    console.log('pc');
}

var images = new Array();

function preload() {
    for (var i = 0; i < cartes.length; i++) {
        images[i] = new Image();
        images[i].src = 'images/' + cartes[i] + '.png';
    }
}

function animElement(id) {
    var cssPrefix = false;
    switch(Browser.name) {
        case "safari":
            cssPrefix = "webkit";
            break;
        case "chrome":
            cssPrefix = "webkit";
            break;
        case "firefox":
            cssPrefix = "moz";
            break;
        case "opera":
            cssPrefix = "o";
            break;
        case "ie":
            cssPrefix = "ms";
            break;
    }
    animElement('titre');
    // Spin them rays!
    if(cssPrefix) { // Skip IE!
        var rays = document.getElementById(id), degrees = 0, speed = 0.05;
        setInterval(function() {
            degrees += speed; // degree adjustment each interval
            rays.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degrees + "deg)");
        },20);
    }

}

preload();

function choixAleaCarte(number) {
    for (var i = 0; i < number; i++) {
        var pioche = Math.floor(Math.random() * cartes.length);
        var dejapioche = 0;
        for (var a = 0; a < (cartes_tirees.length - 1); a++) {
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

//MIX ARRAY FUNCTION
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function jouer() {
    document.getElementById('reset').style.display = 'block';
    shuffleArray(cartes);
    if (num > 54) {//MAX NUMBER OF CARDS
        num = 54;
    }
    if (num % 2 !== 0) {//CHECK EVEN NUMBER
        alert('veillez choisir un nombre pair');
    } else {
        choixAleaCarte(num / 2);
        carteTotales = num;
        for (var ii = 0; ii < carteTotales; ii++) {
            var divContenu = document.createElement('div');
            divContenu.className = 'carte';
            divContenu.id = 'carte' + ii;
            divContenu.innerHTML = '<img id="img' + ii + '" src="images/dos.png" width="100px" alt="carte">'; //alt="' + cartes_tirees[i] + '">';
            document.getElementById('cartes').appendChild(divContenu);
            (function (ii) {
                document.getElementById('carte' + ii).addEventListener('click', function () {

                    if (nbClick < 2) {
                        console.log(ii);
                        if (nbClick === 0) {
                            nbClick++;
                            div1 = 'carte' + ii;
                            carte1 = cartes_tirees[ii];
                            carteId1 = 'img' + ii;
                            console.log('images/cartes/' + cartes_tirees[ii] + '.png');
                            document.getElementById('carte' + ii).classList.add('animated');
                            document.getElementById('carte' + ii).classList.add('flipInY');
                            document.getElementById(carteId1).src = 'images/cartes/' + cartes_tirees[ii] + '.png';
                            document.getElementById('carte' + ii).classList.remove('animated');
                            document.getElementById('carte' + ii).classList.remove('flipInY');
                        } else {
                            console.log(tours);
                            tours++;
                            nbClick++;
                            div2 = 'carte' + ii;
                            carte2 = cartes_tirees[ii];
                            carteId2 = 'img' + ii;
                            document.getElementById('carte' + ii).classList.add('animated');
                            document.getElementById('carte' + ii).classList.add('flipInY');
                            document.getElementById(carteId2).src = 'images/cartes/' + cartes_tirees[ii] + '.png';
                            tmpTimer = setTimeout(function() {clearTimeout(tmpTimer);}, 1000);
                            document.getElementById('carte' + ii).classList.remove('animated');
                            document.getElementById('carte' + ii).classList.remove('flipInY');
                            /*try {
                                document.getElementById(carteId2).src = 'images/cartes/' + cartes_tirees[ii] + '.png';
                            } catch (e) {
                                console.log("carte id 2 =" + carteId2);
                            }*/
                            console.log('carte1 : ' + carte1 + ', ID : ' + carteId1);
                            console.log('carte2 : ' + carte2 + ', ID : ' + carteId2);
                            if (carte1 === carte2 && carte1 !== '' && carte2 !== '' && carteId1 !== carteId2) {
                                setTimeout(function () {
                                    nbClick = 0;
                                    var rdiv1 = document.getElementById(div1);
                                    var rdiv2 = document.getElementById(div2);
                                    console.log(rdiv1);
                                    console.log(rdiv2);
                                    document.getElementById('cartes').removeChild(rdiv1);
                                    document.getElementById('cartes').removeChild(rdiv2);
                                    /*document.getElementById('cartes').removeChild(document.getElementById(carteId1));
                                    document.getElementById('cartes').removeChild(document.getElementById(carteId2));*/
                                    /*document.getElementById(div1).style.visibility = 'hidden';
                                    document.getElementById(div2).style.visibility = 'hidden';*/
                                    carte1 = null;
                                    carteId1 = null;
                                    carte2 = null;
                                    carteId2 = null;
                                    pairs++;
                                    document.getElementById('score').innerHTML = 'Pairs : ' + pairs;
                                    if ((num) === (pairs * 2)) {
                                        document.getElementById('entree').style.display = 'none';
                                        document.getElementById('cartes').style.display = 'none';
                                        document.getElementById('resultats').style.display = 'flex';
                                    }
                                }, 500);
                            } else {
                                setTimeout(function () {
                                    nbClick = 0;
                                    document.getElementById(carteId1).src = 'images/dos.png';
                                    document.getElementById(carteId2).src = 'images/dos.png';
                                    carteId1 = null;
                                    carteId2 = null;

                                }, 500);
                            }
                            /*}*/
                        }
                    }
                    document.getElementById('carte' + ii).classList.remove('animated');
                    document.getElementById('carte' + ii).classList.remove('flipInY');
                });
            })(ii);
        }
    }
}

document.getElementById('resval').addEventListener('click', function () {
    ras();
    document.getElementById('reset').style.visibility = 'hidden';
    document.getElementById('entree').style.display = 'flex';
});
document.getElementById('btnJouer').addEventListener('click', function () {
    ras();
    document.getElementById('reset').style.visibility = 'visible';
    document.getElementById('cartes').style.display = 'flex';
});
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('cartes').style.display = 'flex';
    ras();
});

function ras() {
    document.getElementById('cartes').innerHTML = '';
    document.getElementById('resultats').style.display = 'none';
    document.getElementById('entree').style.display = 'none';
    document.getElementById('cartes').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    cartes_tirees = [];
    carteTotales = 0;
    tours = 0;
    pairs = 0;
    nbClick = 0;
    div1 = null;
    div2 = null;
    carte1 = '';
    carte2 = '';
    carteId1 = null;
    carteId2 = null;
    jouer();
}