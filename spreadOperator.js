// ... spread operator splits an iterable into individual elements
let text = '12345';
let min = Math.min(...text);
let max = Math.max(...text);
console.log(`Minimum: ${min}, Maximum: ${max}`);
