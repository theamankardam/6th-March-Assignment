let second = 3;
let timer = setInterval(() => {
    document.getElementById('second').innerHTML = (`Random Number Generated in ${second--} Second`);
    if (second == -1) clearInterval(timer);
}, 900);

setTimeout(() => {
    let randomNumber = Math.floor((Math.random() * 100) + 1);
    document.getElementById('num').innerHTML = (`Random Number is : ${randomNumber}`)
}, 3100);