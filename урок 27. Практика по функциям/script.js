/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let i = 0;
first: while (i >= 0 && i < 2) {
    console.log(i);
    const a = prompt('Один из последних просмотренных фильмов?', ' ');
    const b = prompt('На сколько оцените его?', ' ');
    
    if (a != null && b != null && a != '' && b != '' && a != a.length > 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
        i++;
    } else {
        console.log('Error');
        continue first;
    }
}
// Код возьмите из предыдущего домашнего задания