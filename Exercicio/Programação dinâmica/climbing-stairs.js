var climbing = function (n) {

    let memo = Array(n + 1).fill(-1);
    return climbingUtil(n, memo);
}

var climbingUtil = function (n, memo) {

    if (n === 0 || n === 1) return 1;

    if (memo[n] !== -1) return memo[n];

    memo[n] = climbingUtil(n - 1, memo) + climbingUtil(n - 2, memo)
    return memo[n];
}

var n1 = 2;
console.log(climbing(n1));

var n2 = 3;
console.log(climbing(n2));

var n3 = 5;
console.log(climbing(n3));

var n4 = 45;
console.log(climbing(n4));