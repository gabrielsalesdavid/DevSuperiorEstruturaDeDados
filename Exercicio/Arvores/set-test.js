import BinarySearchTreeSet from "./binary-search-tree-set.js";

const A = new BinarySearchTreeSet();

console.log(`isEmpty = ${(A.isEmpty())}`); // true
console.log(`size = ${A.size()}`); // 0
console.log(`keys = ${A.keys()}`); // []
console.log(`has 52 = ${A.has(52)}`); // false
console.log(`has 67 = ${A.contains(67)}`); // false

A.add(52);
A.add(67);

console.log(`isEmpty = ${(A.isEmpty())}`); // false
console.log(`size = ${A.size()}`); // 2

const B = new BinarySearchTreeSet([52, 17, 67, 11, 33, 55, 83, 14, 31, 46, 23, 26]);

console.log(`isEmpty = ${(B.isEmpty())}`); // false
console.log(`size = ${B.size()}`); // 12
console.log(`size after adding duplicates = ${B.size()}`); // 12
console.log(`size after adding new element = ${B.size()}`); // 13
console.log(`keys = ${B.keys()}`); // [11, 14, 17, 23, 26, 31, 33, 46, 52, 55, 67, 83]
console.log(`has 52 = ${B.has(52)}`); // true
console.log(`has 67 = ${B.contains(67)}`); // true