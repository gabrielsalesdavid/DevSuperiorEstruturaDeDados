class Dag {
    constructor() { // Directed Acyclic Graph
        this.adjacencyList = new Map(); // Using a Map to store the adjacency list
    }

    addVertex(vertex) { // Method to add a vertex
        if (!this.adjacencyList.has(vertex)) { // Check if vertex already exists
            this.adjacencyList.set(vertex, []); // Initialize with an empty array for edges
        }
    }

    addEdge(fromVertex, toVertex) { // Method to add a directed edge
        if (!this.adjacencyList.has(fromVertex) || !this.adjacencyList.has(toVertex)) { // Ensure both vertices exist
            throw new Error("Both vertices must exist in the graph."); // Error handling
        }
        this.adjacencyList.get(fromVertex).push(toVertex); // Add the edge from fromVertex to toVertex
    }

    topologicalSort() { // Method to perform topological sort
        const visited = new Set(); // Set to track visited vertices
        const stack = []; // Stack to store the topological order
        const tempMark = new Set(); // Set to track temporary marks for cycle detection

        const visit = (vertex) => { // Helper function for DFS
            if (tempMark.has(vertex)) { // If vertex is temporarily marked, a cycle is detected
                throw new Error("Graph is not a DAG (contains a cycle)."); // Error handling for cycles
            }
            if (!visited.has(vertex)) { // If vertex is unvisited
                tempMark.add(vertex); // Temporarily mark the vertex
                for (const neighbor of this.adjacencyList.get(vertex)) { // Visit all neighbors
                    visit(neighbor); // Recursive DFS call
                }
                tempMark.delete(vertex); // Remove temporary mark
                visited.add(vertex); // Mark vertex as visited
                stack.push(vertex); // Push vertex to stack after visiting all neighbors
            }
        };

        for (const vertex of this.adjacencyList.keys()) { // Iterate through all vertices
            if (!visited.has(vertex)) { // If vertex is unvisited
                visit(vertex); // Start DFS from this vertex
            }
        }

        return stack.reverse(); // Return in topological order
    }
}

module.exports = Dag; // Exporting the Dag class

// Example usage:
const dag = new Dag(); // Creating a new DAG instance
dag.addVertex('A'); // Adding vertices
dag.addVertex('B');
dag.addVertex('C');
dag.addEdge('A', 'B'); // Adding edges
dag.addEdge('B', 'C');
console.log(dag.topologicalSort()); // Output: ['A', 'B', 'C']