class FloydWarshall {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.graph = graph; // Graph should have methods getAllNodes() and getEdgeWeight(from, to)
        this.distances = {}; // To store shortest distances between all pairs of nodes
        this.next = {}; // To reconstruct the shortest paths
        this._initialize(); // Initialize distances and next matrices
        this._computeShortestPaths(); // Compute shortest paths using Floyd-Warshall algorithm
    }

    _initialize() { // Initialize distances and next matrices
        const nodes = this.graph.getAllNodes(); // Get all nodes in the graph

        for (const i of nodes) { // Iterate through each node
            this.distances[i] = {}; // Initialize distances matrix
            this.next[i] = {}; // Initialize next matrix
            for (const j of nodes) { // Iterate through all pairs (i, j)
                if (i === j) { // Distance to self is zero
                    this.distances[i][j] = 0; // Distance to self is zero
                } else {
                    const weight = this.graph.getEdgeWeight(i, j); // Get weight of edge from i to j
                    if (weight !== undefined) { // If there is a direct edge from i to j
                        this.distances[i][j] = weight; // Set initial distance to edge weight
                        this.next[i][j] = j; // Next node in path from i to j is j
                    } else {
                        this.distances[i][j] = Infinity; // No direct edge, set to infinity
                        this.next[i][j] = null; // No next node
                    }
                }
            }
        }
    }

    _computeShortestPaths() { // Compute shortest paths using Floyd-Warshall algorithm
        const nodes = this.graph.getAllNodes(); // Get all nodes in the graph

        for (const k of nodes) { // Iterate through each intermediate node
            for (const i of nodes) { // Iterate through all pairs (i, j)
                for (const j of nodes) { // Iterate through all pairs (i, j)
                    if (this.distances[i][k] + this.distances[k][j] < this.distances[i][j]) { // If a shorter path is found
                        this.distances[i][j] = this.distances[i][k] + this.distances[k][j]; // Update distance
                        this.next[i][j] = this.next[i][k]; // Update next node
                    }
                }
            }
        }
    }

    getShortestPath(from, to) { // Public method to get the shortest path from 'from' to 'to'
        if (this.next[from][to] === null) { // No path exists
            return { path: [], distance: Infinity }; // No path exists
        }

        const path = []; // To store the reconstructed path
        let currentNode = from; // Start from the 'from' node
        while (currentNode !== to) { // Reconstruct the path
            path.push(currentNode); // Add current node to path
            currentNode = this.next[currentNode][to]; // Move to next node
        }
        path.push(to); // Add destination node to path

        return { path, distance: this.distances[from][to] }; // Return the path and its distance
    }
}

// Example usage:
const graph = new Graph(); // Assume Graph is a predefined class with addEdge, getAllNodes, and getEdgeWeight methods
graph.addEdge(1, 2, 1); // Add edge from node 1 to node 2 with weight 1
graph.addEdge(1, 3, 4);
graph.addEdge(2, 4, 2);
graph.addEdge(3, 4, 1);
const floydWarshall = new FloydWarshall(graph); // Create an instance of FloydWarshall
console.log(floydWarshall.getShortestPath(1, 4)); // Output: { path: [1, 2, 4], distance: 3 }

module.exports = FloydWarshall; // Export the FloydWarshall class for use in other modules