// Function to validate URL using regex
function validateURL(url) {
    var regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
    return regex.test(url);
}

// Example URLs to test
var urls = [
    'http://www.example.com',
    'https://www.example.com',
    'http://example.com',
    'https://example.com',
    'ftp://example.com',
    'http://www.example',
    'http://www.example.',
    'http://www.example123.com',
];

// Check if the URLs are valid and display the results
urls.forEach(function (url) {
    var isValid = validateURL(url);
    if (isValid) {
        console.log(url + ' is a valid URL.');
    } else {
        console.log(url + ' is not a valid URL.');
    }
});
