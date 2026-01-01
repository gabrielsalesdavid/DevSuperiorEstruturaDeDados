class HeadquartersGraph {
    constructor(size) {
        this.size = size; // Number of nodes
        this.adjacencyMatrix = Array.from({ length: size }, () => Array(size).fill(0)); // Initialize adjacency matrix with 0s
    }

    addConnection(from, to) { // Add connection between two nodes
        if (this.isValidNode(from) && this.isValidNode(to)) { // Check for valid nodes
            this.adjacencyMatrix[from][to] = 1; // Add connection
            this.adjacencyMatrix[to][from] = 1; // Assuming undirected graph
        } else {
            console.error("Invalid node index"); // Error handling for invalid nodes
        }
    }

    removeConnection(from, to) { // Remove connection between two nodes
        if (this.isValidNode(from) && this.isValidNode(to)) { // Check for valid nodes
            this.adjacencyMatrix[from][to] = 0; // Remove connection
            this.adjacencyMatrix[to][from] = 0; // Assuming undirected graph
        } else {
            console.error("Invalid node index"); // Error handling for invalid nodes
        }
    }

    isConnected(from, to) { // Check if there is a connection between two nodes
        if (this.isValidNode(from) && this.isValidNode(to)) { // Check for valid nodes
            return this.adjacencyMatrix[from][to] === 1; // Return true if there is a connection
        } else {
            console.error("Invalid node index"); // Error handling for invalid nodes
            return false; // Return false for invalid nodes
        }
    }

    isValidNode(node) { // Check if node index is valid
        return node >= 0 && node < this.size; // Check if node index is valid
    }
}

// Example usage:
const hqGraph = new HeadquartersGraph(3); // Create a graph with 3 nodes
hqGraph.addConnection(0, 1); // Add connection between node 0 and 1
hqGraph.addConnection(1, 2);

console.log(hqGraph.isConnected(0, 1)); // true
console.log(hqGraph.isConnected(0, 2)); // false