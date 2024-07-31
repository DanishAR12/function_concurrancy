/*
promises =>
            states
           panding
           fulfil/resolve => .then()
           reject         => .catch()
                             .finnaly() promises resolve ho ya reject finally na chalna ha.
*/
//  for promises panding
const promise = new Promise((resolve, reject) => { });
console.log(promise); // result <panding>
// for promises fulfill/resolve
const promise1 = new Promise((resolve, reject) => {
    resolve('success!!!');
});
promise1.then((value) => {
    console.log(value);
});
// for promises reject
const promise2 = new Promise((resolve, reject) => {
    reject('failure!!!');
});
promise2.catch((error) => {
    console.log(error);
});
// for promises dynamic behaviour / methood chaning
const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Money returned');
        //reject('Money not returned');
    }, 3000);
});
returnMoney.then((value) => {
    console.log(value);
    console.log('Thank you for returning money.');
}).catch((value) => {
    console.log(value);
    console.log("Sorry, I'm unable to return money.");
}).finally(() => {
    console.log("Ainda paisa nahi donga!");
});
// promise method for washing machine.
function washing() {
    console.log("Washing starting...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing done!");
        }, 5000);
    });
}
function socking() {
    console.log("Socking starting...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Socking done!");
        }, 3000);
    });
}
function drying() {
    console.log("Drying starting...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying done!");
        }, 2000);
    });
}
washing()
    .then((value) => {
    console.log(value);
    return socking();
})
    .then((value) => {
    console.log(value);
    return drying();
})
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
    console.log("My work is completed!");
});
export {};
