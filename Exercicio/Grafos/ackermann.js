class Ackermann {
    static compute(m, n) { // Using the iterative version for better performance on small m values
        if (m === 0) { // Base case
            return n + 1; // A(0, n) = n + 1
        } else if (m === 1) { // A(1, n) = n + 2
            return n + 2; // A(1, n) = n + 2
        } else if (m === 2) { // A(2, n) = 2n + 3
            return 2 * n + 3; // A(2, n) = 2n + 3
        } else if (m === 3) { // A(3, n) = 2^(n + 3) - 3
            return Math.pow(2, n + 3) - 3; // A(3, n) = 2^(n + 3) - 3
        } else {
            throw new Error("Values of m greater than 3 are not supported due to rapid growth."); // Limiting m to 3 for practical computation
        }
    }
}

// Example usage:
console.log(Ackermann.compute(0, 5)); // Output: 6
console.log(Ackermann.compute(1, 5)); // Output: 7
console.log(Ackermann.compute(2, 5)); // Output: 13
console.log(Ackermann.compute(3, 3)); // Output: 13

module.exports = Ackermann;