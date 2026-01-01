class DeepSearch {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.graph = graph; // Graph should have a method getNeighbors(node)
        this.visited = new Set(); // To keep track of visited nodes
        this.result = []; // To store the order of visited nodes
    }

    search(startNode) { // Public method to initiate DFS
        this._dfs(startNode); // Start the DFS from the startNode
        return this.result; // Return the result after DFS is complete
    }

    _dfs(node) { // Private method to perform DFS
        if (this.visited.has(node)) { // If the node has already been visited, return
            return; // Avoid cycles
        }

        this.visited.add(node); // Mark the node as visited
        this.result.push(node); // Add the node to the result

        const neighbors = this.graph.getNeighbors(node); // Get neighbors of the current node
        for (const neighbor of neighbors) { // Iterate through each neighbor
            this._dfs(neighbor); // Recursively visit each neighbor
        }
    }
}

// Example usage:
const graph = new Graph(); // Assume Graph is a predefined class with addEdge and getNeighbors methods
graph.addEdge(1, 2); // Add edge from node 1 to node 2
graph.addEdge(1, 3);
graph.addEdge(2, 4);
const deepSearch = new DeepSearch(graph); // Create an instance of DeepSearch
console.log(deepSearch.search(1)); // Output: [1, 2, 4, 3]

module.exports = DeepSearch; // Export the DeepSearch class for use in other modules