export default class PilhaLista {

    constructor() {

        this.list = [];
    }

    push(item) {

        this.list.push(item);
    }

    pop() {

        if (this.isEmpty) {

            throw new Error("Stack is Empty");
        }

        this.list.pop();
    }

    peek() {

        if (this.isEmpty) {

            throw new Error("Stack is Empty");
        }

        this.list[this.list.length - 1];
    }

    isEmpty() {

        return this.list.length === 0;
    }

    count() {

        return this.list.length;
    }

    clear () {

        this.list = [];
    }
}