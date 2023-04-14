'use strict';

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2222',
    showMyPublickData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

// Object.defineProperty(user, 'birthday', {value: prompt('Data?', ""), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'))

// Object.defineProperty(user, 'name', {writable: false});

// Object.defineProperty(user, 'showMyPublickData', {enumerable: false});



for(let key in user) {
    console.log(key)
}
console.log(Object.getOwnPropertyDescriptor(user, birthday))

// writable
// enumerable
// configurable

//------------------------------------------------------------------

// console.log(Object.keys(user))

// console.log(Object.values(user))

// console.log(Object.entries(user))

