'use strict';

const arr = ['Alex', 'Ann', 'Oleg', 'Alex', 'Pavel', 'Oleg']

// const set = new Set (arr);

// set.add('Pavel')
// set.add('Oleg')
// set.has('Ann')
// set.clear()
// set.size

function unique (arr) {
    return Array.from(new Set (arr));
}

console.log(unique(arr))

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain)
// })

// function unique (arr) {
//     return Array.from(new Set (arr));
// }


