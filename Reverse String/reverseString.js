// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
}

// Delay function using setTimeout
function delayReverseString() {
    var input = document.getElementById('inputString').value;
    setTimeout(function () {
        var reversedString = reverseString(input);
        document.getElementById('output').innerText = reversedString;
    }, 2000);
}
