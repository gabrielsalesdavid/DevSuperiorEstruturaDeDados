# 🟨 Conceitos de Estrutura de Dados e Algoritmos em JavaScript

## 📚 Índice
1. [Estruturas de Dados](#estruturas-de-dados)
2. [Algoritmos](#algoritmos)
3. [Análise de Complexidade](#análise-de-complexidade)
4. [Padrões JavaScript](#padrões-javascript)
5. [Boas Práticas](#boas-práticas)

---

## Estruturas de Dados

### Array

**Implementação nativa:**
```javascript
// Criação
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(5);

// Operações
arr.push(6);           // Adiciona no final: O(1)
arr.pop();             // Remove do final: O(1)
arr.unshift(0);        // Adiciona no início: O(n)
arr.shift();           // Remove do início: O(n)
arr.splice(2, 1, 99);  // Insere/remove: O(n)

// Iteração
arr.forEach(el => console.log(el));
for (const el of arr) { }
arr.map(x => x * 2);
arr.filter(x => x > 2);

// Busca
arr.indexOf(3);        // O(n)
arr.includes(3);       // O(n)
arr.find(x => x > 2);  // O(n)
```

**Quando usar:**
- ✅ Coleções ordenadas
- ✅ Acesso rápido por índice
- ✅ Iteração sequencial
- ❌ Inserção/remoção no início (usar LinkedList)

---

### Lista Ligada (Linked List)

```javascript
class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
        this.tamanho = 0;
    }
    
    // Adicionar no final: O(n)
    adicionar(valor) {
        const novoNode = new Node(valor);
        
        if (!this.cabeca) {
            this.cabeca = novoNode;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNode;
        }
        this.tamanho++;
    }
    
    // Adicionar no início: O(1)
    adicionarNoInicio(valor) {
        const novoNode = new Node(valor);
        novoNode.proximo = this.cabeca;
        this.cabeca = novoNode;
        this.tamanho++;
    }
    
    // Remover posição: O(n)
    remover(indice) {
        if (indice === 0) {
            this.cabeca = this.cabeca.proximo;
        } else {
            let atual = this.cabeca;
            let anterior = null;
            let contador = 0;
            
            while (contador < indice && atual) {
                anterior = atual;
                atual = atual.proximo;
                contador++;
            }
            
            if (atual) {
                anterior.proximo = atual.proximo;
            }
        }
        this.tamanho--;
    }
    
    // Obter em posição: O(n)
    obter(indice) {
        let atual = this.cabeca;
        for (let i = 0; i < indice && atual; i++) {
            atual = atual.proximo;
        }
        return atual ? atual.valor : null;
    }
}

// Uso
const lista = new ListaLigada();
lista.adicionar(1);
lista.adicionar(2);
lista.adicionarNoInicio(0);
console.log(lista.obter(1));  // 1
```

---

### Pilha (Stack) com Array

```javascript
class Pilha {
    constructor() {
        this.items = [];
    }
    
    push(elemento) {
        this.items.push(elemento);
    }
    
    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

// Exemplo: Validar parênteses balanceados
function validarParenteses(s) {
    const pilha = new Pilha();
    const pares = { ')': '(', ']': '[', '}': '{' };
    
    for (const char of s) {
        if ('([{'.includes(char)) {
            pilha.push(char);
        } else if (')]}' .includes(char)) {
            if (pilha.isEmpty() || pilha.pop() !== pares[char]) {
                return false;
            }
        }
    }
    return pilha.isEmpty();
}

console.log(validarParenteses("()[]{}"));      // true
console.log(validarParenteses("([{}])"));      // true
console.log(validarParenteses("([)]"));        // false
```

---

### Fila (Queue) com Array

```javascript
class Fila {
    constructor() {
        this.items = [];
    }
    
    enqueue(elemento) {
        this.items.push(elemento);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    peek() {
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

// Exemplo: Simular fila de atendimento
function simulaFila() {
    const fila = new Fila();
    
    // Clientes chegando
    ['Ana', 'Bruno', 'Carlos'].forEach(cliente => {
        fila.enqueue(cliente);
    });
    
    // Atendimento
    while (!fila.isEmpty()) {
        console.log(`Atendendo: ${fila.dequeue()}`);
    }
}

simulaFila();
```

---

### Conjunto (Set)

```javascript
// Set nativo JavaScript
const conjunto = new Set([1, 2, 3, 2, 1]);  // {1, 2, 3}

conjunto.add(4);
conjunto.has(2);          // true
conjunto.delete(1);
conjunto.size;            // 3
conjunto.clear();

// Operações de conjunto
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// União
const uniao = new Set([...a, ...b]);  // {1, 2, 3, 4}

// Interseção
const intersecao = new Set([...a].filter(x => b.has(x)));  // {2, 3}

// Diferença
const diferenca = new Set([...a].filter(x => !b.has(x)));  // {1}
```

---

### Dicionário/Map

```javascript
// Map nativo JavaScript
const mapa = new Map();

mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

mapa.get('chave1');       // 'valor1'
mapa.has('chave1');       // true
mapa.delete('chave1');
mapa.size;                // 1
mapa.clear();

// Object como dicionário (simples)
const dict = {
    'nome': 'João',
    'idade': 30
};

dict.nome;                // 'João'
'nome' in dict;           // true
delete dict.idade;

// Exemplo: Contagem de palavras
function contarPalavras(texto) {
    const mapa = new Map();
    
    texto.split(' ').forEach(palavra => {
        mapa.set(palavra, (mapa.get(palavra) || 0) + 1);
    });
    
    return mapa;
}

const contagem = contarPalavras('javascript javascript python java');
console.log(contagem);  // Map { 'javascript' => 2, 'python' => 1, 'java' => 1 }
```

---

### Árvore Binária de Busca

```javascript
class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

class ArvoreBinariaDeBusca {
    constructor() {
        this.raiz = null;
    }
    
    // Inserir: O(log n) média, O(n) pior caso
    inserir(valor) {
        const novoNo = new NoArvore(valor);
        
        if (!this.raiz) {
            this.raiz = novoNo;
        } else {
            this._inserirRecursivo(this.raiz, novoNo, valor);
        }
    }
    
    _inserirRecursivo(no, novoNo, valor) {
        if (valor < no.valor) {
            if (!no.esquerda) {
                no.esquerda = novoNo;
            } else {
                this._inserirRecursivo(no.esquerda, novoNo, valor);
            }
        } else {
            if (!no.direita) {
                no.direita = novoNo;
            } else {
                this._inserirRecursivo(no.direita, novoNo, valor);
            }
        }
    }
    
    // Buscar: O(log n) média, O(n) pior caso
    buscar(valor, no = this.raiz) {
        if (!no) return false;
        if (no.valor === valor) return true;
        if (valor < no.valor) return this.buscar(valor, no.esquerda);
        return this.buscar(valor, no.direita);
    }
    
    // In-order (esquerda, raiz, direita) - ordem crescente
    inOrder(no = this.raiz, resultado = []) {
        if (no) {
            this.inOrder(no.esquerda, resultado);
            resultado.push(no.valor);
            this.inOrder(no.direita, resultado);
        }
        return resultado;
    }
    
    // Pre-order (raiz, esquerda, direita)
    preOrder(no = this.raiz, resultado = []) {
        if (no) {
            resultado.push(no.valor);
            this.preOrder(no.esquerda, resultado);
            this.preOrder(no.direita, resultado);
        }
        return resultado;
    }
    
    // Post-order (esquerda, direita, raiz)
    postOrder(no = this.raiz, resultado = []) {
        if (no) {
            this.postOrder(no.esquerda, resultado);
            this.postOrder(no.direita, resultado);
            resultado.push(no.valor);
        }
        return resultado;
    }
}

// Uso
const arvore = new ArvoreBinariaDeBusca();
[5, 3, 7, 2, 4, 6, 8].forEach(v => arvore.inserir(v));

console.log(arvore.inOrder());   // [2, 3, 4, 5, 6, 7, 8]
console.log(arvore.preOrder());  // [5, 3, 2, 4, 7, 6, 8]
console.log(arvore.buscar(4));   // true
```

---

## Algoritmos

### Busca Linear

```javascript
function buscaSequencial(arr, alvo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === alvo) return i;
    }
    return -1;
}

// Uso
console.log(buscaSequencial([3, 1, 4, 1, 5], 4));  // 2
```

**Complexidade: O(n)**

---

### Busca Binária

```javascript
// Iterativa
function buscaBinariaIterativa(arr, alvo) {
    let esquerda = 0, direita = arr.length - 1;
    
    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);
        
        if (arr[meio] === alvo) return meio;
        if (arr[meio] < alvo) esquerda = meio + 1;
        else direita = meio - 1;
    }
    return -1;
}

// Recursiva
function buscaBinariaRecursiva(arr, alvo, esq = 0, dir = arr.length - 1) {
    if (esq > dir) return -1;
    
    const meio = Math.floor((esq + dir) / 2);
    if (arr[meio] === alvo) return meio;
    if (arr[meio] < alvo) return buscaBinariaRecursiva(arr, alvo, meio + 1, dir);
    return buscaBinariaRecursiva(arr, alvo, esq, meio - 1);
}

// Uso
const arr = [1, 3, 5, 7, 9, 11];
console.log(buscaBinariaIterativa(arr, 7));   // 3
console.log(buscaBinariaRecursiva(arr, 7));   // 3
```

**Complexidade: O(log n)** - Requer array ORDENADO

---

### Bubble Sort

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Com otimização (parar se já está ordenado)
function bubbleSortOtimizado(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let trocado = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                trocado = true;
            }
        }
        
        if (!trocado) break;  // Array já está ordenado
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
```

**Complexidade: O(n²)** - Simples mas ineficiente

---

### Merge Sort

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const meio = Math.floor(arr.length / 2);
    const esquerda = mergeSort(arr.slice(0, meio));
    const direita = mergeSort(arr.slice(meio));
    
    return mesclar(esquerda, direita);
}

function mesclar(esquerda, direita) {
    const resultado = [];
    let i = 0, j = 0;
    
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] <= direita[j]) {
            resultado.push(esquerda[i++]);
        } else {
            resultado.push(direita[j++]);
        }
    }
    
    return resultado.concat(esquerda.slice(i), direita.slice(j));
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
```

**Complexidade: O(n log n)** - Estável e eficiente

---

### Quick Sort

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivo = arr[0];
    const menores = arr.slice(1).filter(x => x < pivo);
    const maiores = arr.slice(1).filter(x => x >= pivo);
    
    return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

// In-place (mais eficiente em espaço)
function quickSortInPlace(arr, esq = 0, dir = arr.length - 1) {
    if (esq >= dir) return arr;
    
    const pi = particiona(arr, esq, dir);
    quickSortInPlace(arr, esq, pi - 1);
    quickSortInPlace(arr, pi + 1, dir);
    
    return arr;
}

function particiona(arr, esq, dir) {
    const pivo = arr[dir];
    let i = esq - 1;
    
    for (let j = esq; j < dir; j++) {
        if (arr[j] < pivo) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[dir]] = [arr[dir], arr[i + 1]];
    return i + 1;
}

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
```

**Complexidade: O(n log n)** média, O(n²) pior caso

---

### DFS (Busca em Profundidade)

```javascript
// Com adjacência list
const grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
};

// Recursiva
function dfsRecursiva(vertice, visitado = new Set()) {
    visitado.add(vertice);
    console.log(vertice);
    
    for (const vizinho of grafo[vertice]) {
        if (!visitado.has(vizinho)) {
            dfsRecursiva(vizinho, visitado);
        }
    }
}

// Iterativa (com pilha)
function dfsIterativa(inicio) {
    const visitado = new Set();
    const pilha = [inicio];
    
    while (pilha.length > 0) {
        const vertice = pilha.pop();
        
        if (!visitado.has(vertice)) {
            console.log(vertice);
            visitado.add(vertice);
            
            for (const vizinho of grafo[vertice]) {
                if (!visitado.has(vizinho)) {
                    pilha.push(vizinho);
                }
            }
        }
    }
}

dfsRecursiva('A');
```

**Complexidade: O(V + E)** - V = vértices, E = arestas

---

### BFS (Busca em Largura)

```javascript
function bfs(inicio) {
    const visitado = new Set([inicio]);
    const fila = [inicio];
    const resultado = [];
    
    while (fila.length > 0) {
        const vertice = fila.shift();
        resultado.push(vertice);
        
        for (const vizinho of grafo[vertice]) {
            if (!visitado.has(vizinho)) {
                visitado.add(vizinho);
                fila.push(vizinho);
            }
        }
    }
    
    return resultado;
}

console.log(bfs('A'));  // ['A', 'B', 'C', 'D', 'E']
```

**Complexidade: O(V + E)** - Melhor para menor caminho

---

## Análise de Complexidade

### Notação Big O em JavaScript

```javascript
// O(1) - Constante
function primeiro(arr) {
    return arr[0];
}

// O(log n) - Logarítmica
function buscaBinaria(arr, alvo) {
    let esq = 0, dir = arr.length - 1;
    while (esq <= dir) {
        const meio = Math.floor((esq + dir) / 2);
        if (arr[meio] === alvo) return true;
        if (arr[meio] < alvo) esq = meio + 1;
        else dir = meio - 1;
    }
    return false;
}

// O(n) - Linear
function soma(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// O(n log n) - Linearítmica
function mergeSort(arr) {
    // Visto acima
}

// O(n²) - Quadrática
function bubbleSort(arr) {
    // Visto acima
}

// O(2ⁿ) - Exponencial
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## Padrões JavaScript

### Memoização

```javascript
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Com decorator
function memoizar(fn) {
    const cache = {};
    return function(...args) {
        const chave = JSON.stringify(args);
        if (chave in cache) return cache[chave];
        return cache[chave] = fn.apply(this, args);
    };
}

const fibMemo = memoizar(fibonacci);
```

---

### Sliding Window (Janela Deslizante)

```javascript
// Máxima soma de subarray com tamanho k
function maxSomaSubarray(arr, k) {
    let somaAtual = arr.slice(0, k).reduce((a, b) => a + b, 0);
    let somaMax = somaAtual;
    
    for (let i = k; i < arr.length; i++) {
        somaAtual = somaAtual - arr[i - k] + arr[i];
        somaMax = Math.max(somaMax, somaAtual);
    }
    
    return somaMax;
}

console.log(maxSomaSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));  // 24
```

---

### Two Pointers

```javascript
// Encontrar par com soma alvo
function twoSum(arr, alvo) {
    arr.sort((a, b) => a - b);
    let esq = 0, dir = arr.length - 1;
    
    while (esq < dir) {
        const soma = arr[esq] + arr[dir];
        if (soma === alvo) return [arr[esq], arr[dir]];
        if (soma < alvo) esq++;
        else dir--;
    }
    
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));  // [2, 7]
```

---

## Boas Práticas

### ✅ Recomendado

```javascript
// Use const por padrão
const arr = [1, 2, 3];

// Desestruturação
const [primeiro, segundo] = arr;
const { nome, idade } = pessoa;

// Arrow functions para callbacks
arr.map(x => x * 2);

// Spread operator
const copia = [...arr];
const merged = [...arr1, ...arr2];

// Métodos nativos eficientes
arr.includes(2);      // Melhor que indexOf(2) >= 0
arr.find(x => x > 2); // Mais claro

// Rest parameters
function soma(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}
```

### ❌ Evite

```javascript
// Não modifique array durante iteração
arr.forEach(item => arr.push(item));  // Evitar!

// Não use var
var x = 10;  // Evitar! Use const/let

// Não compare com == 
if (valor == true) {}  // Evitar!
if (valor === true) {} // Usar!

// Não ignore tipos
const resultado = arr[i] + 10;  // Pode ser string!
const resultado = Number(arr[i]) + 10;  // Seguro

// Não faça cópias com slice desnecessariamente
const copia = arr.slice();     // Evitar se possível
const copia = [...arr];        // Preferir (mais moderno)
```

---

**Última atualização:** 20 de novembro de 2025
