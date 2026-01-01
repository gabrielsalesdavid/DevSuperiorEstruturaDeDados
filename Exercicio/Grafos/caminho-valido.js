class CaminhoValido {
    constructor(grafo) { // grafo representado como um objeto de adjacência
        this.grafo = grafo; // ex: { A: ['B', 'C'], B: ['A', 'D'], ... }
    }

    ehCaminhoValido(caminho) { // caminho representado como um array de vértices
        for (let i = 0; i < caminho.length - 1; i++) { // percorre cada par de vértices consecutivos
            const verticeAtual = caminho[i]; // vértice atual
            const proximoVertice = caminho[i + 1]; // próximo vértice

            if (!this.grafo[verticeAtual] || !this.grafo[verticeAtual].includes(proximoVertice)) { // verifica se há uma aresta entre os dois vértices
                return false; // se não houver, o caminho não é válido
            }
        }
        return true; // se todas as arestas existirem, o caminho é válido
    }
}

// Exemplo de uso:
const grafo = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
}; // grafo de exemplo

const caminhoValido = new CaminhoValido(grafo); // cria uma instância da classe
console.log(caminhoValido.ehCaminhoValido(['A', 'B', 'D'])); // true
console.log(caminhoValido.ehCaminhoValido(['A', 'C', 'B'])); // false

module.exports = CaminhoValido; // exporta a classe para uso em outros arquivos
grafo = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};

const caminhoValid = new CaminhoValido(grafo);
console.log(caminhoValid.ehCaminhoValido(['A', 'B', 'D'])); // true
console.log(caminhoValid.ehCaminhoValido(['A', 'C', 'B'])); // false

module.exports = CaminhoValido; // exporta a classe para uso em outros arquivos