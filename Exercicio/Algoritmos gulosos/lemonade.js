/**
 * @param {number} n
 * @param {number[]} bills
 * @param {boolean}
 */

var lemonadeChange = function (n, bills) {
    let five = 0; // Contador para notas de 5
    let ten = 0; // Contadores para notas de 5 e 10

    for (let i = 0; i < n; i++) { // Percorre cada cliente

        if (bills[i] === 5) { // Se o cliente pagar com uma nota de 5
            five++; // Recebe uma nota de 5

        } else if (bills[i] === 10) { // Se o cliente pagar com uma nota de 10

            if (five === 0) { // Se não tiver nota de 5
                return false; // Não há troco suficiente
            }

            five--; // Dá troco com uma nota de 5
            ten++; // Recebe uma nota de 10

        } else { // bills[i] === 20

            if (ten > 0 && five > 0) { // Se tiver nota de 10 e 5
                ten--; // Dá troco com uma nota de 10 e uma de 5
                five--; // Dá troco com uma nota de 10 e uma de 5

            } else if (five >= 3) { // Se não tiver nota de 10
                five -= 3; // Dá troco com três notas de 5

            } else { // Não há troco suficiente
                return false; // Não há troco suficiente
            }
        }
    }

    return true; // Se conseguir dar troco para todos os clientes
};

// Example usage:
console.log(lemonadeChange(5, [5, 5, 5, 10, 20])); // true
console.log(lemonadeChange(5, [5, 5, 10, 10, 20])); // false