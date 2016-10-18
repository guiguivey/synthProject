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

/*----------------------------------------------*/

// Objet pour les frequences des notes

var notes = {
    do: "32.703",
    do_d: "34.648",
    re: "36.708",
    re_d: "38.891",
    mi: "41.203",
    fa: "43.654",
    fa_d: "46.249",
    sol: "48.999",
    sol_d: "51.913",
    la: "55",
    la_d: "58.27",
    si: "61.735",

    do1: "65.406",
    do_d1: "69.296",
    re1: "73.416",
    re_d1: "77.782",
    mi1: "82.407",
    fa1: "87.307",
    fa_d1: "92.499",
    sol1: "97.999",
    sol_d1: "103.83",
    la1: "110",
    la_d1: "116.54",
    si1: "123.47",

    do2: "130.81",
    do_d2: "138.59",
    re2: "146.83",
    re_d2: "155.56",
    mi2: "164.81",
    fa2: "174.61",
    fa_d2: "185",
    sol2: "196",
    sol_d2: "207.65",
    la2: "220",
    la_d2: "233.08",
    si2: "246.94",

    do3: "261.63",
    do_d3: "277.18",
    re3: "293.66",
    re_d3: "311.13",
    mi3: "329.63",
    fa3: "349.23",
    fa_d3: "369.99",
    sol3: "392",
    sol_d3: "415.3",
    la3: "440",
    la_d3: "466.16",
    si3: "493.88",

    do4: "523.25",
    do_d4: "554.37",
    re4: "587.33",
    re_d4: "622.25",
    mi4: "659.26",
    fa4: "698.46",
    fa_d4: "739.99",
    sol4: "783.99",
    sol_d4: "830.61",
    la4: "880",
    la_d4: "932.33",
    si4: "987.77",

    do5: "1046.5",
    do_d5: "1108.7",
    re5: "1174.7",
    re_d5: "1244.5",
    mi5: "1318.5",
    fa5: "1396.9",
    fa_d5: "1480",
    sol5: "1568",
    sol_d5: "1661.2",
    la5: "1760",
    la_d5: "1864.7",
    si5: "1975.5",

    do6: "2093",
    do_d6: "2217.5",
    re6: "2349.3",
    re_d6: "2489",
    mi6: "2637",
    fa6: "2793.8",
    fa_d6: "2960",
    sol6: "3136",
    sol_d6: "3322.4",
    la6: "3520",
    la_d6: "3729.3",
    si6: "3951.1",
};



/*----------------------------------------------*/


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


