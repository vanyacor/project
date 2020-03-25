'use strict';

let startBut = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItems = document.getElementsByClassName('expenses-item'),

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    
    chooseIncome = document.querySelector('#income'),
    savingsCheckBox = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let time, money;

function start() {
    do {
        money = parseInt(prompt("Ваш бюджет на місяць?", "200"));
        console.log(money);
    } while (isNaN(money) || money == null || money == "");

    time = prompt("Введіть дату в форматі YYYY-MM-DD", "1999-12-09");
}


let appData = {
    budget: money, //Внесення значення
    timeData: time, //внесення значення
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerday = (appData.budget / 30).toFixed();
        alert("Щоденний бюджет: " + appData.moneyPerday);
    },
    detectLevel: function () {
        if (appData.moneyPerday < 100) {
            console.log("Мінімальний рівень достатку");
        } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
            console.log("Середній рівень достатку");
        } else if (appData.moneyPerday > 2000) {
            console.log("Високий рівень достатку");
        } else {
            сonsole.log("Сталася помилка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Яка сума збережень?"),
                percent = +prompt("Під який процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Надходження в місяц з Вашого депозиту: " + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let opt = prompt("Стаття не обов'язкових витрат?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        var numbersOfValues = 1,
            incomes = '';

        do {
            var items = prompt('Що принесе додатковий дохід? (Перечислити через кому \", \")', '');
            console.log(items);

            if (typeof (items) === 'string' && items != "" && items != null) {
                appData.income = items.split(', ');

                var addItems = prompt('Можливо ще щось?', "");

                if (typeof (addItems) === 'string' && addItems != "" && addItems != null)
                    appData.income.push(addItems);
            }
        } while (typeof (items) !== 'string' || items == "" || items == null);
        appData.income.sort();

        appData.income.forEach(function (incValues) {

            incomes = incomes + " " + numbersOfValues + ". " + incValues;
            numbersOfValues++;
        });

        alert("Способи дод. заробітку:" + incomes);

    }
};

function review() {
    console.log("Наша програма включає у себе дані: ");

    for (let key in appData) {
        console.log(`   ${key}: ${appData[key]}`);
    }

}