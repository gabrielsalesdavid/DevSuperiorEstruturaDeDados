const countPaths = function (m, n) {
    let memo = Array.from({ length: m }, () => Array(n).fill(0)); // Cria uma matriz 2D para armazenar o número de caminhos para cada célula

    for (let i = 0; i < m; i++) { // Itera sobre cada linha da grade
        for (let j = 0; j < n; j++) { // Itera sobre cada célula da grade
            if (i === 0 && j === 0) {
                memo[i][j] = 1; // Há um caminho para chegar à célula inicial
            } else {
                let pathsFromAbove = i > 0 ? memo[i - 1][j] : 0; // Caminhos vindos de cima
                let pathsFromLeft = j > 0 ? memo[i][j - 1] : 0; // Caminhos vindos da esquerda
                memo[i][j] = pathsFromAbove + pathsFromLeft; // Soma os caminhos vindos de cima e da esquerda
            }
        }
    }

    return memo[m - 1][n - 1]; // Retorna o número de caminhos mínimos para chegar ao canto inferior direito
};

// Exemplo de uso:
console.log(countPaths(3, 3)); // Saída: 6
console.log(countPaths(2, 2)); // Saída: 2
console.log(countPaths(4, 4)); // Saída: 20
console.log(countPaths(3, 5)); // Saída: 10
console.log(countPaths(2, 3)); // Saída: 3
console.log(countPaths(100, 100)); // Saída: 1000000000
