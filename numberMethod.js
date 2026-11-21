let x = 123;
console.log(x.toString(2));


let y = 2.123456;
console.log(y.toFixed(2));
console.log(y.toExponential());
console.log(y.toPrecision(3));

let z = "12.34";
console.log(Number(z));

console.log(parseInt(z));
console.log(parseFloat(z));

console.log(Number.isInteger(z));
console.log(Number.isNaN("Nuha"));
console.log(Number.isFinite(2 / 0));