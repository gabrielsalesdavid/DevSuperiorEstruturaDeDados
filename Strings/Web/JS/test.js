let str = "Hello, World!";
let arr = str.split("");
arr[7] = 'W';
str = arr.join("");

console.log(str);

let str01 = "Hello, ";
let str02 = "World!";
let str03 = "This is a test. Testing, testone, two, three.";
let str04 = "Mozilla";

console.log(`string01: "${str01}"`);
console.log(`string02: "${str02}"`);
console.log(`string03: "${str03}"`);
console.log(`string04: "${str04}"`);

let concatenated = str01.concat(str02);
console.log("str01.concat(str02):", concatenated);

console.log("str03.indexOf('Test'):", str03.indexOf("Test"));

console.log("str03.match(/test/g):", str03.match(/test/g));

let matchAllResult02 = Array.from(str03.matchAll("test"));
console.log("Array.from(str03.matchAll('test')):", matchAllResult02);