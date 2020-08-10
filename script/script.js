const money = 300;
const income = 'Rent';
let addExpenses = 'Массаж, Маникюр, Маска';
const deposit = true;
const mission = 3000;
const period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' монгольских тугриков');

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

const budgetDay = money / 30;
console.log(budgetDay);