let money = 300;
const income = 'Rent';
let addExpenses = 'Массаж, Маникюр, Маска';
let deposit = true;
const mission = 300000;
const period = 12;
let budgetMonth;
let missionMonth;


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

money = +prompt("Ваш месячный доход ?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");
const expenses1 = prompt("Введите обязательную статью расходов?");
const amount1 = +prompt("Во сколько это обойдется?");
const expenses2 = prompt("Введите обязательную статью расходов?");
const amount2 = +prompt("Во сколько это обойдется?");

console.log("Бюджет на месяц: ", budgetMonth = money - amount1 - amount2);
console.log("Цель будет достигнута за (мес.): ", missionMonth = Math.ceil(mission / budgetMonth));
console.log("Бюджет на день: ", budgetDay = Math.floor(budgetMonth / 30));

if (budgetDay >= 1200) {
   console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay < 1200) {
   console.log("У вас средний уровень дохода");
} else if (budgetDay > 0 && budgetDay < 600) {
   console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
   console.log("Что-то пошло не так");
};