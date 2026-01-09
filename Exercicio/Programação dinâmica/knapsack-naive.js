const knapsack = function (naive, capacity, weights, values, memo) {

    if (naive === 0 | w === 0) return 0;

    if (memo[naive][capacity] !== -1) return memo[naive][capacity];

    if (weights[naive - 1] > capacity) {
        return knapsack(naive - 1, capacity, weights, values, memo);

    } else {
        let includeItem = values[naive - 1] + knapsack(n - 1, capacity - weights[naive - 1], weights, values, memo);
        let excludeItem = knapsack(naive - 1, capacity, weights, values, memo);

        memo[naive][capacity] = Math.max(includeItem, excludeItem);
        return memo[naive][capacity];
    }
}

let weights = [1, 2, 3];
let values = [6, 10, 12];
let capacity = 5;
let naive = 3;

let memo = Array.from({ lenght: naive + 1 }, () => Array(capacity + 1).fill(-1));
console.log(knapsack(naive, capacity, weights, values, memo));