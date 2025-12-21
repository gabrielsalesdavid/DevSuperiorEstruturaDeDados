/**
 * @param {number} v
 * @param {number} n
 * @param {number[]} coins
 */

var minimumCoins = function(v, n, coins) {

    coins.sort((a, b) => b - a); // ordena as moedas em ordem decrescente

    let count = 0;
    let list = [];

    for (let i = 0; i < n; i++) {

        while (v >= coins[i]) { // enquanto o valor for maior ou igual a moeda atual

            v -= coins[i]; // subtrai o valor da moeda atual do valor total
            count++;
            list.push(coins[i]); // adiciona a moeda atual à lista de moedas usadas
        }
    }

    return `${count}(${list.join(", ")})`; // retorna o número mínimo de moedas e a lista de moedas usadas
};

console.log(minimumCoins(37, 4, [25, 10, 5, 1]));