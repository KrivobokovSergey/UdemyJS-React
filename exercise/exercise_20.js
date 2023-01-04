/* Задачи:

1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет 
принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые 
товары/фильмы/сериалы...

2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая 
содержит названия фильмов через запятую.

Пример:

showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, 
но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

Пример:

setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   
{ name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет 
проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие 
должно выполняться, если мы передаем checkFilms(tranformedArray); :)

P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, 
что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах. */

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating > 7);
}

function showListOfFilms(arr) {
    return arr.map(film => film.name)
    .reduce((sum, current) => `${sum}, ${current}`);
}


function setFilmsIds(arr) {
    arr.forEach((film, i) => {
        film.id = i;
    });
    return arr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => typeof(film.id) == 'number');
}
