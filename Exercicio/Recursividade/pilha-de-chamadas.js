let x = 3;

let result = factorial (x) ;
console.log(`RESULTADO: ${result}`);

function factorial(n) {

    if (n === 0)
        return 1;

    return n * factorial(n - 1);
}