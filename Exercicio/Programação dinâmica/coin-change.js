const minCoins = (coins, amount) => { // Função para calcular o número mínimo de moedas
    const dp = Array(amount + 1).fill(Infinity); // Inicializa o array dp com Infinity
    dp[0] = 0; // Base case: 0 moedas são necessárias para o valor 0

    for (let coin of coins) { // Itera sobre cada moeda disponível
        for (let x = coin; x <= amount; x++) { // Atualiza o dp para cada valor possível
            dp[x] = Math.min(dp[x], dp[x - coin] + 1); // Escolhe o mínimo entre o valor atual e o valor usando a moeda atual
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; // Retorna -1 se não for possível formar o valor, caso contrário retorna o número mínimo de moedas
};

// Exemplo de uso:
const coins = [1, 2, 5]; // Moedas disponíveis
const amount = 11; // Valor alvo
console.log(minCoins(coins, amount)); // Saída: 3 (11 = 5 + 5 + 1)
module.exports = minCoins; // Exporta a função para uso em outros módulos