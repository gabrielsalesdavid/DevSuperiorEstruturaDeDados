/**
 * @param {number} n
 * @param {number} x
 * @param {number[]} bottles
 * @param {number}
 */

var maxBottlesCollected = function (n, x, bottles) {
    let totalBottles = 0; // Counter for total bottles collected
    let left = x - 1; // Left pointer starting from position x-1
    let right = x - 1; // Right pointer starting from position x-1

    // Collect bottles at the starting position
    totalBottles += bottles[x - 1];

    // Expand outwards from the starting position
    for (let distance = 1; distance < n; distance++) { // Distance from the starting position
        let collectedThisRound = 0; // Counter for bottles collected in this round

        // Check left side
        if (left - distance >= 0) { // If within bounds
            collectedThisRound += bottles[left - distance]; // Collect bottles from the left side
        }

        // Check right side
        if (right + distance < n) { // If within bounds
            collectedThisRound += bottles[right + distance]; // Collect bottles from the right side
        }

        // If both sides are valid, add the collected bottles
        if (collectedThisRound > 0) { // If any bottles were collected this round
            totalBottles += collectedThisRound; // Add to total bottles
        }
    }

    return totalBottles; // Return the total number of bottles collected
};

// Example usage:
console.log(maxBottlesCollected(5, 3, [1, 2, 3, 4, 5])); // Output: 15
console.log(maxBottlesCollected(6, 1, [0, 0, 0, 0, 0, 10])); // Output: 10
console.log(maxBottlesCollected(4, 4, [5, 5, 5, 5])); // Output: 20