/* 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту 
строку в обратном порядке.

Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'
Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить 
навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может 
вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.
Может показать сложной с первого взгляда, но это совсем не так 🙂

4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в 
разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это 
массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если 
массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает 
строку в нужном виде.

Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом 
additionalCurrencies по порядку */


//Третья задача
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str != 'string') {
        return 'Ошибка!';
    }
    let rts = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rts += str[i];
    }
    return rts;
}

console.log(reverse(someString));

//Четвертая задача
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length == 0) {
        return `Нет доступных валют`;
    }
    let array = [];
    for (let i in baseCurrencies) {
        for (let j in arr) {
            if (baseCurrencies[i] == arr[j] && arr[j] != missingCurr) {
                array.push(arr[j]);
            }
        }
    }
    for (let i in additionalCurrencies) {
        for (let j in arr) {
            if (additionalCurrencies[i] == arr[j] && arr[j] != missingCurr) {
                array.push(arr[j]);
            }
        }
    }
    let arrString = `Доступные валюты:\n`;
    for (let k in array) {
        arrString += `${array[k]}\n`;
    }
    return arrString;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));