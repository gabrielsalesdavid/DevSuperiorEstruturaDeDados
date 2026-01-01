class Search {
    constructor(graph) { // Initialize with a graph
        this.graph = graph; // Store the graph
    }

    bfs(startVertex) { // Perform BFS starting from startVertex
        const visited = Array(this.graph.size).fill(false); // Track visited vertices
        const queue = []; // Initialize the queue
        const result = []; // Store the order of traversal

        visited[startVertex] = true; // Mark the start vertex as visited
        queue.push(startVertex); // Enqueue the start vertex

        while (queue.length > 0) { // While there are vertices to process
            const vertex = queue.shift(); // Dequeue a vertex
            result.push(vertex); // Add it to the result

            for (let i = 0; i < this.graph.size; i++) { // Explore adjacent vertices
                if (this.graph.adjacencyMatrix[vertex][i] === 1 && !visited[i]) { // If there's an edge and not visited
                    visited[i] = true; // Mark as visited
                    queue.push(i); // Enqueue the adjacent vertex
                }
            }
        }

        return result; // Return the order of traversal
    }
}
// Example usage:
const graph = new Graph(5); // Create a graph with 5 vertices
graph.addEdge(0, 1); // Add edges
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(3, 4);

const search = new Search(graph); // Create a Search instance
const bfsResult = search.bfs(0); // Start BFS from vertex 0
console.log("BFS starting from vertex 0:", bfsResult); // Output: BFS starting from vertex 0: [ 0, 1, 2 ]

const bfsResultFrom3 = search.bfs(3); // Start BFS from vertex 3
console.log("BFS starting from vertex 3:", bfsResultFrom3); // Output: BFS starting from vertex 3: [ 3, 4 ]