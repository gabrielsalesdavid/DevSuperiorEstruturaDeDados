class TraversalGraph extends MemoryGraph { // Inherit from MemoryGraph
    constructor(size) { // Initialize with size
        super(size); // Call the parent class constructor
    }
    dfs(startVertex, visited = new Set(), result = []) { // Depth-First Search
        visited.add(startVertex); // Mark the vertex as visited
        result.push(startVertex); // Add to result

        for (let i = 0; i < this.size; i++) { // Explore adjacent vertices
            if (this.adjacencyMatrix[startVertex][i] === 1 && !visited.has(i)) { // If there's an edge and not visited
                this.dfs(i, visited, result); // Recur for the adjacent vertex
            }
        }

        return result; // Return the order of traversal
    }
}

// Example usage:
const traversalGraph = new TraversalGraph(5); // Create a graph with 5 vertices
traversalGraph.addEdge(0, 1); // Add edges
traversalGraph.addEdge(0, 2);
traversalGraph.addEdge(1, 2);
traversalGraph.addEdge(3, 4);

const dfsResult = traversalGraph.dfs(0); // Start DFS from vertex 0
console.log("DFS starting from vertex 0:", dfsResult); // Output: DFS starting from vertex 0: [ 0, 1, 2 ]

const dfsResultFrom3 = traversalGraph.dfs(3); // Start DFS from vertex 3
console.log("DFS starting from vertex 3:", dfsResultFrom3); // Output: DFS starting from vertex 3: [ 3, 4 ]