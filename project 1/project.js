"use strict";

let time, money;

function start() {
    do {
        money = parseInt(prompt("Ваш бюджет на місяць?", "200"));
        console.log(money);
    } while (isNaN(money) || money == null || money == "");

    time = prompt("Введіть дату в форматі YYYY-MM-DD", "1999-12-09");
}
start();

let appData = {
    budget: money, //Внесення значення
    timeData: time, //внесення значення
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введіть обов'язкову статтю витрат"),
            b = prompt("У скільки обійдеться");

        if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            alert("Спробуйте ще раз");
            --i;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerday = (appData.budget / 30).toFixed();
    alert("Щоденний бюджет: " + appData.moneyPerday);
}

function detectLevel() {
    if (appData.moneyPerday < 100) {
        console.log("Мінімальний рівень достатку");
    } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
        console.log("Середній рівень достатку");
    } else if (appData.moneyPerday > 2000) {
        console.log("Високий рівень достатку");
    } else {
        сonsole.log("Сталася помилка");
    }
}

function chooseOptExpenses() {
    appData.optionalExpenses["1"] = prompt("Стаття не обов'язкових витрат?");
    appData.optionalExpenses["2"] = prompt("Ще одна?");
    appData.optionalExpenses["3"] = prompt("Остання?");
}

function checkSavings () {
    if(appData.savings == true) {
        let save = +prompt("Яка сума збережень?"),
            percent = +prompt("Під який процент?");
            
        appData.monthIncome = save/100/12*percent;   
        alert("Надходження в місяц з Вашого депозиту: " + appData.monthIncome); 
             
    }
}

chooseExpenses();
detectDayBudget();
detectLevel();
chooseOptExpenses();
checkSavings();

