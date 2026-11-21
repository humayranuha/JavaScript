let text = "JavaScript is a versatile language. JavaScript can be used for both front-end and back-end developement. JavaScript is with many frameworks and libraries.";
let searchTerm = "JavaScript";
let isThere = text.includes(searchTerm);
console.log(`Is the term "${searchTerm}" present in the text? ${isThere}`);

let firstIndex = text.indexOf(searchTerm);
let lastIndex = text.lastIndexOf(searchTerm);
console.log(`First occurrence of "${searchTerm}" is at index: ${firstIndex}`);
console.log(`Last occurrence of "${searchTerm}" is at index: ${lastIndex}`);

let myArr = text.match(/Script/gi);
console.log(`All occurrences of "Script" in the text: ${myArr}`);

let startsWithCheck = text.startsWith("JavaScript");
let endsWithCheck = text.endsWith("libraries.");
console.log(`Does the text start with "JavaScript"? ${startsWithCheck}`);
console.log(`Does the text end with "libraries."? ${endsWithCheck}`);
