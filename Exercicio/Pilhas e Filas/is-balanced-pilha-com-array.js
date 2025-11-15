import Pilha from "./pilha-com-array.js";

function isBalanced(tex) {

    let stack = new Pilha();

    for (let char of text) {

        if (char === "(") {

            stack.push(char);
        } else if (char === ")") {

            if (stack.isEmpty()) {

                return false;
            }

            stack.pop();
        }
    }
    
    return stack.isEmpty();
}

console.log(isBalanced("(())()"));
console.log(isBalanced("())("));