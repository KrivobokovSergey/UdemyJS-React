'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let oneOfLastFilms;
let scoreFilm;

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 20) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 20) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
    while (oneOfLastFilms == null || oneOfLastFilms.length < 1 || oneOfLastFilms.length > 50) {
        if (oneOfLastFilms == null || oneOfLastFilms.length < 1) {
            alert('Пожалуйства, введите название фильма');
            oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
        } else if (oneOfLastFilms.length > 50) {
            alert('Слишком длинное название');
            oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
        }
    }
    scoreFilm = prompt('На сколько оцените его', '');
    while (scoreFilm == null || scoreFilm.length < 1 || scoreFilm.length > 3) {
        if (scoreFilm == null || scoreFilm.length < 1) {
            alert('Пожалуйства, введите оценку фильма');
            scoreFilm = prompt('На сколько оцените его', '');
        } else if (scoreFilm.length > 3) {
            alert('Слишком большая цифра');
             scoreFilm = prompt('На сколько оцените его', '');
        }
    }
    personalMovieDB.movies[oneOfLastFilms] = scoreFilm;
}

console.log(personalMovieDB);


/* perfect solution */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); */
