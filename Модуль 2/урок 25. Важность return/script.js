'use strict';

const usdCurr = 50;
const discont = 0.9;

function convert (amount, curr) {
    return(curr * amount);
} 

function promotion (result) {
    console.log(result * discont);
}

promotion (convert(500, usdCurr));

function test () {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

test();