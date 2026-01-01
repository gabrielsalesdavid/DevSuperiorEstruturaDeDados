class RelaxacaoAresta {
    constructor(grafo) { // grafo é esperado ser uma instância de uma classe Graph
        this.grafo = grafo; // grafo deve ser uma instância de uma classe Graph
        this.distancias = {}; // Objeto para armazenar as distâncias mínimas
    }

    relaxarAresta(origem, destino, peso) { // Método para relaxar uma aresta
        // Se a distância da origem mais o peso da aresta for menor que a distância atual do destino
        if (this.distancias[origem] + peso < (this.distancias[destino] || Infinity)) { // Verifica se a distância do destino pode ser atualizada
            this.distancias[destino] = this.distancias[origem] + peso; // Atualiza a distância do destino
            return true; // Indica que a aresta foi relaxada
        }
        return false; // Indica que a aresta não foi relaxada
    }

    inicializarDistancias(inicio) { // Método para inicializar as distâncias
        // Inicializa todas as distâncias como infinito, exceto a do nó inicial
        for (const no of this.grafo.getNos()) { // Suponha que getNos() retorna todos os nós do grafo
            this.distancias[no] = Infinity; // Define a distância inicial como infinito
        }
        this.distancias[inicio] = 0; // Distância do nó inicial para ele mesmo é 0
    }
}

// Exemplo de uso:
const grafo = new Graph(); // Suponha que Graph seja uma classe pré-definida com métodos addEdge e getNos
grafo.addEdge('A', 'B', 1); // Adiciona aresta de A para B com peso 1
grafo.addEdge('A', 'C', 4);
grafo.addEdge('B', 'C', 2);
const relaxacao = new RelaxacaoAresta(grafo); // Cria uma instância de RelaxacaoAresta
relaxacao.inicializarDistancias('A'); // Inicializa distâncias a partir do nó 'A'
relaxacao.relaxarAresta('A', 'B', 1); // Relaxa a aresta de A para B
relaxacao.relaxarAresta('B', 'C', 2); // Relaxa a aresta de B para C
console.log(relaxacao.distancias); // Output: { A: 0, B: 1, C: 3 }

module.exports = RelaxacaoAresta; // Exporta a classe RelaxacaoAresta para uso em outros módulos

grafo = {
    nos: new Set(), // Para armazenar nós únicos
    arestas: [], // Para armazenar arestas do grafo

    adicionarAresta(origem, destino, peso) { // Método para adicionar uma aresta ao grafo
        this.nos.add(origem); // Adiciona o nó de origem ao conjunto de nós
        this.nos.add(destino); // Adiciona o nó de destino ao conjunto de nós
        this.arestas.push({ origem, destino, peso }); // Adiciona a aresta à lista de arestas
    },

    getNos() { // Método para obter todos os nós do grafo
        return Array.from(this.nos); // Converte o conjunto de nós em um array e o retorna
    },

    getArestasDeNo(no) { // Método para obter todas as arestas que se originam de um nó específico
        return this.arestas.filter(aresta => aresta.origem === no); // Retorna arestas onde o nó de origem corresponde ao nó especificado
    }
};

// Exemplo de uso:
const relax = new RelaxacaoAresta(grafo); // Cria uma instância de RelaxacaoAresta
relax.inicializarDistancias('A'); // Inicializa distâncias a partir do nó 'A'
relax.relaxarAresta('A', 'B', 1); // Relaxa a aresta de A para B
relax.relaxarAresta('B', 'C', 2); // Relaxa a aresta de B para C
console.log(relax.distancias); // Output: { A: 0, B: 1, C: 3 }
module.exports = grafo; // Exporta o grafo para uso em outros módulos