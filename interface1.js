"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = [
    { firstName: "Niveditha", lastName: "shetty", age: 25, email: "nivedithashetty01@gmail.com" },
    { firstName: "Navya", lastName: "shetty", age: 24, email: "NavyaShetty06@gmail.com" },
    { firstName: "Namratha", lastName: "pai", age: 18, email: "Namrathapai99@gmail.com" },
];
function displayPeople(person) {
    person.forEach(function (person, index) {
        console.log("Person ".concat(index + 1, ":"));
        console.log("First Name: ".concat(person.firstName));
        console.log("Last Name: ".concat(person.lastName));
        console.log("Age: ".concat(person.age));
        console.log("Email: ".concat(person.email));
        console.log("-------------------");
    });
}
displayPeople(person);
