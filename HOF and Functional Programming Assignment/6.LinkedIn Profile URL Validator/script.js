const linkedinUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
checkUrls = (url) => linkedinUrlPattern.test(url);

const linkedinURLs = [
    "https://www.linkedin.com/in/amankardam123",
    "https://www.linkedin.com/in/harsh456",
    "https://www.linkedin.com/in/username-with-many-digits-1234567890",
    "https://www.linkedin.com/in/user_name_with_underscores_and_hyphens-123",
    "https://www.linkedin.com/in/short",
    "https://www.linkedin.com/in/invalid/",
    "https://www.linkedin.com/not/in/valid-profile",
];

linkedinURLs.forEach(url => {
    if (checkUrls(url)) {
        console.log(`${url} : is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} : is not a valid LinkedIn profile URL.`);
    }
});






