// Function to generate a random number
function generateRandomNumber() {
    var min = 1;
    var max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display progress indication
function displayProgress(secondsRemaining) {
    document.getElementById('progress').innerText = 'Generating random number in ' + secondsRemaining + ' seconds...';
}

// Delay function using setTimeout
function delayRandomNumberGeneration(delay) {
    var secondsRemaining = delay;
    var timer = setInterval(function () {
        displayProgress(secondsRemaining);
        secondsRemaining--;
        if (secondsRemaining < 0) {
            clearInterval(timer);
            var randomNumber = generateRandomNumber();
            document.getElementById('output').innerText = 'Random number: ' + randomNumber;
        }
    }, 1000);
}
