let money = prompt('Ваш бюджет на месяц?', 0);
let time = prompt('Введите дату в формате YYYY-MM-DD', 1999-01-01);

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: "",
  income: [],
  savings: false
};
for (let i = 0; i < 2; i++) {
  let consumption = prompt('Введите обязательную статью расходов в этом месяце');
  let willCost = prompt('Во сколько обойдется?');

  if ( (typeof(consumption)) != null && (typeof(willCost)) != null ){
  appData.expenses.consumption =  willCost;
  }
}

alert( (appData.budget - appData.expenses.consumption) / 30 )

