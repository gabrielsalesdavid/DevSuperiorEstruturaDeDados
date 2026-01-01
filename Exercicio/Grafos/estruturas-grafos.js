class StructuresGraphs {
    constructor() {
        this.graph = new Graph(5); // Create a graph with 5 vertices

        this.graph.addEdge(0, 1); // Add edge between vertex 0 and 1
        this.graph.addEdge(0, 4); // Add edge between vertex 0 and 4
        this.graph.addEdge(1, 2); // Add edge between vertex 1 and 2
        this.graph.addEdge(1, 3); // Add edge between vertex 1 and 3
        this.graph.addEdge(1, 4); // Add edge between vertex 1 and 4
        this.graph.addEdge(2, 3); // Add edge between vertex 2 and 3
        this.graph.addEdge(3, 4); // Add edge between vertex 3 and 4

        this.graph.printMatrix(); // Print the adjacency matrix
    }
}

// Example usage:
const structuresGraphs = new StructuresGraphs(); // Create an instance of StructuresGraphs
console.log(structuresGraphs.graph.isEdge(0, 1)); // true
console.log(structuresGraphs.graph.isEdge(1, 3)); // true

structuresGraphs.graph.removeEdge(1, 3); // Remove the edge between vertex 1 and 3
structuresGraphs.graph.printMatrix(); // Print the updated adjacency matrix