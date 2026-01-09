const coins = function (coins, amount) {

    let memo = Array(amount + 1).fill(Infinity);

    memo[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            let subProblem = i - coin;
            if (subProblem >= 0) {
                memo[i] = Math.min(memo[i], memo[subProblem] + 1);
            }
        }
    }

    if (memo[amount] === Infinity) return -1;

    return memo[amount];
}

console.log(coins([1, 2, 5], 11));
console.log(coins([2], 3));
console.log(coins([1, 2, 3, 7, 11], 10000));