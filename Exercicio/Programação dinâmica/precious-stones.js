var maxProfit = function (n, values) {
    let memo = Array(n + 1).fill(-1);

    return Util(n, values, memo);
}

var util = function (n, value, memo) {

    if (n === 0) return 0;

    if (memo[n] !== -1) return memo[n];

    for (let i = 1; i <= n; i++) {
        if (n - i >= 0) {
            memo[n] = Math.max(memo[n], util(n - 1, value, memo) + values(i - 1));
        }
    }

    return memo[n];
}

var n1 = 4;
var values1 = [2, 5, 7, 9];
console.log(maxProfit(n1, values1));

var n2 = 8;
var values2 = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(maxProfit(n2, values2));

var n3 = 8;
var values3 = [3, 5, 8, 9, 10, 17, 17, 20];
console.log(maxProfit(n3, values3));