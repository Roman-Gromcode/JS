const m = 10;
const n = 20;
let result = 1;
let x = m;

do {
	if (x % 2 === 1) {
		result *= x;
	}
	x++;
} while (x <= n);

console.log('Result: ' + result);