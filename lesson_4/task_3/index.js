let result = 1;

for (let m = 10; m <= 20; m++) {
    if (m % 2 === 1) {
    result *= m;
}
}

console.log('Result: ' + result);