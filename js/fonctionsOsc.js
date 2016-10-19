var contexteAudio = new AudioContext(),
    contexteAudio2 = new AudioContext();

function playDo1(note) {

    // join l'oscillateur au contexte audio, assigne la valeur 440hz à l'onde et connecte l'oscillateur au contexte audio
    osc = contexteAudio.createOscillator();
    osc.frequency.value = note;
    osc.connect(contexteAudio.destination);

    // lancement de la fonction qui sélectionne le type d'onde
    check();

    // lancement de l'oscillateur
    osc.start(contexteAudio.currentTime);

}

function playDo_d1(note) {

    osc2 = contexteAudio2.createOscillator()
    osc2.frequency.value = note;
    osc2.connect(contexteAudio2.destination);

    check();

    osc2.start(contexteAudio2.currentTime);

}

function stopDo1() {
    osc.stop(contexteAudio.currentTime);
}

function stopDo_d1() {
    osc2.stop(contexteAudio2.currentTime);
}
