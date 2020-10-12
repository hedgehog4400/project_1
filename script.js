// 'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько  фильмов вы уже посмотрели?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Сколько  фильмов вы уже посмотрели?', '');
    }

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


function rememberMyFilms() {
    for (i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }

    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

rememberMyFilms();

showMyDB();

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов')
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман')
    } else {
        alert('Произошла ошибка')
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (i = 1; i <= 3; i++) {
        personalMovieDB.geners[i-1]= prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();