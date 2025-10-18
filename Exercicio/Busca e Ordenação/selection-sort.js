const selectionSort = (nums) => {
    const N = nums.length;

    for (let i = 0; i < N - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < N; j++) {

            if (nums[j] < nums[minIndex])
                minIndex = j;
        }

        if (minIndex != i)
            swap(nums, i, minIndex);
    }

    return nums;
};


const swap = (nums, a, b) => {

    const aux = nums[a];
    nums[a] = nums[b];
    nums[a] = aux;
};

console.log(selectionSort([20, 9, 86, -2, 16]));
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([38, 23, 8, -5, 16, 29, 0, 13]));