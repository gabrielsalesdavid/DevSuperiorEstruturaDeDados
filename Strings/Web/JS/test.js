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

function validateCEP(cep) {

    const regex = /^\d{5}-?\d{3}$/;
    return regex.test(cep);
}

console.log(validateCEP("12345-678"));
console.log(validateCEP("12345678"));
console.log(validateCEP("1234-5678"));

function removeNonDigits(string) {

    const regex = /\D/g;
    return string.replace(regex, "");
}

console.log(removeNonDigits("94923784799"));
console.log(removeNonDigits("213.445.034-82"));

function validateBrDomain(domain) {

    const regex = /\.br$/;
    return regex.test(regex, "");
}

console.log(validateBrDomain("batata.com.br"));
console.log(validateBrDomain("banana.com"));

function findEmails(string) {

    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const result = string.match(regex);
    if(result) {

        return result;
    }

    return [];
}

const text = "Para mais informações, contate-nos em contato@exemplo.com ou suporte@exemplo.com.br.";

const emails = findEmails(text);

if(emails.length > 0) {

    console.log("Emails encontrados: ");

    for(let i = 0; i < emails.length; i++) {

        console.log(emails[i]);
    }
} else {

    console.log("Nenhum email encontrado.");
}

function validaTelefone(str) {

    const regex = /^(?:\+55\s?)?(?:\([1-9]{2}\)|[1-9]{2})\s?(?:9\s?)?[6789][0-9{3}\s?-?\s?[0-9/]{4}$/;
    return regex.test(str);
}

console.log(validaTelefone("+55 11 9 5478 6321"));

function validaDate(str) {

    const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d\d$/;
    return regex.test(str);
}

console.log(validaDate("15/03/2024"));