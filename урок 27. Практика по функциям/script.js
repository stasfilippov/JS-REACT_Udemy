/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
// 1ая часть 
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
    
    
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms () {
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
}

// rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert ('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert ('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert ('Вы киноман');
    } else {
        alert ('Произошла ошибка');
    }
}

// detectPersonalLevel ();

function writeYourGenres () {
    again: for (let i = 0; i <= 2; ) {
        const favoriteGenres = prompt (`Ваш любимый жанр под номером ${i + 1}`, 'Название фильма')
        if (favoriteGenres === null || favoriteGenres === '') {
            continue again;
        } 
        personalMovieDB.genres[i] = favoriteGenres;
        i++
    }
}

writeYourGenres ();

function showMyDB (arr) {
    if (arr) {
        return;
    }
    console.log (personalMovieDB);
}

// вариант ответа с урока
/* function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
} */

showMyDB (personalMovieDB.privat);


// Код возьмите из предыдущего домашнего задания