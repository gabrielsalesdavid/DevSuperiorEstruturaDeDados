const rodCutting = function (state, stick) {

    if (state === 0) return 0;

    if (memo[state] !== -1) return memo[state];

    let ans = -Infinity;

    for (let i = 1; i <= state; i++) {

        if (state - i >= 0) ans = Math.max(ans, rodCutting(state - i, stick, memo) + p[i - 1]);
    }

    memo[state] = ans;
    return memo[state];
}

const rod = function (state, stick) {

    let memo = Array(state + 1).fill(-1);
    return rodCutting(state, stick, memo);
}

let p = [3, 4, 8];
let n = 3;
console.log(rod(n, p));

p = [3, 4, 8, 10, 10, 11, 23, 23, 24, 25];
n = 10;
console.log(rod(n, p));