/* Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя 
массив строк. Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы 
по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 
4й элемент.

Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику 
действий строка за строкой. */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let arrSort = arr.sort();
    let hardFunc = function () {
        if (arrSort.slice(9).join() == '') {
            return `Оставшиеся студенты: -`;
        } else {
            return (`Оставшиеся студенты: ${arrSort.slice(9).join(", ")}`);
            
        }
    };
    let newArr = [arrSort.slice(0, 3), arrSort.slice(3, 6), arrSort.slice(6, 9), hardFunc()];
    return newArr;
}

console.log(sortStudentsByGroups(students));

