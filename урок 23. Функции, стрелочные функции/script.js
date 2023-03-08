'use strict';
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello world'); // запуск 
console.log(num);

function calc(a, b) {
    return (a / b);
}
console.log(calc(3,3));


function ret() {
    let num = 40;

    return (num);
}

let anotherNum = ret (); 
console.log(anotherNum); 

const logger = (a, b) => { return (a + b)};

console.log(logger(55, 3));