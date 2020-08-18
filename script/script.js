const isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function () {
   do {
      money = prompt("Ваш месячный доход ?");
   } while (!isNumber(money))
};
start();

let appData = {
   income: {},
   budget: Number(money),
   addIncome: [],
   expenses: {},
   addExpenses: 0,
   deposit: false,
   percentDeposit: 0,
   moneyDeposit: 0,
   mission: 300000,
   period: 3,
   budgetMonth: 0,
   expensesMonth: 0,
   accumulatedMonth: 0,
   targetMonth: 0,
   budgetDay: 0,
   asking: function () {

      if (confirm("Есть ли у вас дополнительный заработок?")) {
         let itemIncome;
         let cashIncome;
         do {
            itemIncome = prompt("Какой у вас дополнительный заработок?", "Массаж");
         } while (isNumber(itemIncome) || itemIncome.trim() === '' || itemIncome === null)
         do {
            cashIncome = prompt("Сколько в месяц вы зарабатываете на этом?", 10000);
         } while (!isNumber(cashIncome))
         appData.income[itemIncome] = cashIncome;
      }

      let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "кошка,собака,енот");
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      let array = [];
      for (let word of appData.addExpenses) {
         word = word.charAt(0).toUpperCase() + word.substr(1);
         array.push(word);
      }
      appData.addExpenses = array;
      appData.deposit = confirm("Есть ли у вас депозит в банке?");

      let test = {};
      let expensesI, sum;
      for (let i = 0; i < 2; i++) {
         if (i < 2) {
            do {
               expensesI = prompt("Введите обязательную статью расходов?", "Статья расходов 1");
            } while (isNumber(expensesI) || expensesI.trim() === '' || expensesI === null)
         };
         do {
            sum = prompt("Во сколько это обойдется?");
         } while (!isNumber(sum))
         test[expensesI] = Number(sum);
         appData.expenses = test;
      };
      let sumKey = 0;
      for (let key in test) {
         sumKey += test[key];
      };
      appData.expensesMonth = sumKey;

   },
   getBudget: function () {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
   },
   getTargetMonth: function () {
      if (Math.ceil(appData.mission / appData.budgetMonth) >= 0) {
         appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
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
   getInfoDeposit: function () {
      if (appData.deposit) {
         do {
            appData.percentDeposit = prompt("Какой годовой процент?", 10);
         } while (!isNumber(appData.percentDeposit))
         do {
            appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
         } while (!isNumber(appData.moneyDeposit))
      }
   },
   calcSavedMoney: function () {
      return appData.budgetMonth * appData.period;
   }
};

appData.asking();
appData.getBudget();
appData.getTargetMonth();
appData.getInfoDeposit();
appData.calcSavedMoney();

console.log('Расходы за месяц: ', appData.expenses);
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('getTargetMonth: ', appData.targetMonth);
console.log('Уровень дохода: ', appData.getStatusIncome());
console.log('Возможные расходы: ', appData.addExpenses.join(', '));

// console.log('Наша программа включает в себя данные: ');
// for (let key in appData) {
//    console.log('Ключ: ' + key + '  Значение: ' + appData[key]);
// }