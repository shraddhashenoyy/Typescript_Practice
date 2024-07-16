// interface(Used to define the structure of Objects)
// 1.Example-1
export{}
interface Person{
    firstName:string,
    lastName:string,
    age:number
}

let student:Person={
    firstName:"Niveditha",
    lastName:"Kamath",
    age:44,
}
console.log(`The FirstName of a person is ${student.firstName}`);
console.log(`The LastName of a person is ${student.lastName}`);
console.log(`The Age of a person is ${student.age}`);


