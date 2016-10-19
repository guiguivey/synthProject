// déclaration de la variable contenant le bouton du html
var la = document.getElementById("la440");

// évènement quand on laisse le clique appuyé sur le bouton et quand on le lache
la.addEventListener("mousedown", playosc);
la.addEventListener("mouseup", stoposc);

// déclaration du contexte audio et du futur oscillateur


var oscillateur = {} ;

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


var keyP = document.getElementById("key");
var keyD = document.getElementById("keyD");


// fonction affiche KEYPRESS

document.onkeypress=function(e){
    e=e||window.event;
    var key=e.which?e.which:event.keyCode;
    keyP.innerHTML = 'KeyPress : '+ key;
}


// fonction affiche KEYDOWN/UP

document.onkeydown=function(e){
    e=e||window.event;
    var key=e.which?e.which:event.keyCode;
    keyD.innerHTML = 'Keydown/Up : '+ key;
}


var do1 = false;
var dod1 = false;
var re1 = false;
var red1 = false;
var mi1 = false;
var fa1 = false;
var fad1 = false;
var sol1 = false;
var sold1 = false;
var la1 = false;
var lad1 = false;
var si = false;

var do2 = false;
var dod2 = false;
var re2 = false;
var red2 = false;
var mi2 = false;
var fa2 = false;
var fad2 = false;
var sol2 = false;

document.addEventListener("keydown", function (event) {
    if(event.keyCode == mapKeyD.kDo) {
        if(do1) return;
        do1 = true;
        playDo1(notes.do3);
    }
    else if(event.keyCode == mapKeyD.kDo_d) {
        if(dod1) return;
        dod1 = true;
        playDo_d1(notes.do_d3);
    }

});


document.addEventListener("keyup", function (event) {
    if(event.keyCode == mapKeyD.kDo) {
        do1 = false;
        stopDo1();
    }
    else if(event.keyCode == mapKeyD.kDo_d) {
        dod1 = false;
        stopDo_d1();
    }
});


/*---------------------------------------------*/


// function qui définie et lance l'oscillateur
function playosc() {

    // join l'oscillateur au contexte audio, assigne la valeur 440hz à l'onde et connecte l'oscillateur au contexte audio
    oscillateur = contexteAudio.createOscillator()
    oscillateur.frequency.value = notes.la3;
    oscillateur.connect(contexteAudio.destination);

    // lancement de la fonction qui sélectionne le type d'onde
    check();

    // lancement de l'oscillateur
    oscillateur.start(contexteAudio.currentTime);

}

// fonction qui stop l'oscillateur
function stoposc() {

    oscillateur.stop(contexteAudio.currentTime);

}
