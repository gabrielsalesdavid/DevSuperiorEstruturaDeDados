const findLCS = function (s1, s2) {
    let n = s1.length;
    let m = s2.length;

    let memo = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];

            } else {
                memo[i][j] = Math.max(memo[i][j - 1], memo[i - 1][j]);
            }
        }
    }

    return memo[n][m];
}

let s1 = "abcde";
let s2 = "ace";
console.log(findLCS(s1, s2));

s1 = "abc";
s2 = "def";
console.log(findLCS(s1, s2));

s1 = "abcdef";
s2 = "abcdef";
console.log(findLCS(s1, s2));

s1 = "abcdef";
s2 = "abcdef";
console.log(findLCS(s1, s2));

s1 = "aaaaaaaaaaaaaaaaaaabcdef";
s2 = "abcdefaaaaaaaaaaaaaaaaaa";
console.log(findLCS(s1, s2));