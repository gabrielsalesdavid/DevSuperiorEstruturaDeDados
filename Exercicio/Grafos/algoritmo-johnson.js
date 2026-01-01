class AlgoritmoJohnson {
    constructor(grafo) {
        this.grafo = grafo; // Grafo original
        this.novoGrafo = null; // Grafo com pesos reweightados
        this.h = []; // Array para armazenar os valores h(v)
    }

    adicionarVerticeExtra() {
        const novoVertice = this.grafo.adicionarVertice('q'); // Adiciona um novo vértice 'q'
        for (let vertice of this.grafo.getVertices()) { // Adiciona arestas de 'q' para todos os outros vértices com peso 0
            if (vertice !== novoVertice) { // Evita adicionar aresta para ele mesmo
                this.grafo.adicionarAresta(novoVertice, vertice, 0); // Peso 0
            }
        }
        return novoVertice; // Retorna o novo vértice adicionado
    }

    bellmanFord(origem) {
        const distancias = {}; // Inicializa as distâncias
        for (let vertice of this.grafo.getVertices()) { // Define todas as distâncias como infinito
            distancias[vertice] = Infinity; // Distância inicial
        }
        distancias[origem] = 0; // Distância do vértice de origem para ele mesmo é 0

        const arestas = this.grafo.getArestas(); // Obtém todas as arestas do grafo
        const numVertices = this.grafo.getVertices().length; // Número de vértices no grafo

        for (let i = 0; i < numVertices - 1; i++) { // Relaxa todas as arestas |V| - 1 vezes
            for (let aresta of arestas) { // Para cada aresta
                const { origem, destino, peso } = aresta; // Desestruturação da aresta
                if (distancias[origem] + peso < distancias[destino]) { // Verifica se a distância pode ser melhorada
                    distancias[destino] = distancias[origem] + peso; // Atualiza a distância
                }
            }
        }

        for (let aresta of arestas) { // Verifica a existência de ciclos de peso negativo
            const { origem, destino, peso } = aresta; // Desestruturação da aresta
            if (distancias[origem] + peso < distancias[destino]) { // Se ainda puder relaxar, há um ciclo negativo
                throw new Error('O grafo contém um ciclo de peso negativo'); // Lança um erro
            }
        }

        return distancias; // Retorna as distâncias calculadas
    }

    reweightEdges() {
        for (let aresta of this.grafo.getArestas()) { // Reweight todas as arestas do grafo
            const { origem, destino, peso } = aresta; // Desestruturação da aresta
            const novoPeso = peso + this.h[origem] - this.h[destino]; // Calcula o novo peso
            this.novoGrafo.adicionarAresta(origem, destino, novoPeso); // Adiciona a aresta com o novo peso ao novo grafo
        }
    }

    dijkstra(origem) {
        const distancias = {}; // Inicializa as distâncias
        const visitados = new Set(); // Conjunto para rastrear vértices visitados
        const pq = new MinHeap(); // Fila de prioridade para o algoritmo de Dijkstra

        for (let vertice of this.novoGrafo.getVertices()) { // Define todas as distâncias como infinito
            distancias[vertice] = Infinity; // Distância inicial
        }
        distancias[origem] = 0; // Distância do vértice de origem para ele mesmo é 0
        pq.insert({ vertice: origem, distancia: 0 }); // Insere o vértice de origem na fila de prioridade

        while (!pq.isEmpty()) { // Enquanto a fila de prioridade não estiver vazia
            const { vertice: u } = pq.extractMin(); // Extrai o vértice com a menor distância
            if (visitados.has(u)) continue; // Se já foi visitado, pula
            visitados.add(u); // Marca o vértice como visitado

            for (let aresta of this.novoGrafo.getArestasDe(u)) { // Para cada aresta do vértice atual
                const { destino: v, peso } = aresta; // Desestruturação da aresta
                if (distancias[u] + peso < distancias[v]) { // Verifica se a distância pode ser melhorada
                    distancias[v] = distancias[u] + peso; // Atualiza a distância
                    pq.insert({ vertice: v, distancia: distancias[v] }); // Insere o vértice atualizado na fila de prioridade
                }
            }
        }

        return distancias; // Retorna as distâncias calculadas
    }

    executar() {
        const verticeExtra = this.adicionarVerticeExtra(); // Adiciona o vértice extra 'q'
        this.h = this.bellmanFord(verticeExtra); // Executa o Bellman-Ford a partir do vértice extra
        this.grafo.removerVertice(verticeExtra); // Remove o vértice extra do grafo

        this.novoGrafo = new Grafo(); // Cria um novo grafo para armazenar os pesos reweightados
        for (let vertice of this.grafo.getVertices()) { // Adiciona todos os vértices do grafo original ao novo grafo
            this.novoGrafo.adicionarVertice(vertice); // Adiciona o vértice
        }
        this.reweightEdges(); // Reweight todas as arestas do grafo

        const resultados = {}; // Objeto para armazenar os resultados finais
        for (let vertice of this.grafo.getVertices()) { // Executa Dijkstra para cada vértice no grafo original
            const distanciasReweight = this.dijkstra(vertice); // Obtém as distâncias reweightadas
            resultados[vertice] = {}; // Inicializa o objeto para o vértice atual
            for (let destino of this.grafo.getVertices()) { // Ajusta as distâncias para os pesos originais
                resultados[vertice][destino] = distanciasReweight[destino] - this.h[vertice] + this.h[destino]; // Ajusta a distância
            }
        }

        return resultados; // Retorna os resultados finais
    }
}

class MinHeap { // Implementação simples de um Min-Heap para a fila de prioridade
    constructor() { // Inicializa o heap vazio
        this.heap = []; // Array para armazenar os elementos do heap
    }

    insert(node) { // Insere um novo nó no heap
        this.heap.push(node); // Adiciona o nó ao final do array
        this.bubbleUp(this.heap.length - 1); // Ajusta a posição do nó para manter a propriedade do heap
    }

    bubbleUp(index) { // Ajusta a posição do nó para cima
        while (index > 0) { // Enquanto não for a raiz
            const parentIndex = Math.floor((index - 1) / 2); // Índice do pai
            if (this.heap[index].distancia >= this.heap[parentIndex].distancia) break; // Se a propriedade do heap estiver satisfeita, sai
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // Troca o nó com o pai
            index = parentIndex; // Atualiza o índice para o pai
        }
    }

    extractMin() { // Extrai o nó com a menor distância
        if (this.heap.length === 0) return null; // Se o heap estiver vazio, retorna null
        const min = this.heap[0]; // O menor nó está na raiz
        const end = this.heap.pop(); // Remove o último nó
        if (this.heap.length > 0) { // Se ainda houver nós no heap
            this.heap[0] = end; // Move o último nó para a raiz
            this.sinkDown(0); // Ajusta a posição do nó para baixo
        }
        return min; // Retorna o nó com a menor distância
    }

    sinkDown(index) { // Ajusta a posição do nó para baixo
        const length = this.heap.length; // Tamanho do heap
        const element = this.heap[index]; // Nó atual

        while (true) { // Loop infinito até encontrar a posição correta
            let leftChildIndex = 2 * index + 1; // Índice do filho esquerdo
            let rightChildIndex = 2 * index + 2; // Índice do filho direito
            let leftChild, rightChild; // Nós filhos
            let swap = null; // Índice para troca

            if (leftChildIndex < length) { // Se o filho esquerdo existir
                leftChild = this.heap[leftChildIndex]; // Obtém o filho esquerdo
                if (leftChild.distancia < element.distancia) { // Verifica se a propriedade do heap está violada
                    swap = leftChildIndex; // Marca para troca
                }
            }

            if (rightChildIndex < length) { // Se o filho direito existir
                rightChild = this.heap[rightChildIndex]; // Obtém o filho direito
                if (
                    (swap === null && rightChild.distancia < element.distancia) || // Verifica se a propriedade do heap está violada
                    (swap !== null && rightChild.distancia < leftChild.distancia) // Verifica se o filho direito é menor que o filho esquerdo
                ) {
                    swap = rightChildIndex; // Marca para troca
                }
            }

            if (swap === null) break; // Se nenhuma troca for necessária, sai do loop
            this.heap[index] = this.heap[swap]; // Realiza a troca
            this.heap[swap] = element; // Atualiza o nó atual
            index = swap; // Atualiza o índice para continuar o processo
        }
    }

    isEmpty() {
        return this.heap.length === 0; // Verifica se o heap está vazio
    }
}

module.exports = AlgoritmoJohnson; // Exporta a classe AlgoritmoJohnson

grafo = {
    vertices: new Set(), // Para armazenar vértices únicos
    arestas: [], // Para armazenar arestas do grafo

    adicionarVertice(vertice) { // Método para adicionar um vértice ao grafo
        this.vertices.add(vertice); // Adiciona o vértice ao conjunto de vértices
    },

    adicionarAresta(origem, destino, peso) { // Método para adicionar uma aresta ao grafo
        this.adicionarVertice(origem); // Garante que o vértice de origem está no grafo
        this.adicionarVertice(destino); // Garante que o vértice de destino está no grafo
        this.arestas.push({ origem, destino, peso }); // Adiciona a aresta à lista de arestas
    },

    getVertices() { // Método para obter todos os vértices do grafo
        return Array.from(this.vertices); // Converte o conjunto de vértices em um array e o retorna
    },

    getArestas() { // Método para obter todas as arestas do grafo
        return this.arestas; // Retorna a lista de arestas
    },

    getArestasDe(vertice) { // Método para obter todas as arestas que se originam de um vértice específico
        return this.arestas.filter(aresta => aresta.origem === vertice); // Retorna arestas onde o vértice de origem corresponde ao vértice especificado
    },

    removerVertice(vertice) { // Método para remover um vértice do grafo
        this.vertices.delete(vertice); // Remove o vértice do conjunto de vértices
        this.arestas = this.arestas.filter(aresta => aresta.origem !== vertice && aresta.destino !== vertice); // Remove todas as arestas associadas ao vértice
    }
};

module.exports = grafo; // Exporta o grafo para uso em outros módulos