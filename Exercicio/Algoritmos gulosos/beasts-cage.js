/**
 * @param {number} c
 * @param {number} s
 * @param {number[]} m
 */

var minimumImbalance = function (c, s, m) {

    let a = 0;

    for (let i = 0; i < s; i++) { // percorre o array

        a += m[i]; // soma dos elementos
    }

    a /= c; // média

    if (s < 2 * c) {
        let dummies = 2 * c - s; // calcula o número de espaços vazios

        for (let j = 0; j < dummies; j++) { // percorre o número de espaços vazios

            m.push(a); // adiciona espaços vazios com valor igual à média
        }
    }

    m.sort((x, y) => x - y); // ordena o array

    let chambers = []; // array para armazenar as câmaras

    for (let k = 0; k < c; k++) { // percorre o número de câmaras

        chambers[k] = []; // inicializa cada câmara como um array vazio
        chambers[k].push(m[k]); // adiciona o menor elemento à câmara
        chambers[k].push(m[2 * c - 1 - k]); // adiciona o maior elemento à câmara
    }

    let imbalance = 0; // inicializa o desequilíbrio

    for (let l = 0; l < c; l++) { // percorre cada câmara

        let xi = 0; // soma dos elementos na câmara l

        for (let n = 0; n < chambers[l].length; n++) { // percorre os elementos da câmara l

            xi += chambers[l][n]; // soma os elementos da câmara l
        }

        imbalance += Math.abs(xi - a); // calcula o desequilíbrio e acumula o valor
    }

    return imbalance; // retorna o desequilíbrio mínimo
};

console.log(minimumImbalance(3, 5, [1, 2, 3, 4, 5])); // 3
console.log(minimumImbalance(2, 4, [10, 20, 30, 40])); // 20
console.log(minimumImbalance(4, 8, [5, 1, 3, 2, 8, 7, 4, 6])); // 0
