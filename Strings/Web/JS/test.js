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

console.log("str03.replace('test', 'demo'):", str03.replace("test", "demo"));

console.log("str03.replaceAll('test', 'demo'):", str03.replaceAll("test", "demo"));

console.log("str03.search('bla vla'):", str03.search("blabla"));

console.log("str03.split(' '):", str03.split(" "));

const s = "batata tomate abacaxi";
const vect = s.split(' ');
console.log(s[1]);

console.log("str04.slice(-3):", `"${str04.slice(-3)}"`);
console.log("str04.slice(2, 5):", `"${str04.slice(2, 5)}"`);
console.log("str04.slice(5, 2):", `"${str04.slice(5, 2)}"`);

console.log("str04.substring(-3):", `"${str04.substring(-3)}"`);
console.log("str04.substring(2, 5):", `"${str04.substring(2, 5)}"`);
console.log("str04.substring(5, 2):", `"${str04.substring(5, 2)}"`);

console.log("str02.toLowerCase():", str02.toLocaleLowerCase());

console.log("str02.toUpperCase():", str02.toUpperCase());

console.log(`"   Hello World!   ".trim():`, `"${'   Hello World!   '.trim()}"`);

console.log(str04[2]);

console.log("str02.startWith('Wor'):", str02.startsWith("Wor"));

console.log("str02.endsWith('!'):", str02.endsWith("!"));