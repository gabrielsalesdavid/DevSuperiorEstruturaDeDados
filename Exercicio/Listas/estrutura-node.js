class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node01 = new Node("A");
const node02 = new Node("B");
const node03 = new Node("C");

node01.next = node02;
node02.next = node03;

console.log(node01.value);
console.log(node02.value);
console.log(node03.value);

console.log(node01.next.value);
console.log(node02.next.value);