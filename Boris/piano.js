const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const pianoKeys = [
    { key: 'C4', frequency: 261.63, black: false, qwerty: 'q' },
    { key: 'C#4', frequency: 277.18, black: true, qwerty: 'a' },
    { key: 'D4', frequency: 293.66, black: false, qwerty: 'z' },
    { key: 'D#4', frequency: 311.13, black: true, qwerty: 'w' },
    { key: 'E4', frequency: 329.63, black: false, qwerty: 's' },
    { key: 'F4', frequency: 349.23, black: false, qwerty: 'x' },
    { key: 'F#4', frequency: 369.99, black: true, qwerty: 'e' },
    { key: 'G4', frequency: 392.00, black: false, qwerty: 'd' },
    { key: 'G#4', frequency: 415.30, black: true, qwerty: 'c' },
    { key: 'A4', frequency: 440.00, black: false, qwerty: 'r' },
    { key: 'A#4', frequency: 466.16, black: true, qwerty: 'f' },
    { key: 'B4', frequency: 493.88, black: false, qwerty: 'v' },
    { key: 'C5', frequency: 523.25, black: false, qwerty: 't' },
    { key: 'C#5', frequency: 554.37, black: true, qwerty: 'g' },
    { key: 'D5', frequency: 587.33, black: false, qwerty: 'b' },
    { key: 'D#5', frequency: 622.25, black: true, qwerty: 'y' },
    { key: 'E5', frequency: 659.25, black: false, qwerty: 'h' },
    { key: 'F5', frequency: 698.46, black: false, qwerty: 'n' },
    { key: 'F#5', frequency: 739.99, black: true, qwerty: 'u' },
    { key: 'G5', frequency: 783.99, black: false, qwerty: 'j' },
    { key: 'G#5', frequency: 830.61, black: true, qwerty: 'm' },
    { key: 'A5', frequency: 880.00, black: false, qwerty: 'i' },
    { key: 'A#5', frequency: 932.33, black: true, qwerty: 'k' },
    { key: 'B5', frequency: 987.77, black: false, qwerty: ',' },
    { key: 'C6', frequency: 1046.50, black: false, qwerty: 'o' },
    { key: 'C#6', frequency: 1108.73, black: true, qwerty: 'l' },
    { key: 'D6', frequency: 1174.66, black: false, qwerty: '.' },
    { key: 'D#6', frequency: 1244.51, black: true, qwerty: 'p' },
    { key: 'E6', frequency: 1318.51, black: false, qwerty: ';' },
    { key: 'F6', frequency: 1396.91, black: false, qwerty: '/' },
    { key: 'F#6', frequency: 1479.98, black: true, qwerty: '[' },
    { key: 'G6', frequency: 1567.98, black: false, qwerty: '\'' },
    { key: 'G#6', frequency: 1661.22, black: true, qwerty: ']' }
];
const activeOscillators = new Map();
const keyElements = new Map();
function createPiano() {
    const piano = document.getElementById('piano');
    pianoKeys.forEach((keyData) => {
        const keyElement = document.createElement('div');
        keyElement.className = `piano-key ${keyData.black ? 'black' : 'white'}`;
        keyElement.innerHTML = `<span class="key-label">${keyData.qwerty.toUpperCase()}</span>`;
        keyElement.dataset.frequency = keyData.frequency;
        keyElement.dataset.qwerty = keyData.qwerty;
        keyElement.addEventListener('mousedown', () => playKey(keyData.frequency, keyElement));
        keyElement.addEventListener('mouseup', () => stopKey(keyData.frequency, keyElement));
        keyElement.addEventListener('mouseleave', () => stopKey(keyData.frequency, keyElement));
        piano.appendChild(keyElement);
        keyElements.set(keyData.qwerty, keyElement);
    });
}
function playKey(frequency, element) {
    if (activeOscillators.has(frequency)) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.3;
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    activeOscillators.set(frequency, { oscillator, gainNode });
    element.classList.add('active');
}
function stopKey(frequency, element) {
    const osc = activeOscillators.get(frequency);
    if (osc) {
        osc.oscillator.stop();
        activeOscillators.delete(frequency);
    }
    element.classList.remove('active');
}
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const keyData = pianoKeys.find(k => k.qwerty === key);
    if (keyData) {
        e.preventDefault();
        const element = keyElements.get(key);
        if (element && !activeOscillators.has(keyData.frequency)) {
            playKey(keyData.frequency, element);
        }
    }
});
document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    const keyData = pianoKeys.find(k => k.qwerty === key);
    if (keyData) {
        e.preventDefault();
        const element = keyElements.get(key);
        if (element) {
            stopKey(keyData.frequency, element);
        }
    }
});
createPiano();