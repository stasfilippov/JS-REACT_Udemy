
'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length)

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let j in options[key]) {
            console.log(`Свойство ${j} имеет значение ${options[key][j]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter)


