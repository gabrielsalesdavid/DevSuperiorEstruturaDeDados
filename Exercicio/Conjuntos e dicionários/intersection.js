function intersection(nums01, nums02) {

    let set01 = new Set(nums01);
    let set02 = new Set(nums02);
    let resultSet = new Set([...set01].filter(x => set02.has(x)));

    return Array.from(resultSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]