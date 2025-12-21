/**
 * @param {number} n
 * @param {number []} start
 * @param {number []} end
 */

var minRooms = function (n, start, end) { // O(n log n)

    start.sort((a, b) => a - b); // O(n log n)
    end.sort((a, b) => a - b); // O(n log n)

    let rooms = 0; // O(1)
    let maxRooms = 0; // O(1)
    let i = 0; // pointer for start times
    let j = 0; // pointer for end times

    while (i < n && j < n) { // O(n)

        if (start[i] < end[j]) { // a new meeting starts before the earliest ends

            rooms++; // need a new room
            maxRooms = Math.max(maxRooms, rooms); // O(1)
            i++; // move to next meeting

        } else { // start[i] >= end[j]

            rooms--; // a room gets freed
            j++; // free up a room
        }
    }

    return maxRooms; // O(1)
};

// Example usage:
console.log(minRooms(3, [0, 30, 5], [10, 40, 15])); // Output: 2
console.log(minRooms(2, [1, 2], [3, 4])); // Output: 1
console.log(minRooms(6, [900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1900, 1800, 2000])); // Output: 3
console.log(minRooms(3, [900, 1100, 1235], [1000, 1200, 1240])); // Output: 1