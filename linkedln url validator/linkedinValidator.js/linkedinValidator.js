// Function to validate LinkedIn profile URL using regex
function validateLinkedInURL(url) {
    var regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return regex.test(url);
}

// Example LinkedIn profile URLs to test
var profileURLs = [
    'https://www.linkedin.com/in/john-doe',
    'https://www.linkedin.com/in/jane_smith123',
    'https://www.linkedin.com/in/jo',
    'https://www.linkedin.com/in/john-doe!',
    'https://www.linkedin.com/in/john_doe_',
    'https://www.linkedin.com/in/john_doe-12345',
];

// Check if the LinkedIn profile URLs are valid and display the results
profileURLs.forEach(function (url) {
    var isValid = validateLinkedInURL(url);
    if (isValid) {
        console.log(url + ' is a valid LinkedIn profile URL.');
    } else {
        console.log(url + ' is not a valid LinkedIn profile URL.');
    }
});
