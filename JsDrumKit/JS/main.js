// Play the sound of audios
window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    console.log(audio);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    console.log(key);
    if(!audio) {
        return; // stop this function
    }
    audio.currentTime = 0; // make the audio restart
    audio.play();
    key.classList.add('playing');
});

function removeTransition(event) {
    // console.log(event);
    if(event.propertyName !== 'transform') {
        return;
    }
    // console.log(event.propertyName);
    console.log(this);
    this.classList.remove('playing'); // 'this' means key of keys
}

// Remove the style of playing
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});