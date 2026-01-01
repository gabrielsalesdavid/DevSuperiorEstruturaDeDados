class Kruskal {
    constructor(vertices) { // Inicializa o grafo com o número de vértices
        this.V = vertices; // Número de vértices
        this.graph = []; // Lista de arestas
    }

    addEdge(u, v, w) { // Adiciona uma aresta ao grafo
        this.graph.push({ u: u, v: v, w: w }); // u: vértice inicial, v: vértice final, w: peso da aresta
    }

    find(parent, i) { // Função auxiliar para encontrar o conjunto de um elemento i
        if (parent[i] === i) { // Se i é o pai de si mesmo, retorna i
            return i; // Se i é o pai de si mesmo, retorna i
        }
        return this.find(parent, parent[i]); // Chamada recursiva para encontrar o pai
    }

    union(parent, rank, x, y) { // Função auxiliar para unir dois conjuntos
        const xroot = this.find(parent, x); // Encontra o conjunto de x
        const yroot = this.find(parent, y); // Encontra o conjunto de y

        if (rank[xroot] < rank[yroot]) { // Se o rank de xroot é menor que o de yroot
            parent[xroot] = yroot; // Faz yroot o pai de xroot
        } else if (rank[xroot] > rank[yroot]) { // Se o rank de xroot é maior que o de yroot
            parent[yroot] = xroot; // Faz xroot o pai de yroot
        } else { // Se os ranks são iguais
            parent[yroot] = xroot; // Faz xroot o pai de yroot
            rank[xroot]++; // Incrementa o rank de xroot
        }
    }

    kruskalMST() { // Função principal para encontrar a Árvore Geradora Mínima usando o algoritmo de Kruskal
        const result = []; // Armazena as arestas da Árvore Geradora Mínima
        let e = 0; // Contador de arestas na Árvore Geradora Mínima
        let i = 0; // Índice usado para ordenar as arestas

        // Ordena todas as arestas em ordem crescente de peso
        this.graph.sort((a, b) => a.w - b.w);

        const parent = []; // Array para armazenar o pai de cada vértice
        const rank = []; // Array para armazenar o rank de cada vértice

        // Inicializa os arrays parent e rank
        for (let v = 0; v < this.V; v++) {
            parent[v] = v; // Cada vértice é seu próprio pai inicialmente
            rank[v] = 0; // Inicializa o rank como 0
        }

        // Loop até que a Árvore Geradora Mínima tenha V-1 arestas
        while (e < this.V - 1) {
            const nextEdge = this.graph[i++]; // Pega a próxima aresta

            const x = this.find(parent, nextEdge.u); // Encontra o conjunto do vértice u
            const y = this.find(parent, nextEdge.v); // Encontra o conjunto do vértice v

            // Se u e v pertencem a conjuntos diferentes, inclui a aresta na Árvore Geradora Mínima
            if (x !== y) {
                result.push(nextEdge); // Adiciona a aresta ao resultado
                this.union(parent, rank, x, y); // Une os dois conjuntos
                e++; // Incrementa o contador de arestas na Árvore Geradora Mínima
            }
        }

        return result; // Retorna as arestas da Árvore Geradora Mínima
    }
}

// Exemplo de uso:
const g = new Kruskal(4); // Cria um grafo com 4 vértices
g.addEdge(0, 1, 10); // Adiciona arestas ao grafo
g.addEdge(0, 2, 6);
g.addEdge(0, 3, 5);
g.addEdge(1, 3, 15);
g.addEdge(2, 3, 4);

const mst = g.kruskalMST(); // Calcula a Árvore Geradora Mínima
console.log("Arestas na Árvore Geradora Mínima:");
mst.forEach(edge => {
    console.log(`${edge.u} -- ${edge.v} == ${edge.w}`);
});

module.exports = Kruskal;