const items = {
    item1: 3,
    item2: 5,
    item3: 2,
    item4: 1,
    item5: 8
}

let INR = new Map(Object.entries(items));
for (const [key, value] of INR) {
    INR.set(key, value * 80);
}

const newObj = Object.fromEntries(INR);
console.log(newObj);


