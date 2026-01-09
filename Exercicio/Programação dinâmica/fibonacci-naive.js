const { memo } = require("react"); // Objeto para armazenar os valores já calculados

const fib = function (n) {

    if (memo[n] !== undefined) { // Verifica se o valor já foi calculado
        return memo[n]; // Retorna o valor armazenado
    }

    if (n <= 2) { // Casos base
        return 1; // F(1) = 1, F(2) = 1
    }

    memo[n] = fib(n - 1) + fib(n - 2); // Armazena o valor calculado na memória
    return memo[n]; // Retorna o valor calculado
}

console.log(fib(10)); // 55
console.log(fib(40)); // 102334155
console.log(fib(50)); // 12586269025
console.log(fib(60)); // 1548008755920
console.log(fib(70)); // 190392490709135
console.log(fib(80)); // 23416728348467685
console.log(fib(90)); // 2880067194370816120
console.log(fib(100)); // 354224848179261915075