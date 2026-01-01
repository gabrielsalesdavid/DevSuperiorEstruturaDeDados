class ListGraph {
    constructor() { // Initialize the graph
        this.adjacencyList = {}; // Initialize empty adjacency list
    }

    addVertex(vertex) { // Add a vertex to the graph
        if (!this.adjacencyList[vertex]) { // Check if vertex already exists
            this.adjacencyList[vertex] = []; // Initialize adjacency list for the vertex
        }
    }

    addEdge(vertex1, vertex2) { // Add edge between two vertices
        if (!this.adjacencyList[vertex1]) { // Check if vertex1 exists
            this.addVertex(vertex1); // Add vertex1 if it doesn't exist
        }
        if (!this.adjacencyList[vertex2]) { // Check if vertex2 exists
            this.addVertex(vertex2); // Add vertex2 if it doesn't exist
        }
        this.adjacencyList[vertex1].push(vertex2); // Add edge between vertex1 and vertex2
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2 // Remove edge between vertex1 and vertex2
        ); // Remove edge between vertex1 and vertex2
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1 // For undirected graph
        ); // Remove edge between vertex1 and vertex2
    }

    isConnected(vertex1, vertex2) { // Check if there is a connection between two vertices
        return this.adjacencyList[vertex1]?.includes(vertex2) || false; // Check if vertex2 is in the adjacency list of vertex1
    }
}

// Example usage:
const listGraph = new ListGraph(); // Create a new graph
listGraph.addEdge(0, 1); // Add edge between vertex 0 and 1
listGraph.addEdge(1, 2);

console.log(listGraph.isConnected(0, 1)); // true
console.log(listGraph.isConnected(0, 2)); // false