import Node from "./arvore-generica.js";

// Criando nós
const root = new Node("Root");
const child1 = new Node("Child 1");
const child2 = new Node("Child 2");
const grandchild1 = new Node("Grandchild 1");

// Construindo a árvore
root._addChild(child1); // Não usar
root._addChild(child2);
child1._addChild(grandchild1);

// Testando a estrutura da árvore
console.log("Root Element:", root.element()); // Root Element: Root
console.log("Child 1 Parent:", child1._getParent().element()); // Child 1 Parent: Root
console.log("Child 2 Parent:", child2._getParent().element()); // Child 2 Parent: Root
console.log("Grandchild 1 Parent:", grandchild1._getParent().element()); // Grandchild 1 Parent: Child 1

console.log("Root Children Count:", root._getChildren().length); // Root Children Count: 2
console.log("Child 1 Children Count:", child1._getChildren().length); // Child 1 Children Count: 1
console.log("Child 2 is Leaf:", child2._isLeaf()); // Child 2 is Leaf: true
console.log("Grandchild 1 is Leaf:", grandchild1._isLeaf()); // Grandchild 1 is Leaf: true

// Removendo um nó
root._removeChild(child2);
console.log("Root Children Count after removal:", root._getChildren().length); // Root Children Count after removal: 1
console.log("Child 2 Parent after removal:", child2._getParent()); // Child 2 Parent after removal: null