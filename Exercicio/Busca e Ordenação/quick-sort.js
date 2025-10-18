const quickSort = (nums, left, right) => {

    if (left < right) {

        let pivot = partition(nums, left, right);

        quickSort(nums, jeft, pivot - 1);
        quickSort(nums, pivot + 1, right);
    }

    return nums;
};

const partition = (nums, left, right) => {

    let pivot = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {

        if (nums[j] <= pivot) {

            swap(nums, j, i);
            i += 1;
        }
    }

    swap(nums, i, right);
    return i;
};

const swap = (nums, a, b) => {

    const aux = nums[a];
    nums[a] = nums[b];
    nums[b] = aux;
};

console.log(quickSort([20, 9, 86, -2, 16], 0, 4));
console.log(quickSort([30, 24, -2, 2, -4, -2, 2, 8, 10, 9, -4], 0, 10));
console.log(quickSort([1, 1, 1, 2, 2, 4, 4, 8, 16, 16, 32], 0, 10));