class Dijkstra {
    constructor(graph) { // graph is expected to be an instance of a Graph class
        this.graph = graph; // Graph should have a method getNeighbors(node) and getEdgeWeight(node1, node2)
    }

    findShortestPath(startNode, endNode) { // Public method to find the shortest path
        const distances = {}; // To store the shortest distance from startNode to each node
        const previousNodes = {}; // To store the previous node in the optimal path
        const priorityQueue = new MinPriorityQueue(); // Min-priority queue to select the next node with the smallest distance

        // Initialize distances and priority queue
        for (const node of this.graph.getAllNodes()) {
            distances[node] = Infinity; // Set initial distances to infinity
            previousNodes[node] = null; // No previous node initially
            priorityQueue.enqueue(node, Infinity); // Enqueue all nodes with infinite priority
        }
        distances[startNode] = 0; // Distance to startNode is 0
        priorityQueue.updatePriority(startNode, 0); // Update priority of startNode

        while (!priorityQueue.isEmpty()) { // While there are nodes to process
            const currentNode = priorityQueue.dequeue().element; // Get the node with the smallest distance

            if (currentNode === endNode) { // If we reached the endNode, build the path
                const path = [];
                let tempNode = endNode;
                while (tempNode !== null) {
                    path.unshift(tempNode); // Build the path in reverse
                    tempNode = previousNodes[tempNode]; // Move to the previous node
                }
                return { path, distance: distances[endNode] }; // Return the path and its distance
            }

            const neighbors = this.graph.getNeighbors(currentNode); // Get neighbors of the current node
            for (const neighbor of neighbors) { // Iterate through each neighbor
                const edgeWeight = this.graph.getEdgeWeight(currentNode, neighbor); // Get the weight of the edge
                const altDistance = distances[currentNode] + edgeWeight; // Calculate alternative distance

                if (altDistance < distances[neighbor]) { // If a shorter path is found
                    distances[neighbor] = altDistance; // Update the shortest distance
                    previousNodes[neighbor] = currentNode; // Update the previous node
                    priorityQueue.updatePriority(neighbor, altDistance); // Update priority in the queue
                }
            }
        }

        return { path: [], distance: Infinity }; // Return empty path if no path found
    }
}

// Example usage:
const graph = new Graph(); // Assume Graph is a predefined class with addEdge, getNeighbors, getEdgeWeight, and getAllNodes methods
graph.addEdge(1, 2, 1); // Add edge from node 1 to node 2 with weight 1
graph.addEdge(1, 3, 4);
graph.addEdge(2, 4, 2);
const dijkstra = new Dijkstra(graph); // Create an instance of Dijkstra
console.log(dijkstra.findShortestPath(1, 4)); // Output: { path: [1, 2, 4], distance: 3 }

module.exports = Dijkstra; // Export the Dijkstra class for use in other modules

// MinPriorityQueue class implementation (for completeness)
class MinPriorityQueue { // A simple min-priority queue implementation
    constructor() { // Initialize an empty array to hold the elements
        this.elements = []; // Array to hold the elements in the priority queue
    }

    enqueue(element, priority) { // Add an element with a given priority
        this.elements.push({ element, priority }); // Add new element with its priority
        this.elements.sort((a, b) => a.priority - b.priority); // Sort the queue based on priority
    }

    dequeue() { // Remove and return the element with the highest priority (lowest value)
        return this.elements.shift(); // Remove and return the element with the highest priority (lowest value)
    }

    updatePriority(element, newPriority) { // Update the priority of a given element
        for (let item of this.elements) { // Iterate through the elements
            if (item.element === element) { // If the element is found
                item.priority = newPriority; // Update its priority
                break;
            }
        }
        this.elements.sort((a, b) => a.priority - b.priority); // Re-sort the queue
    }

    isEmpty() { // Check if the queue is empty
        return this.elements.length === 0; // Return true if empty, false otherwise
    }
}

graph.addEdge(2, 3, 1); // Add edge from node 2 to node 3 with weight 1
graph.addEdge(3, 4, 1); // Add edge from node 3 to node 4 with weight 1
graph.addEdge(1, 4, 7); // Add edge from node 1 to node 4 with weight 7
console.log(dijkstra.findShortestPath(1, 4)); // Output: { path: [1, 2, 3, 4], distance: 3 }
module.exports = Dijkstra; // Export the Dijkstra class for use in other modules