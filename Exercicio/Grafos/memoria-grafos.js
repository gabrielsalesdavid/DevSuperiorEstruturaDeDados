class MemoryGraph {
    constructor(size) { // Initialize the graph with a given size
        this.size = size; // Number of vertices
        this.adjacencyMatrix = []; // Create an empty adjacency matrix

        for (let i = 0; i < size; i++) { // Fill the adjacency matrix with 0s
            this.adjacencyMatrix[i] = Array(size).fill(0); // Each row is an array of size 'size' filled with 0s
        }
    }

    addEdge(source, destination) { // Add an edge from source to destination
        if (this.isValidVertex(source) && this.isValidVertex(destination)) { // Check for valid vertices
            this.adjacencyMatrix[source][destination] = 1; // For undirected graph
            this.adjacencyMatrix[destination][source] = 1; // For undirected graph
        } else {
            console.log("Invalid vertices"); // Error handling for invalid vertices
        }
    }

    isEdge(source, destination) { // Check if there is an edge from source to destination
        if (this.isValidVertex(source) && this.isValidVertex(destination)) { // Check for valid vertices
            return this.adjacencyMatrix[source][destination] === 1; // Return true if there is an edge
        } else {
            console.log("Invalid vertices"); // Error handling for invalid vertices
            return false; // Return false for invalid vertices
        }
    }

    isValidVertex(vertex) { // Check if a vertex is valid
        return vertex >= 0 && vertex < this.size; // Valid if within range
    }
}

// Example usage:
const memoryGraph = new MemoryGraph(4); // Create a graph with 4 vertices
memoryGraph.addEdge(0, 1); // Add edge between vertex 0 and 1
memoryGraph.addEdge(1, 2);

console.log(memoryGraph.isEdge(0, 1)); // true
console.log(memoryGraph.isEdge(0, 2)); // false