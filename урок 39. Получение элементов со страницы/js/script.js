'use strict';

const box = document.getElementById('box'); 
console.log(box)

const btns = document.getElementsByTagName('button'); // получили псевдомассив
console.log(btns[1]) // получаем именно второй элемент из коллекции

// если даже при наличии на странице только одного элемента, мы все равно получим коллецию псевдомассива. При получении определнного элемента, несмотря на то, что в коллекции один элемент, мы все равно должны указать индекс необходимо элемента btns[1]

const circles = document.getElementsByClassName('circle');
console.log(circles)

//------------современные методы

const hearts = document.querySelectorAll('.heart') //принимает любой селектор !!! принимает метод forEach()

console.log(hearts)

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart'); //получаем только один селектор, который попал под данное условие
console.log(oneHeart)

const firstBtn = document.querySelector('button')
console.log(firstBtn)