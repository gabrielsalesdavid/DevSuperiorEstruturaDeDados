export default class BinarySearchTreeSet {

    #size;
    #root;

    constructor(collection = []) {

        this.#size = 0;
        this.#root = new Node(null, null); // sentinel
        this.addAll(collection); // add all elements from the collection
    }

    size() {

        return this.#size; // return the size of the set
    }

    isEmpty() {

        return this.#size === 0; // true if size is 0
    }

    addAll(collection) {

        collection.forEach((item) => this.add(item)); // add each item in the collection
    }

    add(key) {

        if (key === null) {

            throw new Error("Key cannot be null"); // validate key
        }

        if (this.isEmpty()) {

            this.#root = new Node(key, null); // create root node
            this.#root.left = new Node(null, this.#root); // sentinel
            this.#root.right = new Node(null, this.#root); // sentinel
            this.#size++;
            return;
        }

        const node = this.#findKeyLocation(this.#root, key); // node is sentinel or has the key

        if (node.isSentinel()) {

            const parent = node.parent; // get parent of sentinel
            const newNode = new Node(key, parent); // create new node
            newNode.left = new Node(null, newNode); // sentinel
            newNode.right = new Node(null, newNode); // sentinel

            if (node === parent.left) {

                parent.left = newNode; // insert as left child
            } else if (node === parent.right) {

                parent.right = newNode; // insert as right child
            }

            this.#size++;
        }
    }

    remove(key) {

        if (!key) {

            throw new Error("Key cannot be null"); // validate key
        }

        const nodeToRemove = this.#findKeyLocation(this.#root, key); // nodeToRemove is sentinel or has the key

        if (nodeToRemove.isSentinel()) {

            return false; // key not found, nothing to remove
        }

        if (!nodeToRemove.left.isSentinel() && !nodeToRemove.right.isSentinel()) {

            let successor = this.#findMin(nodeToRemove.right); // find in-order successor
            nodeToRemove.key = successor.key; // replace key
            nodeToRemove = successor; // now remove successor
        }

        let child = nodeToRemove.left.isSentinel() ? nodeToRemove.right : nodeToRemove.left; // node has at most one non-sentinel child
        child.parent = nodeToRemove.parent;

        if (nodeToRemove.parente === null) {

            this.#root = child; // removing root
        } else if (nodeToRemove === nodeToRemove.parent.left) {

            nodeToRemove.parent.left = child; // removing left child
        } else {

            nodeToRemove.parent.right = child; // removing right child
        }

        return this.#size--;
        return true;
    }

    #findKeyLocation(node, key) {

        while (!node.isSentinel()) {

            if (key === node.key) {

                return node; // key found
            } else if (key < node.key) {

                node = node.left; // move to left child
            } else {

                node = node.right; // move to right child
            }
        }

        return node;
    }

    #findMin(node) {

        while (!node.left.isSentinel()) {

            node = node.left; // move to left child
        }

        return node; // return minimum node found
    }

    contains(key) {

        const node = this.#findKeyLocation(this.#root, key); // node is sentinel or has the key
        return !node.isSentinel(); // true if key found
    }

    keys() {

        let keysList = []; // list to store keys
        this.#collectKeys(this.#root, keysList); // in-order traversal to collect keys
        return keysList; // return the list of keys
    }

    #collectKeys(node, keysList) {

        if (!node.isSentinel()) {

            this.#collectKeys(node.left, keysList); // traverse left subtree
            keysList.push(node.key); // visit node
            this.#collectKeys(node.right, keysList); // traverse right subtree
        }
    }

    union(other) {

        const resultSet = new BinarySearchTreeSet(); // create new set for union
        this.keys().forEach((key) => resultSet.add(key)); // add keys from current set
        other.keys().forEach((key) => resultSet.add(key)); // add keys from other set
        return resultSet; // return the union set
    }

    intersection(other) {

        const resultSet = new BinarySearchTreeSet(); // create new set for intersection
        this.keys().forEach((key) => { // iterate over keys in current set

            if (other.contains(key)) {

                resultSet.add(key); // add key if present in both sets
            }
        });

        return resultSet; // return the intersection set
    }

    difference(other) {

        const resultSet = new BinarySearchTreeSet(); // create new set for difference
        this.keys().forEach((key) => { // iterate over keys in current set

            if (!other.contains(key)) {

                resultSet.add(key); // add key if not present in other set
            }
        });

        return resultSet; // return the difference set
    }

    toString() {

        return this.keys().toString(); // return keys as a string
    }

    toStringFormat() {

        let result = []; // array to hold formatted lines
        this.#toStringFormat(this.#root, 0, result); // format tree structure
        return result.join("\n"); // join lines with newlines
    }

    #toStringFormat(node, depth, result) {

        if (!node.isSentinel()) {

            this.#toStringFormat(node.right, depth + 1, result); // format right subtree
            result.push("\t\t\t\t".repeat(depth) + node.key); // add current node key with indentation
            this.#toStringFormat(node.left, depth + 1, result); // format left subtree
        }
    }
}

class Node {

    constructor(key, parent) {

        this.key = key; // key of the node
        this.parent = parent; // parent of the node
        this.left = this.right = null; // left and right children
    }

    isSentinel() {

        return this.key === null; // true if node is sentinel
    }
}