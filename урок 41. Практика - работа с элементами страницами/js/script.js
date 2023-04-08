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
const interList = document.querySelectorAll('.promo__interactive-item');


//1------
adv.forEach(item => {
    item.remove();
})


//2------
promoGenre.innerHTML = 'драма';

//3------
bg.style.backgroundImage = `url(http://127.0.0.1:5500/JS-REACT_Udemy/%D1%83%D1%80%D0%BE%D0%BA%2041.%20%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%20-%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D1%81%20%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%D0%BC%D0%B8/img/bg.jpg)`

//4------
console.log(interList)

console.log(movieDB.movies.sort())

