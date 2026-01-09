var minimum = function (grid) {

    let n = grid.length;
    let m = grid[0].length;

    let memo = Array.from({ length: n }, () => Array(m).fill(0));

    memo[0][0] = grid[0][0];

    for (let i = 1; i < n; i++) {
        memo[i][0] = memo[i - 1][0] + grid[i][0];
    }

    for (let j = 1; j < m; j++) {
        memo[0][j] = memo[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + grid[i][j];
        }
    }

    return memo[n - 1][m - 1];
}

console.log(minimum([[1, 3, 1], [4, 2, 1]]));
console.log(minimum([[1, 2, 3]]));