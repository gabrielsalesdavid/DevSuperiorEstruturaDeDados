const rodCutting = function (state, stick) {

    let memo = Array(state + 1).fill(-1);

    memo[0] = 0;
    for (let i = 1; i <= state; i++) {
        for (let j = 1; j <= i; j++) {
            memo[i] = Math.max(memo[i], memo[i - j] + stick[j - 1]);
        }
    }

    return memo[state];
}

let p = [3, 4, 8];
let n = 3;
console.log(rod(n, p));

p = [3, 4, 8, 10, 10, 11, 23, 23, 24, 25];
n = 10;
console.log(rod(n, p));