import Pilha from "./pilha-com-lista.js";

let pilha = new PilhaLista();

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