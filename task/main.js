let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    бюджет: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses:{},
    income:[],
    savings: false    
}
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = +prompt("Во сколько обойдется?");
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = +prompt("Во сколько обойдется?");
let oneDay = money/30;
alert ("ваш бюджет на день составляет"  + oneDay)

console.log(appData);