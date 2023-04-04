'use strict';

const str = prompt('', '');
const products = str.split(', ');
products.sort(compareNum);
console.log(products);

function compareNum (a, b) {
    return a - b;
}

const arr = [1, 2, 3, 4, 5, 6]



arr.pop()

arr.push(10)

arr.forEach(function (item, i) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
})

// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

for (let value of arr) {
    console.log(value)
}

