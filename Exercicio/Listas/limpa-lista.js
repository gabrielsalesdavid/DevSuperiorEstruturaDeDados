class Node {

    constructor(value) {

        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {

        this.head = null;
        this.size = 0;
    }

    clear = () => {

        this.head = null;
        this.size = 0;
    };

    isEmpty = () => {

        if (this.head === null)
            return true;

        return false;
    };

    getSize = () => {

        return this.size;
    };

    addAtEnd = (elem) => {

        const node = new Node(elem);

        if (this.head === null) {

            this.head = node;
            this.size += 1; // || size++
            return;
        }

        let current = this.head;

        while (current.next) {

            current = current.next;
        }

        current.next = node;
        this.size += 1;
    };

    printLinkedList = () => {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    };
}

let linkedList = new LinkedList();
console.log(linkedList.getSize);
console.log(linkedList.isEmpty);

linkedList.addAtEnd(20);
linkedList.addAtEnd(9);
linkedList.addAtEnd(86);
linkedList.addAtEnd(-2);
linkedList.addAtEnd(16);
linkedList.addAtEnd(23);

console.log(linkedList.head.value);
console.log(linkedList.head.next.value);
console.log(linkedList.head.next.next.value);

linkedList.clear();
linkedList.printLinkedList();