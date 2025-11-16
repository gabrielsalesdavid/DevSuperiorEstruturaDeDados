function twoSum(nums, target) { // Define the function that takes an array of numbers and a target sum
    const numIndices = new Map(); // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) { // Iterate through the array
        
        const complement = target - nums[i]; // Calculate the complement

        if (numIndices.has(complement)) { // Check if the complement exists in the map

            return [numIndices.get(complement), i]; // Return the indices if found
        }

        numIndices.set(nums[i], i); // Store the number and its index in the map
    }

    return []; // Return an empty array if no solution is found
}

module.exports = twoSum; //  Export the function for use in other files

// Example usage:

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: []
console.log(twoSum([-1, -2, -3, -4, -5], -8)); // Output: [2, 4]
console.log(twoSum([0, 4, 3, 0], 0)); // Output: [0, 3]