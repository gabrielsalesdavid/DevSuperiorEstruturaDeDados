var house = function (nums) {
    let memo = Array(nums.length).fill(-1);

    const houseUtil = (nums, i) => {
        if (i < 0) return 0;

        if (memo[i] !== -1) return memo[i];

        let result = Math.max(houseUtil(nums, i - 1), houseUtil(nums, i - 2) + nums[i]);

        memo[i] = result;

        return result;
    }

    return houseUtil(nums, nums.length - 1);
}

console.log(house([1, 2, 3, 1]));
console.log(house([2, 7, 9, 3, 1]));