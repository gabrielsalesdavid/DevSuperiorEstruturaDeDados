var mincost = function (list) {

    let n = list.length;
    let memo = Array(n + 1).fill(-1);

    return mincostUtil(n, list, memo);
}

var mincostUtil = function (n, list, memo) {

    if (n === 0 || n === 1) return 0;

    if (memo[n] !== -1) return memo[n];

    memo[n] = Math.min(mincostUtil(n - 1, list, memo) + list[n - 1],
        mincostUtil(n - 2, list, memo) + list[n - 1]);
    return memo[n];
}

let cost1 = [10, 15, 20];
console.log(mincost(cost1));

let cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(mincost(cost2));