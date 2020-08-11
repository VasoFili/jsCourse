let money = 300;
const income = 'Rent';
let addExpenses = 'Массаж, Маникюр, Маска';
let deposit = true;
const mission = 300000;
const period = 12;
let missionMonth;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

addExpenses = addExpenses.toLowerCase();

money = +prompt("Ваш месячный доход ?", "50000");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Кошка,Собака,Енот");
deposit = confirm("Есть ли у вас депозит в банке?");
const expenses1 = prompt("Введите обязательную статью расходов?", "Статья расходов 1");
const amount1 = +prompt("Во сколько это обойдется?", "10000");
const expenses2 = prompt("Введите обязательную статью расходов?", "Статья расходов 2");
const amount2 = +prompt("Во сколько это обойдется?", "10000");

let getExpensesMonth = function () {
   console.log(amount1 + amount2);
};
getExpensesMonth();

let getAccumulatedMonth = function (a, b, c) {
   return (a - b - c);
};

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

let budgetDay = accumulatedMonth / 30;

let getTargetMonth = function () {
   console.log(Math.ceil(mission / accumulatedMonth));
};
getTargetMonth();

console.log("Бюджет на день: ", budgetDay = Math.floor(accumulatedMonth / 30));
console.log('addExpenses: ', addExpenses.split(","));

let getStatusIncome = function () {
   if (budgetDay >= 1200) {
      return ("У вас высокий уровень дохода");
   } else if (budgetDay >= 600 && budgetDay < 1200) {
      return ("У вас средний уровень дохода");
   } else if (budgetDay > 0 && budgetDay < 600) {
      return ("К сожалению у вас уровень дохода ниже среднего");
   } else {
      return ("Что-то пошло не так");
   };
};

console.log(getStatusIncome());