class BellmanFord {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.graph = graph; // Graph should have methods getAllEdges() and getAllNodes()
    }

    findShortestPath(startNode, endNode) { // Public method to find the shortest path
        const distances = {}; // To store the shortest distance from startNode to each node
        const previousNodes = {}; // To store the previous node in the optimal path

        // Step 1: Initialize distances and previous nodes
        const nodes = this.graph.getAllNodes(); // Get all nodes in the graph
        for (const node of nodes) {
            distances[node] = Infinity; // Set initial distance to infinity
            previousNodes[node] = null; // Set previous node to null
        }
        distances[startNode] = 0; // Distance to startNode is 0

        // Step 2: Relax edges repeatedly
        const edges = this.graph.getAllEdges(); // Get all edges in the graph
        for (let i = 0; i < nodes.length - 1; i++) { // Repeat |V| - 1 times
            for (const edge of edges) {
                const { from, to, weight } = edge; // Destructure edge properties
                if (distances[from] + weight < distances[to]) { // Relaxation step
                    distances[to] = distances[from] + weight; // Update distance
                    previousNodes[to] = from; // Update previous node
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (const edge of edges) {
            const { from, to, weight } = edge;
            if (distances[from] + weight < distances[to]) {
                throw new Error("Graph contains a negative-weight cycle");
            }
        }

        // Step 4: Build the shortest path
        const path = [];
        let currentNode = endNode;
        while (currentNode !== null) {
            path.unshift(currentNode); // Build the path in reverse
            currentNode = previousNodes[currentNode]; // Move to the previous node
        }

        if (distances[endNode] === Infinity) {
            return { path: [], distance: Infinity }; // Return empty path if no path found
        }

        return { path, distance: distances[endNode] }; // Return the path and its distance
    }
}

// Example usage:
const graph = new Graph(); // Assume Graph is a predefined class with addEdge, getAllEdges, and getAllNodes methods
graph.addEdge(1, 2, 1); // Add edge from node 1 to node 2 with weight 1
graph.addEdge(1, 3, 4);
graph.addEdge(2, 4, 2);
graph.addEdge(3, 4, -5); // Example of a negative weight edge
const bellmanFord = new BellmanFord(graph); // Create an instance of BellmanFord
console.log(bellmanFord.findShortestPath(1, 4)); // Output: { path: [1, 2, 4], distance: 3 }

module.exports = BellmanFord; // Export the BellmanFord class for use in other modules

// Graph class implementation (for completeness)
class Graph {
    constructor() {
        this.edges = []; // To store edges in the format { from, to, weight }
        this.nodes = new Set(); // To store unique nodes
    }

    addEdge(from, to, weight) {
        this.edges.push({ from, to, weight }); // Add edge to the edges list
        this.nodes.add(from); // Add from node to the set of nodes
        this.nodes.add(to); // Add to node to the set of nodes
    }

    getAllEdges() {
        return this.edges; // Return all edges
    }

    getAllNodes() {
        return Array.from(this.nodes); // Return all unique nodes as an array
    }
}

graph = new Graph(); // Create a new graph instance
graph.addEdge(1, 2, 1); // Add edge from node 1 to node 2 with weight 1
graph.addEdge(1, 3, 4);
graph.addEdge(2, 4, 2);
graph.addEdge(3, 4, -5); // Example of a negative weight edge

module.exports = Graph; // Export the Graph class for use in other modules