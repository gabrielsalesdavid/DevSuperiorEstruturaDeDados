const { memo } = require('lodash'); // Importa a biblioteca lodash para usar memoização

const minCoins = function (coins, amount, memo = {}) { // Função para calcular o número mínimo de moedas
    if (amount in memo) return memo[amount]; // Verifica se o resultado já está memoizado
    if (amount === 0) return 0; // Caso base: se o valor é 0, não são necessárias moedas
    if (amount < 0) return Infinity; // Caso base: se o valor é negativo, retorna infinito (não é possível)

    let min = Infinity; // Inicializa o mínimo como infinito
    for (let coin of coins) { // Itera sobre cada moeda disponível
        const res = minCoins(coins, amount - coin, memo); // Chama recursivamente a função subtraindo o valor da moeda
        if (res !== Infinity) { // Se o resultado não é infinito, atualiza o mínimo
            min = Math.min(min, res + 1); // Adiciona 1 para contar a moeda atual
        }
    }

    memo[amount] = min; // Armazena o resultado na memoização
    return min; // Retorna o número mínimo de moedas
};

// Exemplo de uso:
const coins = [1, 2, 5];
const amount = 11;
console.log(minCoins(coins, amount)); // Output: 3 (11 = 5 + 5 + 1)