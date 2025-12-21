/**
 * @param {number} n
 * @param {number []} tasks
 */

var taskScheduling = function(n, tasks) {
    // Sort tasks in descending order
    tasks.sort((a, b) => b - a); // Sorting in descending order to minimize penalty time
    
    let totalTime = 0; // Initialize cumulative time
    let totalPenalty = 0; // Initialize total penalty time

    for (let i = 0; i < n; i++) { // Iterate through each task
        totalTime += tasks[i]; // Update cumulative time
        totalPenalty += totalTime; // Accumulate penalty time
    }

    return totalPenalty; // Return the total penalty time
};

// Example usage:
const n = 3; // Number of tasks
const tasks = [2, 5, 1]; // Task durations
console.log(taskScheduling(n, tasks)); // Output: 22