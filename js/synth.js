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
        osc.type = "sine";

    } else if (square.checked === true) {

        oscillateur.type = "square";
        osc.type = "square";

    } else if (sawtooth.checked === true) {

        oscillateur.type = "sawtooth";
        osc.type = "sawtooth";

    } else if (triangle.checked === true) {

        oscillateur.type = "triangle";
        osc.type = "triangle";

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


var mapKey = mapKeyD;

tableau = 0;

var bool1 = false,
    bool2 = false,
    bool3 = false,
    bool4 = false,
    bool5 = false,
    bool6 = false,
    bool7 = false,
    bool8 = false,
    bool9 = false,
    bool10 = false,
    bool11 = false,
    bool12 = false,
    bool13 = false,
    bool14 = false,
    bool15 = false,
    bool16 = false,
    bool17 = false,
    bool18 = false,
    bool19 = false,
    bool20 = false;

document.addEventListener("keydown", function (event) {

    playSynth();

    if(event.keyCode == mapKey.kDo) {
        if(bool1) return;
        bool1 = true;
        frequ(notes.do3);
        tableau ++;
        }
    else if(event.keyCode == mapKey.kDo_d) {
        if(bool2) return;
        bool2 = true;
        tableau ++;
        frequ(notes.do_d3);
    }
    else if(event.keyCode == mapKey.kRe) {
        if(bool3) return;
        bool3 = true;
        tableau ++;
        frequ(notes.re3);
    }
    else if(event.keyCode == mapKey.kRe_d) {
        if(bool4) return;
        bool4 = true;
        tableau ++;
        frequ(notes.re_d3);
    }
    else if(event.keyCode == mapKey.kMi) {
        if(bool5) return;
        bool5 = true;
        tableau ++;
        frequ(notes.mi3);
    }
    else if(event.keyCode == mapKey.kFa) {
        if(bool6) return;
        bool6 = true;
        tableau ++;
        frequ(notes.fa3);
    }
    else if(event.keyCode == mapKey.kFa_d) {
        if(bool7) return;
        bool7 = true;
        tableau ++;
        frequ(notes.fa_d3);
    }
    else if(event.keyCode == mapKey.kSol) {
        if(bool8) return;
        bool8 = true;
        tableau ++;
        frequ(notes.sol3);
    }
    else if(event.keyCode == mapKey.kSol_d) {
        if(bool9) return;
        bool9 = true;
        tableau ++;
        frequ(notes.sol_d3);
    }
    else if(event.keyCode == mapKey.kLa) {
        if(bool10) return;
        bool10= true;
        tableau ++;
        frequ(notes.la3);
    }
    else if(event.keyCode == mapKey.kLa_d) {
        if(bool11) return;
        bool11 = true;
        tableau ++;
        frequ(notes.la_d3);
    }
    else if(event.keyCode == mapKey.kSi) {
        if(bool12) return;
        bool12 = true;
        tableau ++;
        frequ(notes.si3);
    }
    else if(event.keyCode == mapKey.kDo2) {
        if(bool13) return;
        bool13 = true;
        tableau ++;
        frequ(notes.do4);
    }
    else if(event.keyCode == mapKey.kDo_d2) {
        if(bool14) return;
        bool14 = true;
        tableau ++;
        frequ(notes.do_d4);
    }
    else if(event.keyCode == mapKey.kRe2) {
        if(bool15) return;
        bool15 = true;
        tableau ++;
        frequ(notes.re4);
    }
    else if(event.keyCode == mapKey.kRe_d2) {
        if(bool16) return;
        bool16 = true;
        tableau ++;
        frequ(notes.re_d4);
    }
    else if(event.keyCode == mapKey.kMi2) {
        if(bool17) return;
        bool17 = true;
        tableau ++;
        frequ(notes.mi4);
    }
    else if(event.keyCode == mapKey.kFa2) {
        if(bool18) return;
        bool18 = true;
        tableau ++;
        frequ(notes.fa4);
    }
    else if(event.keyCode == mapKey.kFa_d2) {
        if(bool19) return;
        bool19 = true;
        tableau ++;
        frequ(notes.fa_d4);
    }
    else if(event.keyCode == mapKey.kSol2) {
        if(bool20) return;
        bool20 = true;
        tableau ++;
        frequ(notes.sol4);
    }
    //else {stopSynth()}
});

/*document.addEventListener("keypress", function (event) {
        if(event.metaKey === true) {
            stopSynth();
        }
});*/


document.addEventListener("keyup", function (event) {
    bool1 = false;
    bool2 = false;
    bool3 = false;
    bool4 = false;
    bool5 = false;
    bool6 = false;
    bool7 = false;
    bool8 = false;
    bool9 = false;
    bool10 = false;
    bool11 = false;
    bool12 = false;
    bool13 = false;
    bool14 = false;
    bool15 = false;
    bool16 = false;
    bool17 = false;
    bool18 = false;
    bool19 = false;
    bool20 = false;
    tableau --;
//    stopSynth();
    console.log(tableau);

    if(tableau === 0) {
        stopSynth();
    }

    /*if(event.keyCode == mapKeyD.kDo) {
        stopSynth();
    }
    else if(event.keyCode == mapKeyD.kDo_d) {
        stopSynth();
    }*/
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
