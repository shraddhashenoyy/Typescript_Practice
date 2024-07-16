// class(Typescript)
// Example-1
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
//Defining the data regarding "Person"
var person1 = new Person("Shraddha", "shenoy", 33);
console.log("The First Name is ".concat(person1.firstName));
console.log("The last Name is ".concat(person1.lastName, " "));
console.log("The Age of above person ".concat(person1.age));
console.log("Done with the information");
// Example-2
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("Car: ".concat(this.year, " ").concat(this.brand, " ").concat(this.model));
    };
    return Car;
}());
var car1 = new Car("Toyato", "XXXX", 2099);
var car2 = new Car("Honda", "YYY", 8888);
car1.displayInfo();
car2.displayInfo();
