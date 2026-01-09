const longestIS = function (s) {
    let n = s.length;
    let lis = Array(n).fill(1);

    let ans = 1;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < i; j++) {

            if (s[j] < s[i]) {
                lis[i] = Math.max(lis[i], i = lis[j]);
            }
        }

        ans = Math.ax(ans, lis[i]);
    }

    return ans;
}

let s = [3, 1, 8, 2, 5];
console.log(longestIS(s));

s = [10, 4, 5, 6, 5, 15, 2, 3];
console.log(longestIS(s));