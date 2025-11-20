# 🟨 Fundamentos de JavaScript

## 📚 Índice
1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Tipos de Dados](#tipos-de-dados)
4. [Variáveis](#variáveis)
5. [Operadores](#operadores)
6. [Estruturas de Controle](#estruturas-de-controle)
7. [Funções](#funções)
8. [Arrays e Métodos](#arrays-e-métodos)
9. [Objetos](#objetos)
10. [Assincronismo](#assincronismo)
11. [Boas Práticas](#boas-práticas)

---

## Introdução

**JavaScript** é uma linguagem de programação originalmente desenvolvida para navegadores web, mas agora usada também em servidores (Node.js), aplicações desktop e mobile.

### Características Principais
- 🔹 **Dinamicamente Tipada**: tipos verificados em runtime
- 🔹 **Baseada em Protótipos**: orientação a objetos via protótipos
- 🔹 **Suporta Programação Funcional**: first-class functions
- 🔹 **Assíncrona**: callbacks, promises, async/await
- 🔹 **Flexível**: permite múltiplos estilos de programação

---

## Configuração do Ambiente

### Node.js
```bash
# Verificar versão do Node.js
node --version

# Executar arquivo JavaScript
node arquivo.js

# Modo interativo (REPL)
node
```

### Navegador
```html
<!-- Incluir script no HTML -->
<script src="arquivo.js"></script>

<!-- Ou inline -->
<script>
  console.log("Hello from Browser!");
</script>
```

---

## Tipos de Dados

### Tipos Primitivos

```javascript
// String - texto
const nome = "João";
const msg = `Olá, ${nome}!`;  // Template literal

// Number - números (inteiros e decimais)
const idade = 25;
const pi = 3.14159;
const infinito = Infinity;
const naoNum = NaN;

// Boolean - verdadeiro/falso
const ativo = true;
const inativo = false;

// undefined - valor não definido
let x;
console.log(x);  // undefined

// null - ausência de valor (intencional)
let y = null;

// Symbol - identificador único
const id = Symbol("id");

// BigInt - números inteiros grandes
const grande = 9007199254740991n;
```

### Tipos Objeto/Referência

```javascript
// Object - objeto genérico
const pessoa = {
  nome: "Maria",
  idade: 30
};

// Array - coleção ordenada
const cores = ["vermelho", "verde", "azul"];

// Function - função
function saudacao() {
  return "Olá!";
}

// Date - data e hora
const hoje = new Date();

// RegExp - expressão regular
const padrao = /[a-z]+/g;
```

---

## Variáveis

### Declaração

```javascript
// var - escopo de função (evitar usar)
var x = 1;

// let - escopo de bloco (preferir)
let y = 2;

// const - constante, escopo de bloco (preferir)
const z = 3;

// Diferenças de escopo
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);  // 1 (var vaza do bloco)
console.log(b);  // ReferenceError
console.log(c);  // ReferenceError
```

### Regras de Nomeação

```javascript
// ✅ Bom
const idade = 25;
const nomeCompleto = "João Silva";
const isValido = true;
const MAX_TENTATIVAS = 3;

// ❌ Evitar
const 25idade;      // Não pode começar com número
const nome completo; // Não pode ter espaço
const function;     // Palavra reservada
```

---

## Operadores

### Aritméticos

```javascript
const a = 10, b = 3;

console.log(a + b);   // 13 (soma)
console.log(a - b);   // 7 (subtração)
console.log(a * b);   // 30 (multiplicação)
console.log(a / b);   // 3.333... (divisão)
console.log(a % b);   // 1 (resto/módulo)
console.log(a ** b);  // 1000 (potência)
```

### Comparação

```javascript
const x = 5;

console.log(x == "5");   // true (igualdade fraca - coerção)
console.log(x === "5");  // false (igualdade estrita - tipo importa)
console.log(x != "5");   // false
console.log(x !== "5");  // true

console.log(x > 3);      // true
console.log(x < 10);     // true
console.log(x >= 5);     // true
console.log(x <= 4);     // false
```

### Lógicos

```javascript
const a = true, b = false;

console.log(a && b);     // false (AND)
console.log(a || b);     // true (OR)
console.log(!a);         // false (NOT)

// Operador ternário
const idade = 20;
const status = idade >= 18 ? "Adulto" : "Menor";
```

### Atribuição

```javascript
let x = 10;

x += 5;    // x = x + 5 (15)
x -= 3;    // x = x - 3 (12)
x *= 2;    // x = x * 2 (24)
x /= 4;    // x = x / 4 (6)
x %= 5;    // x = x % 5 (1)
```

---

## Estruturas de Controle

### if/else

```javascript
const nota = 75;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else if (nota >= 60) {
  console.log("Satisfatório");
} else {
  console.log("Insuficiente");
}
```

### switch/case

```javascript
const dia = "segunda";

switch (dia) {
  case "segunda":
    console.log("Início da semana");
    break;
  case "sexta":
    console.log("Quase fim de semana!");
    break;
  default:
    console.log("Dia qualquer");
}
```

### for

```javascript
// for clássico
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...in (índices/chaves)
const obj = { a: 1, b: 2 };
for (const chave in obj) {
  console.log(chave, obj[chave]);
}

// for...of (valores)
const array = [10, 20, 30];
for (const valor of array) {
  console.log(valor);
}
```

### while/do...while

```javascript
// while
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}

// do...while (executa pelo menos uma vez)
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 3);
```

---

## Funções

### Declaração

```javascript
// Função tradicional
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("João"));  // "Olá, João!"

// Função expressão
const soma = function(a, b) {
  return a + b;
};

// Arrow function (ES6)
const multiplicar = (a, b) => a * b;
const dobro = x => x * 2;

// Arrow function com bloco
const dividir = (a, b) => {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
};
```

### Parâmetros Padrão

```javascript
function cumprimento(nome = "Visitante") {
  return `Bem-vindo, ${nome}!`;
}

console.log(cumprimento());        // "Bem-vindo, Visitante!"
console.log(cumprimento("Maria")); // "Bem-vindo, Maria!"
```

### Rest Parameters

```javascript
function somar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

console.log(somar(1, 2, 3, 4, 5));  // 15
```

### Destructuring

```javascript
// Array destructuring
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);  // 1 2 3

// Object destructuring
const { nome, idade } = { nome: "João", idade: 30 };
console.log(nome, idade);  // "João" 30

// Com valores padrão
const { cidade = "São Paulo" } = {};
console.log(cidade);  // "São Paulo"
```

---

## Arrays e Métodos

### Criação e Acesso

```javascript
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]);         // "maçã"
console.log(frutas.length);     // 3
console.log(frutas.indexOf("banana"));  // 1

// Adição
frutas.push("uva");            // Adiciona ao final
frutas.unshift("melancia");    // Adiciona ao início

// Remoção
frutas.pop();                  // Remove do final
frutas.shift();                // Remove do início
```

### Métodos de Iteração

```javascript
const numeros = [1, 2, 3, 4, 5];

// forEach - executa função para cada elemento
numeros.forEach(num => console.log(num * 2));

// map - transforma cada elemento
const dobrados = numeros.map(n => n * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]

// filter - filtra elementos
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);  // [2, 4]

// reduce - reduz a um valor
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma);  // 15

// find - encontra primeiro elemento
const primeiro = numeros.find(n => n > 3);
console.log(primeiro);  // 4

// some - verifica se algum atende condição
const temPar = numeros.some(n => n % 2 === 0);
console.log(temPar);  // true

// every - verifica se todos atendem
const todosPares = numeros.every(n => n % 2 === 0);
console.log(todosPares);  // false
```

### Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinado = [...arr1, ...arr2];
console.log(combinado);  // [1, 2, 3, 4, 5, 6]

// Cópia
const copia = [...arr1];
```

---

## Objetos

### Criação e Acesso

```javascript
// Object literal
const pessoa = {
  nome: "João",
  idade: 30,
  email: "joao@example.com",
  ativo: true
};

// Acesso
console.log(pessoa.nome);        // "João"
console.log(pessoa["idade"]);    // 30

// Adicionar/modificar propriedade
pessoa.telefone = "123456789";
pessoa.idade = 31;

// Deletar
delete pessoa.ativo;
```

### Métodos em Objetos

```javascript
const calculator = {
  valor: 10,
  
  somar(x) {
    return this.valor + x;
  },
  
  multiplicar: (x) => {
    // Arrow function não tem 'this' próprio
    return this.valor * x;
  }
};

console.log(calculator.somar(5));       // 15
```

### Object Methods

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Obter chaves
console.log(Object.keys(obj));      // ['a', 'b', 'c']

// Obter valores
console.log(Object.values(obj));    // [1, 2, 3]

// Obter pares [chave, valor]
console.log(Object.entries(obj));   // [['a', 1], ['b', 2], ['c', 3]]

// Cópia superficial
const copia = Object.assign({}, obj);

// Cópia profunda (simples)
const copiaProf = JSON.parse(JSON.stringify(obj));
```

---

## Assincronismo

### Callbacks

```javascript
function buscarDados(callback) {
  setTimeout(() => {
    callback(null, { id: 1, nome: "João" });
  }, 1000);
}

buscarDados((erro, dados) => {
  if (erro) {
    console.error(erro);
  } else {
    console.log(dados);
  }
});
```

### Promises

```javascript
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Erro na operação!");
    }
  }, 1000);
});

promessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro))
  .finally(() => console.log("Finalizado"));
```

### Async/Await

```javascript
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.example.com/dados");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error(erro);
  } finally {
    console.log("Requisição finalizada");
  }
}

buscarDados();
```

---

## Boas Práticas

### ✅ Recomendado

```javascript
// Use const por padrão
const x = 10;

// Use let para valores que mudam
let contador = 0;

// Prefira arrow functions
const dobro = x => x * 2;

// Use template literals
const saudacao = `Olá, ${nome}!`;

// Prefira const/let ao invés de var
// var é legacy

// Use === ao invés de ==
if (x === 5) { }

// Nomeie variáveis claramente
const nomeDoUsuario = "João";
const idadeMaxima = 100;

// Use funções puras
const somar = (a, b) => a + b;
```

### ❌ Evite

```javascript
// Não use var
var x = 10;

// Não use ==
if (x == "10") { }

// Não deixe variáveis globais
window.variavel = "global";

// Não use nested callbacks profundos (callback hell)
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        // Evitar isso!
      });
    });
  });
});

// Não use números mágicos
if (x > 18) { }  // O que é 18?

// Prefira async/await a promises aninhadas
```

### Convenções de Código

```javascript
// camelCase para variáveis e funções
const nomeCompleto = "João Silva";
function calcularIdade() { }

// PascalCase para Classes
class Pessoa { }

// UPPER_SNAKE_CASE para constantes
const TAXA_CONVERSAO = 0.85;
const MAX_TENTATIVAS = 3;

// Indentação de 2 ou 4 espaços
if (condicao) {
  console.log("Indentado");
}
```

---

## Recursos Adicionais

- 📖 [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- 🎓 [JavaScript.info](https://javascript.info/)
- 🚀 [Node.js Documentation](https://nodejs.org/docs/)
- 💻 [ES6+ Features](https://github.com/lukehoban/es6features)

---

**Criado em:** 20 de novembro de 2025
