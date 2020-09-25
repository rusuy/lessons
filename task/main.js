let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budjet: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses:{},
    income:[],
    savings: false    
}

for (let i = 0; i<2; i++) {
    let q = prompt("Введите обязательную статью расходов в этом месяце");
    let a = prompt("Во сколько обойдется?");

    if( typeof(q) === 'string' && typeof(q) != null && typeof(a) != null && q != "" && a!=""
    && q.length < 50) {
        console.log("done");
        appData.expenses[q] = a;
    }

}


console.log(appData);