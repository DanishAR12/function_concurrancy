//   CALlBACK FUNCTION
function parentFunction(func) {
    console.log("I'm a parent function");
    func(); //callback function ka invoke hamara pass nahi hota parent ka pass ha.
}
function childFunction() {
    console.log("I'm a child function");
}
parentFunction(childFunction); //function ka argument ma function pass ho callback function hota ha.
// nested function fuction ka under function banana .
// callback func parameter ma func pass karna.
function processUserInput(callback) {
    let name = "Danish";
    callback(name);
}
processUserInput(function (name) {
    console.log("Hello," + name);
});
console.log("one");
setTimeout(function () {
    console.log("Hello World!");
}, 2000);
console.log("two");
function greet() {
    console.log("Hello Danish");
}
setTimeout(greet, 3000);
//    courncurrancy using callback/ async
function washing(callback) {
    console.log("washing starting...");
    setTimeout(() => {
        console.log("washing done!");
        callback();
    }, 5000);
}
function socking(callback) {
    console.log("socking stating...");
    setTimeout(() => {
        console.log("socking done!");
        callback();
    }, 3000);
}
function drying() {
    console.log("drying starting...");
    setTimeout(() => {
        console.log("drying done!");
    }, 2000);
}
console.log("foalding lundary");
washing(() => {
    socking(() => {
        drying();
    });
});
console.log("I'm making biryani.");
export {};
