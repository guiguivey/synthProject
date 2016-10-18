// déclaration de la variable contenant le bouton du html
var la = document.getElementById("la440");

// évènement quand on laisse le clique appuyé sur le bouton et quand on le lache
la.addEventListener("mousedown", playosc);
la.addEventListener("mouseup", stoposc);

// déclaration du contexte audio et du futur oscillateur
var contexteAudio = new window.AudioContext() || new window.webkitAudioContext();
var oscillateur;

// déclaration des variables contenant les inputs radios du html
var sine = document.getElementById("sine"),
    square = document.getElementById("square"),
    sawtooth = document.getElementById("sawtooth"),
    triangle = document.getElementById("triangle");


// function qui permet de sélectionner le type d'onde de l'oscillateur en fonction du radio coché
function check() {

    if (sine.checked === true) {

        oscillateur.type = "sine";

    } else if (square.checked === true) {

        oscillateur.type = "square";

    } else if (sawtooth.checked === true) {

        oscillateur.type = "sawtooth";

    } else if (triangle.checked === true) {

        oscillateur.type = "triangle";

    }

}

/*---------------------------------------------*/


var refLa440 = 440;

// variable contenant le calcul pour les 1/2 tons
var calc = Math.pow(2, 1/12); // = 2 racine carrée ( 1/12 )


// Objet pour les frequences des notes

var notes = {
    do: refLa440 * Math.pow(calc, -45),
    do_d: refLa440 * Math.pow(calc, -44),
    re: refLa440 * Math.pow(calc, -43),
    re_d: refLa440 * Math.pow(calc, -42),
    mi: refLa440 * Math.pow(calc, -41),
    fa: refLa440 * Math.pow(calc, -40),
    fa_d: refLa440 * Math.pow(calc, -39),
    sol: refLa440 * Math.pow(calc, -38),
    sol_d: refLa440 * Math.pow(calc, -37),
    la: refLa440 * Math.pow(calc, -36),
    la_d: refLa440 * Math.pow(calc, -35),
    si: refLa440 * Math.pow(calc, -34),

    do1: refLa440 * Math.pow(calc, -33),
    do_d1: refLa440 * Math.pow(calc, -32),
    re1: refLa440 * Math.pow(calc, -31),
    re_d1: refLa440 * Math.pow(calc, -30),
    mi1: refLa440 * Math.pow(calc, -29),
    fa1: refLa440 * Math.pow(calc, -28),
    fa_d1: refLa440 * Math.pow(calc, -27),
    sol1: refLa440 * Math.pow(calc, -26),
    sol_d1: refLa440 * Math.pow(calc, -25),
    la1: refLa440 * Math.pow(calc, -24),
    la_d1: refLa440 * Math.pow(calc, -23),
    si1: refLa440 * Math.pow(calc, -22),

    do2: refLa440 * Math.pow(calc, -21),
    do_d2: refLa440 * Math.pow(calc, -20),
    re2: refLa440 * Math.pow(calc, -19),
    re_d2: refLa440 * Math.pow(calc, -18),
    mi2: refLa440 * Math.pow(calc, -17),
    fa2: refLa440 * Math.pow(calc, -16),
    fa_d2: refLa440 * Math.pow(calc, -15),
    sol2: refLa440 * Math.pow(calc, -14),
    sol_d2: refLa440 * Math.pow(calc, -13),
    la2: refLa440 * Math.pow(calc, -12),
    la_d2: refLa440 * Math.pow(calc, -11),
    si2: refLa440 * Math.pow(calc, -10),

    do3: refLa440 * Math.pow(calc, -9),
    do_d3: refLa440 * Math.pow(calc, -8),
    re3: refLa440 * Math.pow(calc, -7),
    re_d3: refLa440 * Math.pow(calc, -6),
    mi3: refLa440 * Math.pow(calc, -5),
    fa3: refLa440 * Math.pow(calc, -4),
    fa_d3: refLa440 * Math.pow(calc, -3),
    sol3: refLa440 * Math.pow(calc, -2),
    sol_d3: refLa440 * Math.pow(calc, -1),
    la3: refLa440,
    la_d3: refLa440 * calc,
    si3: refLa440 * Math.pow(calc, 2),

    do4: refLa440 * Math.pow(calc, 3),
    do_d4: refLa440 * Math.pow(calc, 4),
    re4: refLa440 * Math.pow(calc, 5),
    re_d4: refLa440 * Math.pow(calc, 6),
    mi4: refLa440 * Math.pow(calc, 7),
    fa4: refLa440 * Math.pow(calc, 8),
    fa_d4: refLa440 * Math.pow(calc, 9),
    sol4: refLa440 * Math.pow(calc, 10),
    sol_d4: refLa440 * Math.pow(calc, 11),
    la4: refLa440 * Math.pow(calc, 12),
    la_d4: refLa440 * Math.pow(calc, 13),
    si4: refLa440 * Math.pow(calc, 14),

    do5: refLa440 * Math.pow(calc, 15),
    do_d5: refLa440 * Math.pow(calc, 16),
    re5: refLa440 * Math.pow(calc, 17),
    re_d5: refLa440 * Math.pow(calc, 18),
    mi5: refLa440 * Math.pow(calc, 19),
    fa5: refLa440 * Math.pow(calc, 20),
    fa_d5: refLa440 * Math.pow(calc, 21),
    sol5: refLa440 * Math.pow(calc, 22),
    sol_d5: refLa440 * Math.pow(calc, 23),
    la5: refLa440 * Math.pow(calc, 24),
    la_d5: refLa440 * Math.pow(calc, 25),
    si5: refLa440 * Math.pow(calc, 26),

    do6: refLa440 * Math.pow(calc, 27),
    do_d6: refLa440 * Math.pow(calc, 28),
    re6: refLa440 * Math.pow(calc, 29),
    re_d6: refLa440 * Math.pow(calc, 30),
    mi6: refLa440 * Math.pow(calc, 31),
    fa6: refLa440 * Math.pow(calc, 32),
    fa_d6: refLa440 * Math.pow(calc, 33),
    sol6: refLa440 * Math.pow(calc, 34),
    sol_d6: refLa440 * Math.pow(calc, 35),
    la6: refLa440 * Math.pow(calc, 36),
    la_d6: refLa440 * Math.pow(calc, 37),
    si6: refLa440 * Math.pow(calc, 38),
};



/*---------------------------------------------*/


// function qui définie et lance l'oscillateur
function playosc() {

    /* join l'oscillateur au contexte audio, assigne la valeur 440hz à l'onde et connecte l'oscillateur au contexte audio */
    oscillateur = contexteAudio.createOscillator()
    oscillateur.frequency.value = notes.la3;
    oscillateur.connect(contexteAudio.destination);

    // lancement de la fonction qui sélectionne le type d'onde
    check();

    // lancement de l'oscillateur
    oscillateur.start();

}

// fonction qui stop l'oscillateur
function stoposc() {

    oscillateur.stop();

}


