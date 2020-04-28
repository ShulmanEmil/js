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
  savings: true,
  chooseExpense: function() {
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
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let consumption = prompt('Введите НЕобязательную статью расходов в этом месяце');
      let willCost = prompt('Во сколько обойдется?');
    
      if ( (typeof(consumption)) != null && (typeof(willCost)) != null ){
      appData.optionalExpenses.i =  willCost;
      } else {                            
        console.log ("bad result");
        i--;
      }
    }
  },
  detectDayBudget: function() {
    alert( ((appData.budget - appData.expenses.consumption) / 30).toFixed(1) );
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
      appData.monthIncone = (save / 100 / 12 * percent).toFixed(1);
      alert(("Доход с депозита: " + appData.monthIncone) );
    }
  },
  chooseIncome: function() {
    let income;
    while (income == "" || income == null) {
      income = prompt("Доп. доходы? (Через запятую)");
    }
    appData.income = income.split(', ');
    appData.income.sort();
    appData.income.forEach(element => {
      alert("Способы доп. заработка:" + element);
    });
  }
};

for (const key in appData) {
  alert("Наша программа включает в себя данные: " + key);
}