/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const movieList = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('button'),
        checkBox = document.querySelectorAll('input')[2],
        delFun = document.querySelectorAll('.delete');
        

    //document.querySelectorAll('.promo__adv')[0].remove(); my decision
    document.querySelectorAll('.promo__adv img').forEach(item => item.remove()); //perfect decision
    document.querySelectorAll('.promo__genre')[0].textContent = 'драма';
    document.querySelectorAll('.promo__bg')[0].style.background = 'url("img/bg.jpg") center 20%';
    /* document.querySelectorAll('.promo__interactive-item').forEach((item, i) => {
        item.textContent = `${movieDB.movies[i]}`;
        item.style.display = 'list-item';
    }); */


    
    const funF = () => {
        delDel.forEach((item, i) => {
            funFFFF(item,i);
        });
    };
     const funFFFF = (item, i) => {
         item.addEventListener('click', () => {
             movieDB.movies.splice(i, 1);
             movieList.innerHTML = "";
             movieDB.movies.sort();
             movieDB.movies.forEach((film, i) => {
                 movieList.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
             });
             delDel = document.querySelectorAll('.delete');
             funF();
         }); 
    };       
    movieList.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    let delDel = document.querySelectorAll('.delete');
    funF();

    document.querySelectorAll('.promo__interactive-list')[0].style.listStyleType = 'decimal';


    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let inputPage = document.querySelector('.adding__input').value;
        console.log(inputPage);
        if (inputPage == '') {
            return;
        } else {
            if (inputPage.length > 21) {
                inputPage = inputPage.slice(0, 21) + `...`;
            }
            movieDB.movies.push(inputPage);
            movieList.innerHTML = "";
            movieDB.movies.sort();
            movieDB.movies.forEach((film, i) => {
                movieList.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });
            delDel = document.querySelectorAll('.delete');
            funF();
        }
    });
    checkBox.addEventListener('change', () => {
        console.log("Добавляем любимый фильм");
    });
    console.log(checkBox.checked);

});