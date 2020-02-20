"use strict";

do {
    var money = parseInt(prompt("Ваш бюджет на місяць?", "200"));
    console.log(money);
}while(isNaN(money) || money == 0);

let time = prompt("Введіть дату в форматі YYYY-MM-DD", "1999-12-09");

let appData = {
    budget: null,
    timeData: null,
    expenses: {
        firstBudQue: null,
        secondBudQue: null,
        firstCountQue: null,
        secondCountQue: null
    },
    optionalExpenses: {},
    income: [],
    saving: false
};

appData.budget = money; //Внесення бюджету в об'єкт
appData.timeData = time; //Внесення дати в об'єкт

appData.expenses.firstBudQue = prompt("Введіть обов'язкову статтю витрат у цьому місяці");
do {
appData.expenses.firstCountQue = parseInt(prompt("У скільки обійдеться"));
} while (isNaN(appData.expenses.firstCountQue) || appData.expenses.firstCountQue == 0);

appData.expenses.secondBudQue = prompt("Введіть другу обов'язкову статтю витрат у цьому місяці");

do {
appData.expenses.secondCountQue = +prompt("У скільки обійдеться");
} while (isNaN(appData.expenses.secondCountQue) || appData.expenses.secondCountQue == 0);

alert("Бюджет на день " + " " + (appData.budget - (appData.expenses.firstCountQue +appData.expenses.secondCountQue)) / 30);