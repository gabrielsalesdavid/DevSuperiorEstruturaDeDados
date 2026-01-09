const kadane = function (vect) {
    let localMaximum = [];
    localMaximum[0] = vect[0];

    let maxSum = vect[0];

    for (let i = 0; i < vect.length; i++) {
        localMaximum[i] = Math.max(vect[i] + localMaximum[i - 1], vect[i]);
        maxSum = Math.max(maxSum, localMaximum[i]);
    }

    return maxSum;
}

const maxSubarry = function (v) {

    let maxSum = v[0], currentSum = 0;
    for (let i = 0; i < v.length; i++) {
        currentSum = max(v[i], v[i] + currentSum);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

vect = [5, -10, 2, 3, 6, -5, 7, -20, 10];
console.log(vect);
console.log(maxSubarry(vect));