/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const promoGenre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');

console.log(movieList)


//1------
adv.forEach(item => {
    item.remove();
})


//2------
promoGenre.textContent = 'драма';

//3------
bg.style.backgroundImage = `url(img/bg.jpg)`

//4------

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${item}
        <div class="delete"></div>
    </li>
    `;
})



//5------
// interList.forEach((item, i) => {
//     item.textContent = `${i + 1}. ${item.textContent}`;
// })