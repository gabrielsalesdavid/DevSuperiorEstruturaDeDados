const bubbleSort = (nums) => {
    const N = nums.length;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N - 1; j++) {

            if (nums[j] > nums[j + 1]) {
                const aux = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = aux;
            }
        }
    }

    return nums;
};

console.log(bubbleSort([20, 9, 86, -2, 16]));
console.log(bubbleSort([5, 4, 3, 2, 1]));