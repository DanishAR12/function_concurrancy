//         *** FUNCTION ***
/*
1- function has a spesific syntax for typing funtion parameter and return value.
2- function syntax:
- function define following function keyword and name followed by parenthisis ().
- function name can use same as variable rules.
- The paranthiscs may include parameters name seprated by comma.(p1,p2,..).
- The code to be executed by the finction is placed inside curly brackets.{}.
- Why Functions?
  With functions you can reuse code
  You can write code that can be used many times.
  You can use the same code with different arguments, to produce different results.
*/
//  named / normal/ return function
function sum(x, y) {
    return x + y;
}
let result = sum(55, 45);
console.log(result);
function getTime() {
    return new Date().getTime();
}
let dateTime = getTime();
console.log(dateTime);
// void types
function printHello() {
    console.log("Hello!");
}
printHello();
// anonymous function/ without names
let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(35, 15));
// function with explicit type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(10, 15));
//arrow function/ lamda funtion
let myAdd3 = (a, b) => a + b;
console.log(myAdd3(5, 5));
// optional parameter
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let result1 = buildName("danish"); // second parameter answer undefined
let result2 = buildName("danish", "Ali");
//let result3:string = buildName("danish","Ali","Ahmed")     // error
console.log(result1);
console.log(result2);
function add(a, b, c) {
    return a + b + (c || 1);
}
let sumTotal = add(5, 3);
console.log(sumTotal); // result 9  c is undefined || 1
// Default parameter
function buildName3(firstName, lastName = "khan") {
    return firstName + " " + lastName;
}
console.log(buildName3("Danish")); // Danish khan
console.log(buildName3("Danish", "ali")); // Danish ali
let buildName4 = function (firstName, lastName = "khan") {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
console.log(buildName4("Danish"));
function pow(value, exponent = 2) {
    return value ** exponent;
}
let resultPower = pow(2);
console.log(resultPower); // 2 ki power 2 = 4
// named parameter
function divide({ dividend, divisor, }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 })); // result 5
// rest parameter
function buildName1(firstName, ...restOfName) {
    return firstName + " " + restOfName;
}
let empolyeName = buildName1("Danish", "Ali", "asad", "amir", "asif");
console.log(empolyeName);
function add4(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add4(10, 10, 10, 5, 5));
let negateFunction = (value) => value * -1;
console.log(negateFunction(10)); // -10
// temparature convert ferhniet to celcias
function temparature(ferhniet) {
    return (5 / 9) * (ferhniet - 32);
}
let ferhnietToCelcius = temparature(100);
console.log(ferhnietToCelcius);
export {};
