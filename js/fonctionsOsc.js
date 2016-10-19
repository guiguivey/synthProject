var contexteAudio = new AudioContext();

osc = contexteAudio.createOscillator();

osc.start();

/*function playSynth(note) {

    // join l'oscillateur au contexte audio, assigne la valeur 440hz à l'onde et connecte l'oscillateur au contexte audio

    osc.frequency.value = note;
    osc.connect(contexteAudio.destination);

    // lancement de la fonction qui sélectionne le type d'onde
    check();

    // lancement de l'oscillateur
    //osc.start();

}*/

function frequ(note) {

    osc.frequency.value = note;


}

function playSynth() {

    osc.connect(contexteAudio.destination);

    check();

}



function stopSynth() {
    osc.disconnect(contexteAudio.destination);
}


