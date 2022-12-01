/*Задачи:
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать
строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается 
пустая строка.
P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в 
себя объект и возвращать строку в нужном виде.
Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'
Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими 
    буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем 
это менее удобным способом) */

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    //Третья задача
    showAgeAndLangs: function (plan) {
        const age = plan.age;
        const { languages } = plan.skills;
        let aboutUser = `Мне ${age} и я владею языками:`; 
        for (let key = 0; key < languages.length; key++) {
            aboutUser += ` ${languages[key].toUpperCase()}`;
        }
        return aboutUser;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//Первая задача
function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

//Вторая задача
function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let langSkills = ``;
    if (Object.keys(programmingLangs).length === 0) {
        return '';
    }
    for (let key in programmingLangs) {
        langSkills += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return langSkills;
}

