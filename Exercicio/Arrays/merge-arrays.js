/**
 * @param {number} nums01
 * @param {number}
 * @param {number} nums02
 * @param {number}
 * @return {void}
 */

const merge = (nums01, m, nums02, n) => {

    for (let i = 0; i < n; i++) {

        nums01[m + i] = nums02[i];
    }

    nums01.sort((a, b) => a - b);
};

const nums01 = [1, 2, 3, 0, 0, 0];
const nums02 = [2, 5, 6];
merge(nums01, 3, nums02, 3);
console.log(nums01);