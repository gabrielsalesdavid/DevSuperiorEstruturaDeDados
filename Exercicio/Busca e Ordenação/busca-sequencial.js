const buscaSequencial = (nums, key) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key)
            return i;        
    }

    return -1;
};

console.log(buscaSequencial([28, 6, -2, 9, 16, 20, 23, 8], 20));
console.log(buscaSequencial([4, 6, -3, 21, 55, 91, 2], 11));