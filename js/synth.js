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


// function qui définie et lance l'oscillateur
function playosc() {

    /* join l'oscillateur au contexte audio, assigne la valeur 440hz à l'onde et connecte l'oscillateur au contexte audio */
    oscillateur = contexteAudio.createOscillator()
    oscillateur.frequency.value = 440;
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
