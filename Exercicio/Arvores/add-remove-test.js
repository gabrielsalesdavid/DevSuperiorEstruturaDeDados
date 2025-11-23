import BinarySearchTreeSet from "./binary-search-tree-set.js";

const A = new BinarySearchTreeSet([52, 17, 67, 11, 33, 55, 83, 14, 31, 46, 23, 26]);

console.log(`isEmpty = ${(A.isEmpty())}`); // false
console.log(`size = ${A.size()}`); // 12
console.log(`keys = ${A.keys()}`); // [11, 14, 17, 23, 26, 31, 33, 46, 52, 55, 67, 83]
console.log(`has 52 = ${A.has(52)}`); // true
console.log(`has 67 = ${A.contains(67)}`); // true

A.remove(23);
A.remove(52);

console.log(`size after removing 23 and 52 = ${A.size()}`); // 10
console.log(`keys after removing 23 and 52 = ${A.keys()}`); // [11, 14, 17, 26, 31, 33, 46, 55, 67, 83]
console.log(`has 52 = ${A.has(52)}`); // false
console.log(`has 67 = ${A.contains(67)}`); // true

A.remove(100); // removing non-existing key

console.log(`size after trying to remove non-existing key 100 = ${A.size()}`); // 10
console.log(`keys after trying to remove non-existing key 100 = ${A.keys()}`); // [11, 14, 17, 26, 31, 33, 46, 55, 67, 83]