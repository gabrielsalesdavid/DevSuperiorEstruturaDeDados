const minPaths = function (m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(0)); // Cria uma matriz 2D para armazenar o número de caminhos para cada célula
    dp[0][0] = 1; // Há um caminho para chegar à célula inicial

    for (let i = 0; i < m; i++) { // Itera sobre cada linha da grade
        for (let j = 0; j < n; j++) { // Itera sobre cada célula da grade
            if (i > 0) dp[i][j] += dp[i - 1][j]; // Soma os caminhos vindos da esquerda
            if (j > 0) dp[i][j] += dp[i][j - 1]; // Soma os caminhos vindos de cima e da esquerda
        }
    }

    return dp[m - 1][n - 1]; // Retorna o número de caminhos mínimos para chegar ao canto inferior direito
};

// Exemplo de uso:
console.log(minPaths(3, 3)); // Saída: 6
console.log(minPaths(2, 2)); // Saída: 2
console.log(minPaths(4, 4)); // Saída: 20
console.log(minPaths(2, 3)); // Saída: 3
console.log(minPaths(100, 100)); // Saída: 1000000000