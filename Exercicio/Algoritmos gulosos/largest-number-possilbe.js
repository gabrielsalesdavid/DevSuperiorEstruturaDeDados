/**
 * @param {number} n
 * @param {number} s
 */

var maximumPossibleValue = function (n, s) {

    if (s === 0) { // Edge case: if sum is 0

        return n === 1 ? '0' : '-1'; // Only one digit can be 0
    }

    if (s > 9 * n) { // If the sum exceeds the maximum possible sum for n digits

        return '-1'; // Not possible to form such a number
    }

    let result = ''; // Initialize the result string

    for (let i = 0; i < n; i++) { // Loop through each digit position

        if (s >= 9) { // If remaining sum is 9 or more

            result += '9'; // Append '9' to the result
            s -= 9; // Decrease the sum by 9
        } else { // If remaining sum is less than 9

            result += s.toString(); // Append the remaining sum as the next digit
            s = 0; // Set sum to 0 as we've used it all
        }
    }

    return result; // Return the constructed largest number
};

// Example usage:
console.log(maximumPossibleValue(3, 20)); // Output: "992"
console.log(maximumPossibleValue(2, 15)); // Output: "96"
console.log(maximumPossibleValue(1, 0));  // Output: "0"
console.log(maximumPossibleValue(2, 0));  // Output: "-1"
console.log(maximumPossibleValue(2, 100)); // Output: "-1"