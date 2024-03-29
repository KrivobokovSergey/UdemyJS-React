/* Задачи:

1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, 
которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

Пример:

getPositiveIncomeAmount(funds) => 13300

2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов 
содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений 
нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

Пример:

getTotalIncomeAmount(funds) => -500 */

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let sum = 0;
    data.filter(amo => amo.amount > 0)
    .forEach(item => {
        sum += item.amount;
    });
    return sum;
};

const getTotalIncomeAmount = (data) => {
    let sum = 0;
    if (data.some(amo => amo.amount < 0)) {
        data.forEach(item => {
            sum += item.amount;
        });
        return sum;
    } else {
        getPositiveIncomeAmount(data);
    }
};

getTotalIncomeAmount(funds);