var falling = function (matrix) {

    let n = matrix.length;
    let memo = Array.from({ length: n }, () => Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        memo[0][j] = matrix[0][j];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let pathA = Infinity, pathB = Infinity, pathC = Infinity;

            if (isValid(i - 1, j - 1, n)) {
                pathA = matrix[i][j] + memo[i - 1][j - 1];
            }

            if (isValid(i - 1, j, n)) {
                pathB = matrix[i][j] + memo[i - 1][j];
            }

            if (isValid(i - 1, j + 1, n)) {
                pathC = matrix[i][j] + memo[i - 1][j + 1];
            }

            memo[i][j] = Math.min(pathA, pathB, pathC);
        }
    }

    let ans = Infinity;
    for (let j = 0; j < n; j++) {
        ans = Math.min(ans, memo[n - 1][j]);
    }

    return ans;
}

var isValid = function (i, j, n) {
    return i >= 0 && i < n && j >= 0 && j < n;
}

console.log(falling([[2, 1, 3], [6, 5, 4], [7, 8, 8]]));
console.log(falling([[-19, 57], [-40, -5]]));