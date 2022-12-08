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

//document.querySelectorAll('.promo__adv')[0].remove(); my decision
document.querySelectorAll('.promo__adv img').forEach(item => item.remove()); //perfect decision
document.querySelectorAll('.promo__genre')[0].textContent = 'драма';
document.querySelectorAll('.promo__bg')[0].style.background = 'url("img/bg.jpg") center 20%';
document.querySelectorAll('.promo__interactive-item').forEach((item, i) => {
    item.textContent = `${movieDB.movies[i]}`;
    item.style.display = 'list-item';
});
document.querySelectorAll('.promo__interactive-list')[0].style.listStyleType = 'decimal';
