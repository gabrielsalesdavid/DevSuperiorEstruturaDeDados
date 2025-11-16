let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([4, 5, 6, 7, 8]);

console.log("Conjunto A:", A);
console.log("Conjunto B:", B);

// União
let union = new Set([...A, ...B]);
console.log(`União de A e B: ${union}`);

let c01 = new Set(A);
B.forEach(x => c01.add(x));
B.forEach(x => c01.delete(x));
console.log(`Conjunto C01 (A ∪ B - B): ${c01}`);
console.log(`Conjunto C01 (A ∪ B): ${c01}`);

// Interseção
let intersection = new Set([...A].filter(x => B.has(x)));
console.log(`Interseção de A e B: ${intersection}`);

// Diferença (A - B)
let difference = new Set([...A].filter(x => !B.has(x)));
console.log(`Diferença de A e B (A - B): ${difference}`);

// Diferença (B - A)
let differenceBA = new Set([...B].filter(x => !A.has(x)));
console.log(`Diferença de B e A (B - A): ${differenceBA}`);