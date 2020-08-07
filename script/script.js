let money = 300;
let income = 'Rent';
let addExpenses = 'Массаж, Маникюр, Маска';
let deposit = true;
let mission = 3000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' монгольских тугриков');

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log(budgetDay);