'use strict'

// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger
// }

// number = 6; debugger

// logNumber(); //6

// number = 9; debugger

// logNumber(); //6

function createCounter() {
    let counter = 0;

    const myFunction = function () {debugger
        counter = counter + 1; debugger // сохраняет ссылки, которые ей были доступны на момент создания, даже после удаления логического окружения
        return counter;debugger
    }

    return myFunction;
}
debugger
const increment = createCounter();debugger//по сути вызываем функцию myFunction()
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);
