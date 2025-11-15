function validParenthese(text) {

    let stack = [];

    for (let c of text) {

        if (c === "(") {
            stack.push(")");

        } else if (c === "{") {
            stack.push("}");

        } else if (c === "[") {
            stack.push("]");

        } else if (stack.lenght === 0 || stack.pop() !== c) {
            return false;

        }
    }

    return stack.length === 0;
}

console.log(validParenthese("()([]{})"));
console.log(validParenthese("(){]{}"));
console.log(validParenthese("(({[()]}{{}}[{[]}]))"));