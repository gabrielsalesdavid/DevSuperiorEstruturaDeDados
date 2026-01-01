class PathFinder {
    constructor(graph) { // Initialize with a graph
        this.graph = graph; // Store the graph
    }

    findPathDFS(startVertex, endVertex, visited = new Set()) { // Find path using DFS
        if (startVertex === endVertex) { // If start and end are the same
            return [startVertex]; // Return the vertex as the path
        }

        visited.add(startVertex); // Mark the start vertex as visited

        for (let i = 0; i < this.graph.size; i++) { // Explore adjacent vertices
            if (this.graph.adjacencyMatrix[startVertex][i] === 1 && !visited.has(i)) { // If there's an edge and not visited
                const path = this.findPathDFS(i, endVertex, visited); // Recur for the adjacent vertex
                if (path) { // If a path is found
                    return [startVertex, ...path]; // Return the path including the start vertex
                }
            }
        }

        return null; // Return null if no path is found
    }
}

// Example usage:
const graph = new Graph(5); // Create a graph with 5 vertices
graph.addEdge(0, 1); // Add edges
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(3, 4);

const pathFinder = new PathFinder(graph); // Create a PathFinder instance
const path = pathFinder.findPathDFS(0, 2); // Find path from vertex 0 to 2
console.log("Path from 0 to 2:", path); // Output: Path from 0 to 2: [ 0, 1, 2 ]

const noPath = pathFinder.findPathDFS(0, 4); // Find path from vertex 0 to 4
console.log("Path from 0 to 4:", noPath); // Output: Path