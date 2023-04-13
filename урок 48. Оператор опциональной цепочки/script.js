'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block)

// console.log(block?.textContent)

// console.log(1 + 2)

const userData = {
	name: 'Ivan',
	age: null,
	say: function () {
		console.log('Hello world')
	}
}
userData.say();
userData.hey?.();

console.log(userData?.skills?.js)