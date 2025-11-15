function isBalanced(tex) {

    let stack = [];

    for (let char of text) {

        if (char === "(") {

            stack.push(char);
        } else if (char === ")") {

            if (stack.length === 0) {

                return false;
            }

            stack.pop();
        }
    }
    
    return stack.length === 0;
}

console.log(isBalanced("(())()"));
console.log(isBalanced("())("));