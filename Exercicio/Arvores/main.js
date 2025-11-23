import GenericTree from "./generic-tree.js";

const myTree = new GenericTree();

// Adicionando nós à árvore
myTree.add("Root", null); // Adiciona a raiz
const root = myTree.children(myTree._root)[0];

myTree.add("Child 1", root);
myTree.add("Child 2", root);

const child1 = myTree.children(root)[0];
myTree.add("Grandchild 1", child1);

// Exibindo o tamanho da árvore
console.log("Tree Size:", myTree.size()); // Tree Size: 4

// Verificando se a árvore está vazia
console.log("Is Tree Empty?", myTree.isEmpty()); // Is Tree Empty? false

// Listando filhos da raiz
const rootChildren = myTree.children(root);
console.log("Root Children:", rootChildren.map(child => child.element())); // Root Children: [ 'Child 1', 'Child 2' ]

// Listando filhos do Child 1
const child1Children = myTree.children(child1);
console.log("Child 1 Children:", child1Children.map(child => child.element())); // Child 1 Children: [ 'Grandchild 1' ]

function printTree(position, level = 0) {
    console.log("  ".repeat(level) + position.element());
    for (let child of myTree.children(position)) {
        printTree(child, level + 1);
    }
}

console.log("Tree Structure:");
printTree(myTree.root());
// Tree Structure:
// Root
//   Child 1
//     Grandchild 1
//   Child 2

function printRecursive(position, tree, depth) {

    for (const child of tree.children(position)) {
        printRecursive(child, tree, depth + 1);
    }

    const spaces = "\t\t".repeat(depth);
    console.log(spaces + position.element());
}

printRecursive(myTree);