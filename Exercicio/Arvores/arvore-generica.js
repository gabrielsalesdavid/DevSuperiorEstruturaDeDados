export default class Node {

    #element;
    #parent;
    #children;

    constructor(element, parent = null) {
        this.#element = element;
        this.#parent = parent;
        this.#children = [];
    }

    element() {
        return this.#element;
    }

    _setElement(element) {
        this.#element = element;
    }

    _getParent() {
        return this.#parent;
    }

    _setParent(parent) {
        this.#parent = parent;
    }

    _getChildren() {
        return this.#children;
    }

    _addChild(childNode) {
        this.#children.push(childNode);
        childNode._setParent(this);
    }

    _removeChild(childNode) {
        this.#children = this.#children.filter(child => child !== childNode);
        childNode._setParent(null);
    }

    _isLeaf() {
        return this.#children.length === 0;
    }
}