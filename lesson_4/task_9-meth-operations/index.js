const start = 1;
const end = 20;
let result = 0;

for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
        console.log('кратно 5: ' + i);
    } else if (i % 2 === 0 && i % 4 !== 0) {
        result += i;
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;
    }
}