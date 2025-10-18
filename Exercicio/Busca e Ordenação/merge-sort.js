const mergeSort = (nums, left, right) => {

    if (left < right) {
        let middle = Math.floor((left + right) / 2);
        mergeSort(nums, left, middle);
        mergeSort(nums, middle + 1, right);
        mergeSort(nums, left, middle, right);
    }

    return nums;
};

const merge = (nums, left, middle, right) => {

    const result = [];
    let lenght = right - left + 1;
    let i = left;
    let j = middle + 1;
    let k = 0;

    while (i <= middle && j <= right) {

        if (nums[i] < nums[j]) {

            result[k] = nums[i];
        } else {

            result[k++] = nums[j++];
        }
    }

    while (i <= middle) {

        result[k++] = nums[i++];
    }

    while (j <= middle) {

        result[k++] = nums[j++];
    }

    for (let i = 0; i < lenght; i++) {

        nums[left + i] = result[i];
    }
};

console.log(mergeSort([20, 9, 86, -2, 16], 0, 4));
console.log(mergeSort([30, 24, -2, 2, -4, -2, 2, 8, 10, 9, -4], 0, 10));
console.log(mergeSort([1, 1, 1, 2, 2, 4, 4, 8, 16, 16, 32]));