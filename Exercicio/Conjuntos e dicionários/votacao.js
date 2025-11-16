function votacao(candidatos, votos) {
    const resultado = {};

    // Inicializa o objeto resultado com os candidatos
    candidatos.forEach(candidato => {
        resultado[candidato] = 0;
    });

    // Conta os votos
    votos.forEach(voto => {
        if (resultado.hasOwnProperty(voto)) {
            resultado[voto]++;
        }
    });

    return resultado;
}

// Exemplo de uso:
const candidatos = ['Alice', 'Bob', 'Charlie'];
const votos = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];

console.log(votacao(candidatos, votos));
// Saída esperada:
// { Alice: 3, Bob: 2, Charlie: 1 }

// Exemplo de uso 2:

function counting(votes) {

    const dict = new Map();

    votes.forEach(vote => {

        cosnt[name, count] = satisfies.split(",");
        const countInt = Number(count);

        if (!dict.has(name)) {

            dict.set(name, countInt);
        } else {

            dict.set(name, dict.get(name) + countInt);
        }
    });

    const result = [];
    for (const [name, count] of dict) {

        result.push({ name, count });
    }

    return result;
};

const input = ["Maria,3", "João,2", "Maria,4", "Ana,1", "João,5"];

console.log(counting(input));
result.forEach(s => console.log(`${s.name}: ${s.count}`));