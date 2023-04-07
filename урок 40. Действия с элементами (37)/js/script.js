'use strict';

const box = document.getElementById('box'); 

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart') 

const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue'; // является инлайн стилями 
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`

btns[1].style.borderRadius = '100px'

circles[0].style.backgroundColor = 'red' // будет ошибка если не указать индекс

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue' 
// }

hearts.forEach (item => {
    item.style.backgroundColor = 'black'
})

