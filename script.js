let money, time;

function start() {
  time = prompt('Введите дату в формате YYYY-MM-DD', 1999-01-01);

  while (isNaN(money) || money == "" || money == null) {
    money = prompt('Ваш бюджет на месяц?', 0);
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let consumption = prompt('Введите обязательную статью расходов в этом месяце');
    let willCost = prompt('Во сколько обойдется?');
  
    if ( (typeof(consumption)) != null && (typeof(willCost)) != null ){
    appData.expenses.consumption =  willCost;
    } else {                            
      console.log ("bad result");
      i--;
    }
  }
}

chooseExpenses();

function chooseOptExpenses {
  for (let i = 0; i < 3; i++) {
    let consumption = prompt('Введите НЕобязательную статью расходов в этом месяце');
    let willCost = prompt('Во сколько обойдется?');
  
    if ( (typeof(consumption)) != null && (typeof(willCost)) != null ){
    appData.optionalExpenses.consumption =  willCost;
    } else {                            
      console.log ("bad result");
      i--;
    }
  }
}

function detectDayBudget {
  alert( ((appData.budget - appData.expenses.consumption) / 30).toFixed(1) );
}

detectDayBudget();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncone = (save / 100 / 12 * percent).toFixed(1);
    alert(("Доход с депозита: " + appData.monthIncone) );
  }
}

checkSavings();