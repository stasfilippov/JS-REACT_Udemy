/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ' ').trim();
            const b = prompt('На сколько оцените его?', ' ');
    
            if (a != null && b != null && a != '' && b != '' && a != a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },
    writeYourGenres: function () {
        again: for (let i = 0; i <= 2; ) {
            const favoriteGenres = prompt (`Ваш любимый жанр под номером ${i + 1}`, 'Название фильма')
            if (favoriteGenres === null || favoriteGenres === '') {
                continue again;
            } 
            personalMovieDB.genres[i] = favoriteGenres;
            i++
        }
        personalMovieDB.genres.forEach(Element => {
            console.log(`Любимый жанр №${personalMovieDB.genres.indexOf(Element) + 1} - это ${Element}`);
        })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            return personalMovieDB.privat = false;
        } else {
            return personalMovieDB.privat = true;
        }
    },
    showMyDB: function (arr) {
        if (arr) {
            return;
        }
        console.log (personalMovieDB);
    }
}


console.log(personalMovieDB.count)

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB (personalMovieDB.privat);

