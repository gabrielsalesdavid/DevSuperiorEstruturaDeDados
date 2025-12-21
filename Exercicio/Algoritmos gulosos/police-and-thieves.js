/**
 * @param {number} n
 * @param {number} k
 * @param {number []} l
 */

var policeAndThieves = function (n, k, l) {
    let thievesCaught = 0; // Counter for caught thieves
    const policePositions = []; // Arrays to store positions of police and thieves
    const thiefPositions = []; // Arrays to store positions of police and thieves

    // Collect positions of police and thieves
    for (let i = 0; i < n; i++) { // Iterate through the list
        if (l[i] === 1) { // 1 represents a police
            policePositions.push(i); // 1 represents a police

        } else if (l[i] === 0) { // 1 represents a police
            thiefPositions.push(i); // 0 represents a thief
        }
    }

    let pIndex = 0; // Pointers for police and thieves
    let tIndex = 0; // Pointers for police and thieves

    // Use two pointers to match police with thieves
    while (pIndex < policePositions.length && tIndex < thiefPositions.length) { // While there are police and thieves left to check
        const policePos = policePositions[pIndex]; // Current positions of police and thief
        const thiefPos = thiefPositions[tIndex]; // Current positions of police and thief

        if (Math.abs(policePos - thiefPos) <= k) { // If the police can catch the thief
            thievesCaught++; // A thief is caught
            pIndex++; // Move both pointers forward
            tIndex++; // Move both pointers forward

        } else if (policePos < thiefPos) {
            pIndex++; // Move to the next police

        } else { // policePos > thiefPos
            tIndex++; // Move to the next thief
        }
    }

    return thievesCaught; // Return the total number of thieves caught
};

// Example usage:
console.log(policeAndThieves(5, 1, [0, 1, 0, 1, 0])); // Output: 2
console.log(policeAndThieves(6, 2, [1, 0, 0, 1, 0, 1])); // Output: 3
console.log(policeAndThieves(7, 3, [0, 0, 1, 0, 1, 0, 1])); // Output: 3