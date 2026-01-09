const minCoins = function (v, c) {

    let memo = Array(c + 1).fill(Infinity); // Inicializa o array de memoização com infinito
    memo[0] = 0; // Caso base: 0 moedas são necessárias para o valor 0

    for (let i = 1; i <= c; i++) { // Itera sobre todos os valores de 1 até c
        for (let coin of v) { // Itera sobre cada moeda disponível
            if (i - coin >= 0) { // Verifica se a moeda pode ser usada para o valor atual
                memo[i] = Math.min(memo[i], memo[i - coin] + 1); // Atualiza o mínimo de moedas necessárias
            }
        }
    }

    return memo[c] === Infinity ? -1 : memo[c]; // Retorna -1 se não for possível formar o valor, caso contrário retorna o mínimo de moedas
}

// Exemplo de uso:
const coins = [1, 2, 5]; // Array de moedas disponíveis
const amount = 11; // Valor alvo
console.log(minCoins(coins, amount)); // Output: 3 (11 = 5 + 5 + 1)