let array = [1000, 2000, 2500];
let livingcost = 5000;

function monthlycost(array, livingcost) {
    if (!Array.isArray(array) || typeof livingcost != "number") {
        return "invalid input";
    }

    let totalmoney = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 3000) {
            let tax = (3000 / 100) * 20;
            totalmoney += (array[i] - tax);
        }
        else {
            totalmoney += array[i];
        }
    }
    let remainingmoney = totalmoney - livingcost;
    if (remainingmoney < 0) {
        return "earn more";
    }
    return remainingmoney;
}
let result = monthlycost(array, livingcost);
console.log(result);