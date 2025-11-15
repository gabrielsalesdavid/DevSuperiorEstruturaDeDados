import Queue from "./fila-com-lista.js";

const queue = new Queue();

console.log(`queue.isEmpty(): ${queue.isEmpty()}`);

queue.add("Maria");
queue.add("João");
queue.add("Ana");

console.log(`queue.isEmpty(): ${queue.isEmpty()}`);
console.log(`queue.count(): ${queue.count()}`);
console.log(`queue.peek(): ${queue.peek()}`);

console.log("Items:");
while (!queue.isEmpty()) {

    console.log(queue.remove());
}