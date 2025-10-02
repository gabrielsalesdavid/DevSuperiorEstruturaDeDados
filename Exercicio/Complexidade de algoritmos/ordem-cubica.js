function matrixMultiply(A, B) {

    const m = A.length;
    const p = A[0].length;
    const n = B[0].length;

    const C = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < p; k++) {

                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

const A = [
    [1, 2, 3],
    [4, 5, 6]
];

const B = [
    [7, 8],
    [9, 10],
    [11, 12]
];


const C = matrixMultiply(A, B);
console.log(C);