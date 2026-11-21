let x = 32;
console.log(x.toString(2));
console.log(x.toString(8));
console.log(x.toString(16));

let y = 2 / 0;
console.log(y, typeof y);

let z = NaN;
console.log(z, typeof z);

console.log(Number.isNaN(z));

console.log(2 / "2");
console.log(2 / "two");
// cosole.log(2 / true);
console.log(2 * "2");
console.log(2 - "2");
console.log(2 + 3 + "4");