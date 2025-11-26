export default class GenericTree {

    #root; // Raiz da árvore
    #size; // Tamanho da árvore

    constructor() {
        this.#root = null; // Inicializa a raiz como nula
        this.#size = 0; // Inicializa a árvore vazia
    }

    size() {
        return this.#size; // Retorna o tamanho da árvore
    }

    isEmpty() {
        return this.#size === 0; // Verifica se a árvore está vazia
    }

    elements() {
        const list = []; // Cria uma lista vazia para armazenar os elementos
        this.#collectElements(list, this.#root); // Inicia a coleta de elementos a partir da raiz
        return list; // Retorna a lista de elementos coletados
    }

    #collectElements(list, node) {

        list.push(node.element()); // Adiciona o elemento do nó atual à lista

        for (const child of node._getChildren()) {

            this.#collectElements(list, child); // Chama recursivamente para os filhos
        }
    }

    postions() {
        const list = []; // Cria uma lista vazia para armazenar as posições
        this.#collectPositions(list, this.#root); // Inicia a coleta de posições a partir da raiz
        return list; // Retorna a lista de posições coletadas
    }

    #collectPositions(list, node) {

        list.push(node); // Adiciona o nó atual à lista de posições

        for (const child of node._getChildren()) {

            this.#collectPositions(list, child); // Chama recursivamente para os filhos
        }
    }

    find(element) {
        return this.#findRecursive(this.#root, element); // Inicia a busca recursiva a partir da raiz
    }

    #findRecursive(node, element) {
        if (!node) {
            return null; // Nó nulo, elemento não encontrado
        }
        if (node.element() === element) {
            return node; // Elemento encontrado
        }
        for (const child of node._getChildren()) {
            const result = this.#findRecursive(child, element); // Busca recursiva na subárvore
            if (result) {
                return result; // Elemento encontrado na subárvore
            }
        }
        return null; // Elemento não encontrado na subárvore
    }

    #validate(position) {

        if (!(position instanceof Node)) {
            throw new Error("Invalid position"); // A posição não é uma instância válida de Node
        }

        if (position._getParent() === position) {
            throw new Error("Position is no longer in the tree"); // A posição foi removida da árvore
        }

        return position; // Retorna a posição validada
    }

    add(element, parent) {

        if (!this.isEmpty() && parent === null) {
            throw new Error("Tree already has a root"); // A árvore já possui uma raiz
        }

        const parentNode = parent ? this.#validate(parent) : null; // Valida o nó pai
        const newNode = new Node(element, parentNode); // Cria um novo nó

        if (!parentNode) {
            this.#root = newNode; // Define o novo nó como raiz
        } else {
            parentNode._addChild(newNode); // Adiciona o novo nó como filho do pai
        }

        this.#size++; // Incrementa o tamanho da árvore
        return newNode; // Retorna a posição do novo nó
    }

    children(position) {
        const node = this.#validate(position); // Valida o nó
        return [...node._getChildren()]; // Retorna uma cópia do array de filhos
    }

    root() {
        return this.#root; // Retorna a raiz da árvore
    }

    isExternal(position) {

        const node = this.#validate(position); // Valida o nó
        return node._isLeaf(); // Verifica se o nó é folha
    }

    isRoot(position) {

        const node = this.#validate(position); // Valida o nó
        return node === this.#root; // Verifica se o nó é a raiz
    }

    parent(position) {
        const node = this.#validate(position); // Valida o nó
        if (node === this.#root) {
            throw new Error("Root node has no parent"); // A raiz não possui nó pai
        }
        return node._getParent(); // Retorna o nó pai
    }

    replace(position, element) {

        const node = this.#validate(position); // Valida o nó a ser substituído
        return node._setElement(element); // Substitui o elemento do nó e retorna o antigo
    }

    remove(position) {

        const node = this.#validate(position); // Valida o nó a ser removido

        if (node === this.#root) {

            this.#root = null; // Remove a raiz da árvore
        } else {

            const parent = node._getParent(); // Obtém o nó pai
            parent._removeChild(node); // Remove o nó da lista de filhos do pai
        }

        this.#size -= this.#subtreeSize(node); // Atualiza o tamanho da árvore
        this.#markAsRemoved(node); // Marca o nó e seus filhos como removidos
    }

    #markAsRemoved(node) {

        node._setParent(node); // Marca o nó como removido definindo seu pai como ele mesmo

        for (const child of node._getChildren()) {

            this.#markAsRemoved(child); // Marca recursivamente os filhos como removidos
        }
    }

    #subtreeSize(node) {

        let count = 0; // Conta o nó atual

        for (const child of node._getChildren()) {

            count += this.#subtreeSize(child); // Conta os nós na subárvore dos filhos
        }
        return 1 + count; // Retorna o total de nós na subárvore
    }
}