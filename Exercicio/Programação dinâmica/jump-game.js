var jump = function (value) {
    let memo = Array(value.length).fill(-1);

    memo[value.length - 1] = 1;

    const jumpPosition = (position) => {
        if (memo[position] !== -1) return memo[position] === 1;

        let furthestJump = Math.min(position + value[position], value.length - 1);

        for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
            if (jumpPosition(nextPosition)) {
                memo[position] = 1;
                return true;
            }
        }

        memo[position] = 0;
        return false;
    }

    return jumpPosition(0);
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([3, 2, 1, 0, 4]));