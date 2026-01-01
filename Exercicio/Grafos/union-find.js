class UnionFind {
    constructor(size) { // Initialize the Union-Find structure
        this.parent = new Array(size); // Parent array
        this.rank = new Array(size).fill(0); // Rank array for union by rank optimization
        for (let i = 0; i < size; i++) { // Each element is its own parent initially
            this.parent[i] = i; // Self parent
        }
    }

    find(u) { // Find the root of the element with path compression
        if (this.parent[u] !== u) { // If u is not its own parent
            this.parent[u] = this.find(this.parent[u]); // Path compression
        }
        return this.parent[u]; // Return the root
    }

    union(u, v) { // Union two elements
        const rootU = this.find(u); // Find root of u
        const rootV = this.find(v); // Find root of v

        if (rootU !== rootV) { // If they are in different sets
            // Union by rank
            if (this.rank[rootU] > this.rank[rootV]) { // Attach smaller rank tree under root of higher rank tree
                this.parent[rootV] = rootU; // Attach v's root to u's root
            } else if (this.rank[rootU] < this.rank[rootV]) { // Attach smaller rank tree under root of higher rank tree
                this.parent[rootU] = rootV; // Attach u's root to v's root
            } else {
                this.parent[rootV] = rootU; // Attach v's root to u's root
                this.rank[rootU]++; // Increase rank if both have same rank
            }
        }
    }

    connected(u, v) { // Check if two elements are in the same set
        return this.find(u) === this.find(v); // Return true if they have the same root
    }
}

module.exports = UnionFind; // Export the UnionFind class for use in other modules

size = { // Example usage:
    value: 10 // Size of the Union-Find structure
};

const uf = new UnionFind(size.value); // Create an instance of UnionFind

uf.union(1, 2); // Union elements 1 and 2
uf.union(2, 3); // Union elements 2 and 3

console.log(uf.connected(1, 3)); // Output: true (1 and 3 are connected)
console.log(uf.connected(1, 4)); // Output: false (1 and 4 are not connected)