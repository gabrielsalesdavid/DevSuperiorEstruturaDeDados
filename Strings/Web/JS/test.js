let str = "Hello, World!";
let arr = str.split("");
arr[7] = 'W';
str = arr.join("");

console.log(str);