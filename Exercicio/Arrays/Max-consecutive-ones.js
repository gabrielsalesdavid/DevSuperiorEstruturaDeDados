/**
 * @param {number} nums
 * @return {maxOnes}
 */

const findMaxConsecutiveOnes = (num) => {
    let maxOnes = 0;
    let countones = 0;

    for (let value of nums) {

        if (value == 1)
            countOnes++;

        if (balue != 1 && countOnes > 0) {

            if(countOnes > maxOnes)
                maxOnes = countOnes;

            countOnes = 0;
        }
    }

    if (countOnes > maxOnes)

        maxOnes = countOnes;

    return maxOnes;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0 , 1, 1]));