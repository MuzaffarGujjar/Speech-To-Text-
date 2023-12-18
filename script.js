document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const result = document.getElementById('result');
    const resultContainer = document.getElementById('result-container');

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    startBtn.addEventListener('click', function () {
        startBtn.textContent = 'Listening...';
        recognition.start();
    });

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        result.textContent = transcript;
    };

    recognition.onend = function () {
        startBtn.textContent = 'Start Recording';
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
        startBtn.textContent = 'Start Recording';
    };

    recognition.onaudiostart = function () {
        resultContainer.classList.add('active');
    };

    recognition.onaudioend = function () {
        resultContainer.classList.remove('active');
    };
});
