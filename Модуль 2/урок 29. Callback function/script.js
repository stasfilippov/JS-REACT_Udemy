
'use strict';

function first () {
    // Do something

    setTimeout (function() {
        console.log(1)
    }, 500);
}

function second () {
    console.log(2)
}

first();
second();


function learnJS (length, callback) {
    console.log (`Я учу: ${length}`);
    callback();
}

function done () {
    console.log('Я прошел этот урок');
}

learnJS ('JavaScript', done)
