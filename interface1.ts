// Example-2 (Using Array)
export{}
interface Person{
    firstName:string,
    lastName:string,
    age:number,
    email:string,
}

var person:Person[]=[
   { firstName:"Niveditha",lastName:"shetty",age:25,email:"nivedithashetty01@gmail.com"},
    {firstName:"Navya",lastName:"shetty",age:24,email:"NavyaShetty06@gmail.com"},
    {firstName:"Namratha",lastName:"pai",age:18,email:"Namrathapai99@gmail.com"},
];

function displayPeople(person:Person[]){
    person.forEach((person, index) => {
        console.log(`Person ${index + 1}:`);
        console.log(`First Name: ${person.firstName}`);
        console.log(`Last Name: ${person.lastName}`);
        console.log(`Age: ${person.age}`);
        console.log(`Email: ${person.email}`);
        console.log("-------------------");
    });
}
displayPeople(person);