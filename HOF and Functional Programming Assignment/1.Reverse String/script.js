let input = "EVIL";
document.write(`String is : ${input}`)
setTimeout(() => {
    document.write(`Reversed String is : ${input.split('').reverse().join('')}`);
}, 2000);