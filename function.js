"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
// Example-1(Add Two numbers)
function add(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    return a + b;
}
console.log(add());
// Example-2(Checking Temperature)
function temperature(num) {
    if (num === void 0) { num = 30; }
    if (num > 30) {
        console.log("Temperature is not normal");
    }
    else {
        console.log("Temperature is Managable");
    }
}
// console.log(temperature(25));
console.log(temperature(100));
// Example-3(Sum of numbers)
function sum(n) {
    if (n === void 0) { n = 5; }
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sum());
// Example-4(Factorial of numbers)
function factorial(n1) {
    if (n1 === void 0) { n1 = 5; }
    var fact = 1;
    for (var j = 1; j <= n1; j++) {
        fact = fact * j;
    }
    return fact;
}
console.log(factorial());
// Example-5(Multiplication Table)
console.log("The Multiplication table are:");
function Multiplication(n1) {
    if (n1 === void 0) { n1 = 10; }
    var multi;
    for (var i = 1; i <= 10; i++) {
        multi = n1 * i;
        console.log("".concat(n1, "*").concat(i, "=").concat(multi));
    }
}
var result = Multiplication();
console.log(result);
