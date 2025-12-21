/**
 * @param {number} n
 * @param {string} field
*/

var minScarecrows = function (n, field) {

    let scarecrows = 0; // contador de espantalhos
    let i = 0; // índice para percorrer o campo

    while (i < n) { // enquanto o índice for menor que o tamanho do campo

        if (field[i] === '.') { // se a posição atual for um espaço vazio

            scarecrows++; // incrementa o contador de espantalhos
            i += 3; // pula as próximas duas posições, pois o espantalho cobre três posições

        } else {

            i++; // move para a próxima posição
        }
    }

    return scarecrows; // retorna o número mínimo de espantalhos necessários
};

console.log(minScarecrows(11, '..X..X.....')); // 3
console.log(minScarecrows(6, 'X..X..')); // 2
console.log(minScarecrows(5, '.....')); // 2
console.log(minScarecrows(7, 'XXXXXXX')); // 0
console.log(minScarecrows(10, '.X..X..X..')); // 4