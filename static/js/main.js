function playSound(e) {
    // Play a sound when a key is pressed

    // Set variable to be the audio element corresponding to the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Selects the corresponding key on screen to the key pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // If a key is pressed with no corresponding audio element
    if (!audio) {
        return;
    };

    // Restarts the audio file
    audio.currentTime = 0;
 
    // Plays the sound corresponding to the key and sets volume
    audio.volume = 0.4;
    audio.play();

    // Add the 'playing' class to the key
    key
        .classList
        .add('playing')

};

function playClickedSound(e) {
    // Play a sound when a key is clicked

    // Set variable to be the audio element corresponding to the key clicked
    const audio = document.querySelector(`audio[data-key="${this.id}"]`);

    // Selects the corresponding key on screen to the key clicked
    const key = document.querySelector(`.key[data-key="${this.id}"]`);

    // Restarts the audio file
    audio.currentTime = 0;

    // Plays the sound corresponding to the key and sets volume
    audio.volume = 0.4;
    audio.play();

    // Add the 'playing' class to the key
    key
        .classList
        .add('playing')
}

function removeTransition(e) {
    // Remove the 'playing' class when tranisition ends If the property isn't transform ignore it
    if (e.propertyName !== 'transform') {
        return;
    }
    // Remove the playing class from the key
    this
        .classList
        .remove('playing')
}

// Gets a list of all the elements with the key class
const keys = document.querySelectorAll('.key')

// Loop through keys and listen for the 'tranisitionend' event and 'removeTransition' function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add an event listener for keystrokes
window.addEventListener('keydown', playSound);

// Add an event listener when a key is clicked
for (var i = 0; i < keys.length; i++) {
    keys[i]
        .addEventListener('click', playClickedSound)
}