// class(Typescript)
// Example-1
class Person{
    firstName:string;
    lastName:string;
    age:number;


constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
}

//Defining the data regarding "Person"
let person1=new Person("Shraddha","shenoy",33);

console.log(`The First Name is ${person1.firstName}`);
console.log(`The last Name is ${person1.lastName} `);
console.log(`The Age of above person ${person1.age}`);
console.log("Done with the information");

// Example-2
class Car{
    brand:string;
    model:string;
    year:number;


constructor(brand:string,model:string,year:number){
    this.brand=brand;
    this.model=model;
    this.year=year;
}

displayInfo(){
    console.log(`Car: ${this.year} ${this.brand} ${this.model}`)

}
}

let car1=new Car("Toyato","XXXX",2099);
let car2=new Car("Honda","YYY",8888);
car1.displayInfo();
car2.displayInfo();
