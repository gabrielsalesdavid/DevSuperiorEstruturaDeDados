export default class Queue {

    constructor () {

        this.list = [];
    }

    add (item) {

        this.list.push(item);
    }

    remove () {

        if (this.isEmpty()) {
            throw new Error ("Queue is Empty!");
        }

        return this.list.shift();
    }

        peek () {

        if (this.isEmpty()) {
            throw new Error ("Queue is Empty!");
        }

        return this.list[0];
    }

    isEmpty () {

        return this.list.length === 0;
    }

    count () {

        return this.list.length;
    }
}