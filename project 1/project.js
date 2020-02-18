'use strict'

let money = +prompt("Ваш бюджет на місяць?", "200");
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
}

appData.budget = money; //Внесення бюджету в об'єкт
appData.timeData = time; //Внесення дати в об'єкт

appData.expenses.firstBudQue = prompt("Введіть обов'язкову статтю витрат у цьому місяці");
appData.expenses.firstCountQue = +prompt("У скільки обійдеться");
appData.expenses.secondBudQue = prompt("Введіть другу обов'язкову статтю витрат у цьому місяці");
appData.expenses.secondCountQue = +prompt("У скільки обійдеться");

alert("Бюджет на день " + " " + (appData.budget - (appData.expenses.firstCountQue +appData.expenses.secondCountQue)) / 30);