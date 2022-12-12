/* Задание:

Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. 
Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя 
бы один раз используются буквы от A до Z (регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является 
панграммой - вернется true, если нет - false.

Пример:

isPangram(«The quick brown fox jumps over the lazy dog») => true

isPangram(«Hello world») => false */

function isPangram(string) {
    let strUnique = Array.from(new Set(string.toLowerCase()));
    for (let i = 0; i < strUnique.length; i++) {
        if (strUnique[i] == ' ') {
            strUnique.splice(i, 1);
        }
    }
    if (strUnique.length == 26) {
        return true;
    } else {
        return false;
    }
}


console.log(isPangram('Hello world'));

let b = 'The quick brown fox jumps over the lazy dog';
console.log(b.trim());