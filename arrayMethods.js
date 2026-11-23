const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("The length of the array is:" + num.length);

let text = num.toString();
console.log(text);
let n = num.at(2);
console.log(n);

console.log(num.pop());
console.log(num.push(9));
console.log(num.shift());
console.log(num.unshift(0));

console.log(Array.isArray(num));

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

const fruits = ['apple', 'banana', 'cherry', 'jackfruit', 'watermelon', 'lichie'];
console.log(fruits.copyWithin(2, 0, 2));

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

console.log(fruits.splice(2, 0, 'lemon', 'kiwi'));
fruits.splice(0, 1);
console.log(fruits);

const months = ['jan', 'feb', 'mar', 'april'];
const newMonths = months.toSpliced(0, 1);
console.log(months);
console.log(newMonths);

const fNames = ['John', 'Augie', 'Ollie', 'Alice'];
const BfNames = fNames.slice(2);
const OfNames = fNames.slice(0, 2);
console.log(BfNames);
console.log(OfNames);