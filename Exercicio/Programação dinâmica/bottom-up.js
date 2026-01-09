const { memo } = require("react"); // Objeto para armazenar os valores já calculados

const fib = function (n) { // Função para calcular o n-ésimo número de Fibonacci

    memo[1] = memo[2] = 1; // Casos base

    for (let i = 3; i <= n; i++) { // Calcula os valores de forma iterativa
        memo[i] = memo[i - 1] + memo[i - 2]; // Armazena o valor calculado na memória
    }

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