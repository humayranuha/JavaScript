const Person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(Person1.fullName() + " is " + Person1.age + " years old.");

let text1 = "";
for (let x in Person1) {
    text1 += Person1[x] + " ";
}

console.log(text1);

let text2 = "";
let myArray = Object.values(Person1);
text2 = myArray.toString();

console.log(text2);

let text3 = JSON.stringify(Person1);
console.log(text3);


// constructor
function Person(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
}

const p1 = new Person("Humayra", "Nuha", 23);

p1.Nationality = "Bangladeshi";

Person.prototype.Nationality = "Bangladeshi";

const p2 = new Person("Hafiza", "Parvin", 60);

let details = JSON.stringify(p2);
console.log(details);