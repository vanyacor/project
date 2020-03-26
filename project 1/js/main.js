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

expensesItemBtn.disabled = "disabled";
optionalExpensesBtn.disabled = "disabled";
countBudgetBtn.disabled = "disabled";

startBut.addEventListener('click', function () {
    time = prompt("Введіть дату в форматі YYYY-MM-DD", "1999-12-09");
    appData.timeData = time;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    do {
        money = parseInt(prompt("Ваш бюджет на місяць?", "200"));
        console.log(money);
    } while (isNaN(money) || money == null || money == "");
    appData.budget = money;
    budgetValue.textContent = money.toFixed();

    expensesItemBtn.disabled = "";
optionalExpensesBtn.disabled = "";
countBudgetBtn.disabled = "";
});

expensesItemBtn.addEventListener('click', function () {
    var sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
            
        } 
        else {
            i = expensesItems.length;
            sum = "Enter all values";
            
        }
    }
    if (isNaN(sum) && sum != "Enter all values") {
        expensesValue.textContent = "Enter only numbers";
    }
    else {
    expensesValue.textContent = sum;
    appData.sumExpense = sum;
    }
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined && isNaN(appData.sumExpense) == false && appData.sumExpense != "" && appData.sumExpense != null) {
        appData.moneyPerday = ((appData.budget - appData.sumExpense)/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerday;

        if (appData.moneyPerday < 100) {
            levelValue.textContent = "Мінімальний рівень достатку";
        } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
            levelValue.textContent = "Середній рівень достатку";
        } else if (appData.moneyPerday > 2000) {
            levelValue.textContent = "Високий рівень достатку";
        } else {
            levelValue.textContent = "Сталася помилка";
        }
    } else {
        dayBudgetValue.textContent = "Сталася помилка, спробуйте ввести обов'язкові витрати";
    }
});

chooseIncome.addEventListener('change', function () {
    var items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsCheckBox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false; 
    }
    else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
     if (appData.savings == true) {
         let sum = +chooseSum.value,
             percent = +choosePercent.value;

             appData.monthIncome = sum / 100 / 12 * percent;
             appData.yearIncome = sum / 100 * percent;

             monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
             yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
     }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
             percent = +choosePercent.value;

             appData.monthIncome = sum / 100 / 12 * percent;
             appData.yearIncome = sum / 100 * percent;

             monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
             yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money, //Внесення значення
    timeData: time, //внесення значення
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function review() {
    console.log("Наша програма включає у себе дані: ");

    for (let key in appData) {
        console.log(`   ${key}: ${appData[key]}`);
    }

}