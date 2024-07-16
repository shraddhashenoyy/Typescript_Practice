// functions

export{}
// Example-1(Add Two numbers)
function add(a:number=10,b:number=20):number{
    return a+b;
}
console.log(add());

// Example-2(Checking Temperature)
function temperature(num:number=30){
    if(num>30){
        console.log("Temperature is not normal");
    }
    else{
        console.log("Temperature is Managable");
    }
}
// console.log(temperature(25));
console.log(temperature(100));


// Example-3(Sum of numbers)
function sum(n:number=5){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sum());

// Example-4(Factorial of numbers)
function factorial(n1:number=5){
    let fact=1;
    for(let j=1;j<=n1;j++){
        fact=fact*j;
    }
    return fact;
}
console.log(factorial());


// Example-5(Multiplication Table)
console.log("The Multiplication table are:")
function Multiplication(n1:number=10){
    let multi;
    for(let i=1;i<=10;i++){
        multi=n1*i;
        console.log(`${n1}*${i}=${multi}`);
    }
}
let result=Multiplication();
console.log(result);



