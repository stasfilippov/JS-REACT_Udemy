'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/2222',
    showMyPublickData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

const newMap = new Map (Object.entries(user))

console.log(newMap)

const newUserObject = Object.fromEntries(newMap)
console.log(newUserObject)


// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50},
// ]

// const budget = [5000, 15000, 25000]

// const map = new Map([
//     [{paper: 400}, 8000]
// ]);


// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// })

// console.log(map)

// const good = [];

// for (let shop of map.keys()) {
//     good.push(Object.keys(shop)[0])
// }
// console.log(good)

// for (let price of map.values()) {
//     console.log(price)
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop)
// }