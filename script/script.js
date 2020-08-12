const mission = 300000;
const income = 'Rent';

let money = +prompt("Ваш месячный доход ?", "50000");
let addExpenses = (prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Кошка,Собака,Енот")).toLowerCase();
let deposit = confirm("Есть ли у вас депозит в банке?");
const expenses1 = prompt("Введите обязательную статью расходов?", "Статья расходов 1");
const amount1 = +prompt("Во сколько это обойдется?", "10000");
const expenses2 = prompt("Введите обязательную статью расходов?", "Статья расходов 2");
const amount2 = +prompt("Во сколько это обойдется?", "10000");

let getExpensesMonth = function () {
   return amount1 + amount2;
};

let getAccumulatedMonth = function () {
   return (money - getExpensesMonth());
};

let getTargetMonth = function () {
   return Math.ceil(mission / accumulatedMonth);
};

let showTypeOF = function (data) {
   return (data) + ' ' + typeof data;
};

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

let accumulatedMonth = getAccumulatedMonth();
let budgetDay = Math.floor(accumulatedMonth / 30);


console.log(showTypeOF(money));
console.log(showTypeOF(income));
console.log(showTypeOF(deposit));

console.log('getExpensesMonth: ', getExpensesMonth());
console.log('addExpenses: ', addExpenses.split(","));
console.log('getTargetMonth: ', getTargetMonth());
console.log("Бюджет на день: ", budgetDay);
console.log(getStatusIncome());