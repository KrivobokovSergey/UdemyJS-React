let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
let scoreFilm = prompt('На сколько оцените его', '');

personalMovieDB.movies[oneOfLastFilms] = scoreFilm;

oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
scoreFilm = prompt('На сколько оцените его', '');

personalMovieDB.movies[oneOfLastFilms] = scoreFilm;

console.log(personalMovieDB);
