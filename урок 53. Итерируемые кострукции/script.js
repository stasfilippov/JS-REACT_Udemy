'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2222',
    showMyPublickData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

for (let key in user) {
    console.log(user[key]);
}

const arr = ['b', 'a', 'c']
Array.prototype.someMethod = function () {};

console.dir(arr)

for (let key of arr) {
    console.log(key);
}

const str = 'string'

for (let key of str) {
    console.log(key);
}

const salaries = {
    john: 500,
    ivan: 250,
    ann: 5000,
    sayHello: function () {
        console.log('Hello world')
    }
}

salaries[Symbol.iterator] = function () {
    return {
        current: this.ivan,
        last: this.ann,
        
        next () {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
}

for (let res of salaries) {
    console.log (res)
}