console.log('text' || false);
console.log(true || "text");
console.log(undefined || null || 0 || '' || 0);

const customAmount = null;
const defaultAmount = 17;
const amount = customAmount || defaultAmount;
console.log(amount);

const cAmount = 1;
const amount1 = cAmount || defaultAmount;
console.log(amount1);

console.log(!true);
console.log(!false);
console.log(!'text');
console.log(!!"text");
console.log(Boolean("text"));
