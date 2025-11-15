import Pilha from "./pilha-com-array.js";

let pilha = new Pilha(10);

console.log(`Stack.isEmpty(): ${pilha.isEmpty()}`);
console.log(`Stack.count(): ${pilha.count()}`);
console.log(`Stack.peek(): ${pilha.peek()}`);

pilha.push("Maria");
pilha.push("João");
pilha.push("Ana");
pilha.push("Maria");

console.log(`Stack.isEmpty(): ${pilha.isEmpty()}`);
console.log(`Stack.count(): ${pilha.count()}`);
console.log(`Stack.peek(): ${pilha.peek()}`);

/*
* pilha.clear();
* console.log(`Stack.isEmpty(): ${pilha.isEmpty()}`);
*/

console.log("Items:");
while (!pilha.isEmpty()) {

    const item = pilha.pop();
    console.log(item);
}