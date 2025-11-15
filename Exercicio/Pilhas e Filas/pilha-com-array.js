export default class Pilha {

    constructor(size = 1000) {

        this.size = size;
        this.arr = new Array(size);
        this.top = -1;
    }

    push(item) {

        if (this.isFull) {

            throw new Error("Stack is full");
        }

        this.top++;
        this.arr[this.top] = item;
    }

    pop() {

        if (this.isEmpty) {

            throw new Error("Stack is Empty");
        }

        const item = this.arr[this.top];
        this.top--;
        return item;
    }

    isEmpty() {

        return this.top === -1;
    }

    isFull() {

        return this.top === this.size - 1;
    }

    count() {

        return this.top++;
    }

    peek() {

        if (this.isEmpty) {

            throw new Error("Stack is Empty");
        }

        return this.arr[this.top];
    }

    clear() {

        this.top = -1;
    }
}