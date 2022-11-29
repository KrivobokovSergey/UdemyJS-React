/* Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном 
формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется 
в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное 
число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки 
на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно 
и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и 
полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если 
один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :) */

// Первая задача
function getTimeFromMinutes(minutes) {
    if (minutes < 0 || !Number.isInteger(minutes) || minutes === '') {
        return `Ошибка, проверьте данные`;
    }
    let singlyMinutes = minutes % 60;
    let singlyHours = Number.parseInt(minutes / 60);
    let hour;
    if (singlyHours === 1) {
        hour = `час`;
    } else if (singlyHours > 1 && singlyHours < 5) {
        hour = `часа`;
    } else if (singlyHours > 4 && singlyHours < 11 || singlyHours === 0) {
        hour = `часов`;
    }
    return `Это ${singlyHours} ${hour} и ${singlyMinutes} минут`;
}

console.log(getTimeFromMinutes(-150));

// Вторая задача
function findMaxNumber(first, second, third, fourth) {
    if (first === undefined || second === undefined || third === undefined || fourth === undefined ||
        typeof (first) == 'string' || typeof (second) == 'string' || typeof (third) == 'string' ||
        typeof (fourth) == 'string') {
        return 0;
    }
    let maxNumber = Math.max(first, second, third, fourth);
    return maxNumber;
}

console.log(findMaxNumber(1, 5, 66.6, 11));