function factorial (n) {

    return factorialTailRecursive(n, 1);
}

function factorialTailRecursive(n, total) {

    if (n === 0)
        return total;

    return factorialTailRecursive(n - 1, n * total);
}

const result = factorial(5);
console.log(result);