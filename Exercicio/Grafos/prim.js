class Prim {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.graph = graph; // Graph should have methods getEdges() and getNodes()
    }

    addEdge(from, to, weight) { // Method to add an edge to the graph
        this.graph.addEdge(from, to, weight); // Delegates to the graph's addEdge method
    }

    prim() { // Implements Prim's algorithm to find the Minimum Spanning Tree (MST)
        const nodes = this.graph.getNodes(); // Get all nodes in the graph
        if (nodes.length === 0) return []; // Return empty if graph has no nodes

        const mstEdges = []; // To store edges of the MST
        const visited = new Set(); // To track visited nodes
        const edges = []; // To store candidate edges

        const startNode = nodes[0]; // Start from the first node
        visited.add(startNode); // Mark the start node as visited

        this.graph.getEdgesFromNode(startNode).forEach(edge => {
            edges.push(edge); // Add edges from the start node to the candidate edges list
        });

        while (visited.size < nodes.length) { // While not all nodes are visited
            edges.sort((a, b) => a.weight - b.weight); // Sort edges by weight
            let edge; // To hold the next edge to add to the MST
            do {
                edge = edges.shift(); // Get the edge with the smallest weight
            } while (edge && visited.has(edge.to)); // Skip edges leading to already visited nodes

            if (!edge) break; // If no valid edge is found, break the loop

            mstEdges.push(edge); // Add the selected edge to the MST
            visited.add(edge.to); // Mark the new node as visited

            // Add new edges from the newly visited node to the candidate edges list

            this.graph.getEdgesFromNode(edge.to).forEach(nextEdge => {
                if (!visited.has(nextEdge.to)) { // Only add edges leading to unvisited nodes
                    edges.push(nextEdge); // Add to candidate edges
                    }
            });
        }

        return mstEdges; // Return the edges of the Minimum Spanning Tree
    }
}

module.exports = Prim; // Export the Prim class for use in other files
graph = {
    nodes: new Set(), // To store unique nodes
    edges: [], // To store edges in the graph

    addEdge(from, to, weight) { // Method to add an edge to the graph
        this.nodes.add(from); // Add the 'from' node to the set of nodes
        this.nodes.add(to); // Add the 'to' node to the set of nodes
        this.edges.push({ from, to, weight }); // Add the edge to the edges list
    },

    getNodes() { // Method to get all nodes in the graph
        return Array.from(this.nodes); // Convert the set of nodes to an array and return it
    },

    getEdgesFromNode(node) { // Method to get all edges originating from a specific node
        return this.edges.filter(edge => edge.from === node); // Return edges where the 'from' node matches the specified node
    }
};

// Example usage:
const prim = new Prim(graph); // Create an instance of Prim with the graph
prim.addEdge('A', 'B', 1); // Add edges to the graph
prim.addEdge('A', 'C', 3);
prim.addEdge('B', 'C', 1);
prim.addEdge('B', 'D', 4);
prim.addEdge('C', 'D', 2);

const mst = prim.prim(); // Compute the Minimum Spanning Tree
console.log(mst); // Outputs the edges in the Minimum Spanning Tree