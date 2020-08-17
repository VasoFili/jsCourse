let isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};

let sum;

let appData = {
   income: {},
   budget: function () {
      let money;
      do {
         money = prompt("Ваш месячный доход ?");
      } while (!isNumber(money))
      appData.budgetMonth = Number(money);
   },
   addIncome: [],
   expenses: {},
   addExpenses: [],
   deposit: false,
   mission: 300000,
   period: 3,
   getBudgetDay: function () {
      appData.budgetDay = Math.floor(appData.accumulatedMonth / 30);
   },
   budgetMonth: 0,
   expensesMonth: 0,
   accumulatedMonth: 0,
   targetMonth: 0,
   budgetDay: 0,
   asking: function () {
      let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Кошка,Собака,Енот");
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm("Есть ли у вас депозит в банке?");
   },
   getExpensesMonth: function () {
      let expenses1, expenses2;
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
      appData.expensesMonth = totalSum;
   },
   getAccumulatedMonth: function () {
      appData.accumulatedMonth = appData.budgetMonth - appData.expensesMonth;
   },
   getTargetMonth: function () {
      if (Math.ceil(appData.mission / appData.accumulatedMonth) >= 0) {
         appData.targetMonth = Math.ceil(appData.mission / appData.accumulatedMonth);
      } else {
         appData.targetMonth = "Цель не будет достигнута";
      };
   },
   getStatusIncome: function () {
      if (appData.budgetDay >= 1200) {
         return ("У вас высокий уровень дохода");
      } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
         return ("У вас средний уровень дохода");
      } else if (appData.budgetDay > 0 && appData.budgetDay < 600) {
         return ("К сожалению у вас уровень дохода ниже среднего");
      } else {
         return ("Что-то пошло не так");
      };
   },
};

appData.budget();
appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getBudgetDay();

console.log('Доход в месяц: ', appData.budgetMonth);
console.log('Сбережения в месяц: ', appData.accumulatedMonth);
console.log('Обязательные расходы: ', appData.expensesMonth);
console.log('Возможные допрасходы: ', appData.addExpenses);

console.log('getTargetMonth: ', appData.targetMonth);
console.log('Бюджет на день: ', appData.budgetDay);
console.log('Уровень дохода: ', appData.getStatusIncome());