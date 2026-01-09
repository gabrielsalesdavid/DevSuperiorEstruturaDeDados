const knapsack = function (naive, capacity, weights, values, memo) {

    let dp = Array.from({ length: naive + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= naive; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i - 1] <= j) {
                dp[i][j] = Math.max(dp[i - 1][capacity], values[i - 1], + dp[i - 1][w - weights[i - 1]]);

            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[naive][capacity];
}

let weights = [1, 2, 3];
let values = [6, 10, 12];
let capacity = 5;
let naive = 3;

console.log(knapsack(naive, capacity, weights, values));