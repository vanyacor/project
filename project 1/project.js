"use strict";

do {
    var money = parseInt(prompt("Ваш бюджет на місяць?", "200"));
    console.log(money);
} while (isNaN(money) || money == 0);

let time = prompt("Введіть дату в форматі YYYY-MM-DD", "1999-12-09");

let appData = {
    budget: money, //Внесення значення
    timeData: time, //внесення значення
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введіть обов'язкову статтю витрат"),
    b = prompt("У скільки обійдеться");
    
    if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != "" && b != "" && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    } else {
    alert("Спробуйте ще раз");
    --i;
    }
}

appData.moneyPerday = appData.budget / 30;

alert("Щоденний бюджет: " + appData.moneyPerday);

if (appData.moneyPerday < 100) {
    console.log("Мінімальний рівень достатку");
} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
    console.log("Середній рівень достатку");
} else if (appData.moneyPerday > 2000) {
    console.log("Високий рівень достатку");
} else {
    сonsole.log("Сталася помилка");
}