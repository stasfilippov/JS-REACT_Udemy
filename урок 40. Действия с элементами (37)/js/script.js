'use strict';

const box = document.getElementById('box'); 
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = wrapper.querySelectorAll('.heart') 
const oneHeart = wrapper.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue'; // является инлайн стилями 
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`

btns[1].style.borderRadius = '100px'

circles[0].style.backgroundColor = 'red' // будет ошибка если не указать индекс

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue' 
// }

hearts.forEach (item => {
    item.style.backgroundColor = 'blue';
})

const div = document.createElement('div');

const text = document.createTextNode('Тут был я');  

div.classList.add('black')

document.body.append(div);

div.innerHTML = '<h1>Hello world</h1>';
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>') // помогает вставить html - структуру 
// div.textContent = 'Hello'; // только текст  не дает ломать верстку или ввести сторонний скрипт

// wrapper.append(div);// добавляет элемент в конец hjlbntkz
// wrapper.appendChild(div)  //--старый вариант

// wrapper.prepend(div);
// hearts[0].before(div);  
// hearts[0].after(div)
// wrapper.insertBefore(div, hearts[0]) //--старый вариант


// circles[1].remove();
// wrapper.removeChild(hearts[1])  //--старый вариант

// hearts[0].replaceWith(circles[0])
wrapper.replaceChild(circles[0], hearts[1])   //--старый вариант
