
const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const error = document.querySelector('.error-para');

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value.trim();

    if (enteredText.length === 0) {
        error.textContent = "Nothing to Convert! Enter text in the text area.";
        return;
    }

    // Clear error message if there is text
    error.textContent = "";

    // Create a new SpeechSynthesisUtterance instance
    const newUtter = new SpeechSynthesisUtterance(enteredText);

    // Change button text to indicate the sound is playing
    convertBtn.textContent = "Sound is Playing...";
    convertBtn.disabled = true; // Disable the button to prevent multiple clicks

    // When the speech starts
    newUtter.onstart = () => {
        convertBtn.textContent = "Sound is Playing...";
    };

    // When the speech ends
    newUtter.onend = () => {
        convertBtn.textContent = "Play Converted Sound";
        convertBtn.disabled = false; // Re-enable the button
    };

    // Handle errors
    newUtter.onerror = (event) => {
        error.textContent = `An error occurred: ${event.error}`;
        convertBtn.textContent = "Play Converted Sound";
        convertBtn.disabled = false; // Re-enable the button
    };

    // Speak the utterance
    speechSynth.speak(newUtter);
});
