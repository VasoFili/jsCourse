let isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};

const mission = 300000;
const income = 'Rent';

let money, sum;
let addExpenses = (prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Кошка,Собака,Енот")).toLowerCase();
let deposit = confirm("Есть ли у вас депозит в банке?");
let expenses1, expenses2;

let start = function () {
   do {
      money = prompt("Ваш месячный доход ?");
   } while (!isNumber(money))
};

start();

let getExpensesMonth = function () {
   let totalSum = 0;
   for (let i = 0; i < 2; i++) {

      if (i === 0) {
         expenses1 = prompt("Введите обязательную статью расходов?", "Статья расходов 1");
      } else if (i === 1) {
         expenses2 = prompt("Введите обязательную статью расходов?", "Статья расходов 2");
      };
      do {
         sum = prompt("Во сколько это обойдется?");
      } while (!isNumber(sum))
      totalSum = totalSum + Number(sum);
   };
   return totalSum;
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function () {
   //console.log(money - expensesAmount);
   return (money - expensesAmount);
};

let getTargetMonth = function () {
   if (Math.ceil(mission / getAccumulatedMonth()) >= 0) {
      return Math.ceil(mission / getAccumulatedMonth());
   } else {
      return "Цель не будет достигнута";
   };
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

console.log('expensesAmount: ', expensesAmount);
console.log('addExpenses: ', addExpenses.split(","));
console.log('getTargetMonth: ', getTargetMonth());
console.log("Бюджет на день: ", budgetDay);
console.log(getStatusIncome());