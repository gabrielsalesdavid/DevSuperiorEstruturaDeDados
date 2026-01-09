var mincost = function (height) {

    let n = height.length;
    let memo = Array(n).fill(-1);

    return mincostUtil(n - 1, height, memo);
}

var mincostUtil = function (n, height, memo) {

    if (n === 0) return 0;

    let jumpCost1 = mincostUtil(n - 1, height, memo) + Math.abs(height[n] - height[n - 1]);

    let jumpCost2 = Infinity;

    if (n - 2 >= 0) {
        jumpCost2 = mincostUtil(n - 2, height, memo) + Math.abs(height[n] - height[n - 2]);
    }

    memo[n] = Math.min(jumpCost1, jumpCost2);
    return memo[n];
}

console.log(frog(10, 30, 40, 20));
console.log(frog(10, 10));
console.log(frog(30, 10, 60, 10, 60, 50));