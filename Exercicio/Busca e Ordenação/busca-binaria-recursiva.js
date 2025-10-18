const buscaBinariaRecursiva = function(nums, key, low, high) {
    if (low > high)
        return -1;

    const middle = Math.floor((low + high) / 2);

    if (key === nums[middle]) {
        return middle;
    } else if (key < nums[middle]) {
        return buscaBinariaRecursiva(nums, key, low, middle - 1);
    } else {
        return buscaBinariaRecursiva(nums, key, middle + 1, high);
    }
};

console.log(buscaBinariaRecursiva([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 34, 0, 11));
console.log(buscaBinariaRecursiva([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 10, 0, 11));
console.log(buscaBinariaRecursiva([-10, -3, 4, 6, 11, 13, 18, 44, 64, 91, 225, 431], 11, 0, 12));