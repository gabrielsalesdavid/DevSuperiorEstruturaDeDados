/**
 * @param {number} n
 * @param {number} k
 * @param {number []} people
 */

function numRescueBoats(n, k, people) {
    people.sort((a, b) => a - b); // Ordena o array de pessoas em ordem crescente de peso
    let left = 0; // Ponteiro para a pessoa mais pesada
    let right = n - 1; // Ponteiro para a pessoa mais leve
    let boats = 0; // Contador de barcos necessários

    while (left <= right) { // Enquanto os ponteiros esquerdo e direito não se cruzarem
        if (people[left] + people[right] <= k) { // Verifica se a soma dos pesos das duas pessoas cabe em um barco
            left++; // Move o ponteiro esquerdo se a soma dos pesos for menor ou igual à capacidade do barco
        }

        right--; // Sempre move o ponteiro direito, pois essa pessoa sempre ocupará um barco
        boats++; // Cada iteração representa um barco utilizado
    }

    return boats; // Retorna o número mínimo de barcos necessários
}

module.exports = numRescueBoats;
console.log(numRescueBoats(4, 5, [3, 2, 2, 1])); // Output: 3
console.log(numRescueBoats(3, 3, [3, 2, 2]));    // Output: 3
console.log(numRescueBoats(5, 6, [3, 5, 3, 4])); // Output: 4
console.log(numRescueBoats(6, 8, [2, 4, 5, 6])); // Output: 3
console.log(numRescueBoats(7, 10, [1, 2, 3, 4, 5])); // Output: 3
console.log(numRescueBoats(5, 7, [4, 2, 3, 5, 1])); // Output: 3