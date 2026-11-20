let str = "Hello, World! Welcome to JavaScript.";

// Extracting characters from a string using different methods
let c1 = str.charAt(4);
let c2 = str.at(-1);
let c3 = str.charCodeAt(0);
let c4 = str.codePointAt(0);
let c5 = str[7];
console.log(`Character at index 4: ${c1}`);
console.log(`Character at last index: ${c2}`);
console.log(`Character code at index 0: ${c3}`);
console.log(`Code point at index 0: ${c4}`);
console.log(`Character at index 7 using bracket notation: ${c5}`);

let text = "JavaScript is fun!";
let sliced = text.slice(0, 10);
console.log(`Sliced string: ${sliced}`);
let substringed = text.substring(0, 10);
console.log(`Substringed string: ${substringed}`);
let substr = text.substr(0, 10);
console.log(`Substr string: ${substr}`);

let str1 = "Hello";
let str2 = "World";
let concatenated = str1.concat(" ", str2);
console.log(`Concatenated string: ${concatenated}`);

let str3 = "JavaScript";
let replaced = str3.replace("Java", "Type");
console.log(`Replaced string: ${replaced}`);

let str4 = "JavaScript is awesome!";
let upper = str4.toUpperCase();
let lower = str4.toLowerCase();
console.log(`Uppercase: ${upper}`);
console.log(`Lowercase: ${lower}`);

let str5 = "   JavaScript   ";
let trimmed = str5.trim();
console.log(`Trimmed string: '${trimmed}'`);

let str6 = "JavaScript is fun!";
let includesCheck = str6.includes("fun");
console.log(`Does the string include 'fun'? ${includesCheck}`);

let str7 = "JavaScript is fun!";
let startsWithCheck = str7.startsWith("Java");
let endsWithCheck = str7.endsWith("fun!");
console.log(`Does the string start with 'Java'? ${startsWithCheck}`);
console.log(`Does the string end with 'fun!'? ${endsWithCheck}`);

let str8 = "JavaScript is fun!";
let splitArray = str8.split(" ");
console.log(`Split string into array: ${splitArray}`);

