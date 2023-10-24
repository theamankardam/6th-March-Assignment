const urlPattern = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;
checkUrl = (url) => urlPattern.test(url);

const urls = [
    'https://www.google.com',
    'http://www.HelloWorld.com',
    'ftp://invalid.url',
    'html://css.com',
    'https://www.facebook.com'
];

urls.forEach(url => {
    if (checkUrl(url)) {
        console.log(`${url} : is valid urL`);
    } else {
        console.log(`${url} : is not a valid url`);
    }
});