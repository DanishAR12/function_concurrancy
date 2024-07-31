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
function sum(x: number, y: number): number {
  return x + y;
}
let result: number = sum(55, 45);
console.log(result);

function getTime(): number {
  return new Date().getTime();
}
let dateTime: number = getTime();
console.log(dateTime);

// void types
function printHello(): void {
  console.log("Hello!");
}
printHello();
// anonymous function/ without names
let myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log(myAdd(35, 15));

// function with explicit type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
console.log(myAdd2(10, 15));

//arrow function/ lamda funtion
let myAdd3 = (a: number, b: number) => a + b;
console.log(myAdd3(5, 5));

// optional parameter
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let result1: string = buildName("danish"); // second parameter answer undefined
let result2: string = buildName("danish", "Ali");
//let result3:string = buildName("danish","Ali","Ahmed")     // error
console.log(result1);
console.log(result2);

function add(a: number, b: number, c?: number): number {
  return a + b + (c || 1);
}
let sumTotal: number = add(5, 3);
console.log(sumTotal); // result 9  c is undefined || 1

// Default parameter
function buildName3(firstName: string, lastName: string = "khan"): string {
  return firstName + " " + lastName;
}
console.log(buildName3("Danish")); // Danish khan
console.log(buildName3("Danish", "ali")); // Danish ali

let buildName4: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = "khan"
): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
};
console.log(buildName4("Danish"));

function pow(value: number, exponent: number = 2): number {
  return value ** exponent;
}
let resultPower: number = pow(2);
console.log(resultPower); // 2 ki power 2 = 4

// named parameter
function divide({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}): number {
  return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 })); // result 5

// rest parameter
function buildName1(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName;
}
let empolyeName: string = buildName1("Danish", "Ali", "asad", "amir", "asif");
console.log(empolyeName);

function add4(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add4(10, 10, 10, 5, 5));

// type alias
type Negate = (value: number) => number;

let negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10)); // -10

// temparature convert ferhniet to celcias
function temparature(ferhniet: number): number {
  return (5 / 9) * (ferhniet - 32);
}
let ferhnietToCelcius: number = temparature(100);
console.log(ferhnietToCelcius);
