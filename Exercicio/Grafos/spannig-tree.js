class SpanningTree {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.graph = graph; // Graph should have methods getEdges() and getNodes()
        this.parent = {}; // For union-find
        this.rank = {}; // For union-find
    }

    prim() { // Prim's algorithm to find the Minimum Spanning Tree (MST)
        const nodes = this.graph.getNodes(); // Get all nodes in the graph
        const mst = []; // To store the edges of the MST
        const visited = new Set(); // To track visited nodes
        const edges = this.graph.getEdges(); // Get all edges in the graph

        // Start with the first node
        visited.add(nodes[0]); // Mark the first node as visited

        while (visited.size < nodes.length) { // While not all nodes are visited
            let minEdge = null; // To store the edge with the minimum weight
            let minWeight = Infinity; // Initialize minimum weight to infinity

            for (const edge of edges) { // Iterate through all edges
                const { from, to, weight } = edge; // Destructure edge
                if ((visited.has(from) && !visited.has(to)) || (visited.has(to) && !visited.has(from))) { // Check if the edge connects a visited node to an unvisited node
                    if (weight < minWeight) { // Check for minimum weight edge
                        minWeight = weight; // Update minimum weight
                        minEdge = edge; // Select the edge with the minimum weight
                    }
                }
            }

            if (minEdge) { // If a valid edge is found
                mst.push(minEdge); // Add the selected edge to the MST
                visited.add(minEdge.from); // Add both nodes of the edge to visited
                visited.add(minEdge.to); // Add both nodes of the edge to visited
            }
        }

        return mst; // Return the edges of the Minimum Spanning Tree
    }

    find(node) { // Union-Find 'find' with path compression
        if (this.parent[node] !== node) { // Path compression
            this.parent[node] = this.find(this.parent[node]); // Recursively find the root
        }
        return this.parent[node]; // Return the root of the set
    }

    union(node1, node2) { // Union-Find 'union' by rank
        const root1 = this.find(node1); // Find the roots of the sets
        const root2 = this.find(node2); // Find the roots of the sets

        if (root1 !== root2) { // Only union if they are in different sets
            if (this.rank[root1] > this.rank[root2]) { // Union by rank
                this.parent[root2] = root1; // Make root1 the parent of root2
            } else if (this.rank[root1] < this.rank[root2]) { // Union by rank
                this.parent[root1] = root2; // Make root2 the parent of root1
            } else {
                this.parent[root2] = root1; // Make root1 the parent of root2
                this.rank[root1]++; // Increase the rank of root1
            }
        }
    }

    kruskal() { // Kruskal's algorithm to find the Minimum Spanning Tree (MST)
        const edges = this.graph.getEdges().sort((a, b) => a.weight - b.weight); // Sort edges by weight
        const mst = []; // To store the edges of the MST
        
        for (const node of this.graph.getNodes()) { // Initialize union-find structure
            this.parent[node] = node; // Each node is its own parent initially
            this.rank[node] = 0; // Initial rank is 0
        }

        for (const edge of edges) { // Process each edge in sorted order
            const { from, to, weight } = edge; // Destructure edge
            if (this.find(from) !== this.find(to)) { // If from and to are in different sets
                this.union(from, to); // Union the sets
                mst.push(edge); // Add edge to MST
            }
        }

        return mst; // Return the edges of the Minimum Spanning Tree
    }
}

module.exports = SpanningTree; // Export the SpanningTree class for use in other modules
graph = {
    nodes: new Set(), // To store unique nodes
    edges: [], // To store edges in the graph

    addEdge(from, to, weight) { // Method to add an edge to the graph
        this.nodes.add(from); // Add the 'from' node to the set of nodes
        this.nodes.add(to); // Add the 'to' node to the set of nodes
        this.edges.push({ from, to, weight }); // Add the edge to the edges list
    },

    getNodes() { // Method to get all nodes in the graph
        return Array.from(this.nodes); // Convert the set of nodes to an array and return it
    },

    getEdges() { // Method to get all edges in the graph
        return this.edges; // Return the list of edges
    }
};

// Example usage:
const spanningTree = new SpanningTree(graph); // Create an instance of SpanningTree
graph.addEdge('A', 'B', 1); // Add edges to the graph
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
const mstPrim = spanningTree.prim(); // Get MST using Prim's algorithm
console.log('MST using Prim:', mstPrim); // Output the MST from Prim's algorithm
const mstKruskal = spanningTree.kruskal(); // Get MST using Kruskal's algorithm
console.log('MST using Kruskal:', mstKruskal); // Output the MST from Kruskal's algorithm

module.exports = graph; // Export the graph for use in other modules

class RelaxacaoAresta {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.grafo = graph; // Graph should have methods getEdges() and getNos()
        this.distancias = {}; // Object to store minimum distances
    }

    relaxarAresta(origem, destino, peso) { // Method to relax an edge
        // If the distance from the origin plus the edge weight is less than the current distance to the destination
        if (this.distancias[origem] + peso < (this.distancias[destino] || Infinity)) { // Check if the destination distance can be updated
            this.distancias[destino] = this.distancias[origem] + peso; // Update the distance to the destination
            return true; // Indicate that the edge was relaxed
        }
        return false; // Indicate that the edge was not relaxed
    }

    inicializarDistancias(inicio) { // Method to initialize distances
        // Initialize all distances as infinity, except for the starting node
        for (const no of this.grafo.getNos()) { // Assume getNos() returns all nodes in the graph
            this.distancias[no] = Infinity; // Set initial distance as infinity
        }
        this.distancias[inicio] = 0; // Distance from the starting node to itself is 0
    }
}

// Example usage:
const grafo = new Graph(); // Assume Graph is a predefined class with methods addEdge and getNos
grafo.addEdge('A', 'B', 1); // Add edge from A to B with weight 1
grafo.addEdge('A', 'C', 4);
grafo.addEdge('B', 'C', 2);
const relaxacao = new RelaxacaoAresta(grafo); // Create an instance of RelaxacaoAresta
relaxacao.inicializarDistancias('A'); // Initialize distances from node 'A'
relaxacao.relaxarAresta('A', 'B', 1); // Relax the edge from A to B
relaxacao.relaxarAresta('B', 'C', 2); // Relax the edge from B to C
console.log(relaxacao.distancias); // Output: { A: 0, B: 1, C: 3 }

module.exports = RelaxacaoAresta; // Export the RelaxacaoAresta class for use in other modules