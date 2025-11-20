# 🐍 Conceitos de Estrutura de Dados e Algoritmos em Python

## 📚 Índice
1. [Estruturas de Dados](#estruturas-de-dados)
2. [Algoritmos](#algoritmos)
3. [Análise de Complexidade](#análise-de-complexidade)
4. [Padrões Python](#padrões-python)
5. [Boas Práticas](#boas-práticas)

---

## Estruturas de Dados

### List (Lista)

**Implementação nativa:**
```python
# Criação
lista = [1, 2, 3, 4, 5]
lista = list(range(5))           # [0, 1, 2, 3, 4]
lista = [x * 2 for x in range(5)]  # [0, 2, 4, 6, 8]

# Operações
lista.append(6)          # Adiciona no final: O(1)
lista.pop()              # Remove do final: O(1)
lista.insert(0, 0)       # Insere no início: O(n)
lista.pop(0)             # Remove do início: O(n)
lista.remove(3)          # Remove valor: O(n)
lista.extend([7, 8])     # Estende: O(k)

# Acesso e busca
lista[0]                 # O(1)
lista[-1]                # Último elemento: O(1)
3 in lista               # O(n)
lista.index(3)           # O(n)

# Slicing
lista[1:3]               # [2, 3]: O(k)
lista[::2]               # [1, 3, 5]: elementos pares
lista[::-1]              # [5, 4, 3, 2, 1]: invertido

# Iteração
for x in lista:
    print(x)

for i, x in enumerate(lista):
    print(i, x)
```

**Quando usar:**
- ✅ Coleções ordenadas
- ✅ Acesso por índice
- ✅ Tamanho dinâmico
- ❌ Inserção frequente no meio

---

### Deque (Double-Ended Queue)

```python
from collections import deque

fila = deque([1, 2, 3])

# Operações O(1)
fila.append(4)           # Adiciona à direita
fila.appendleft(0)       # Adiciona à esquerda
fila.pop()               # Remove da direita
fila.popleft()           # Remove da esquerda

# Iteração
for item in fila:
    print(item)
```

---

### Linked List (Lista Ligada)

```python
class Node:
    def __init__(self, valor):
        self.valor = valor
        self.proximo = None

class ListaLigada:
    def __init__(self):
        self.cabeca = None
        self.tamanho = 0
    
    def adicionar(self, valor):  # O(n)
        novo_node = Node(valor)
        if not self.cabeca:
            self.cabeca = novo_node
        else:
            atual = self.cabeca
            while atual.proximo:
                atual = atual.proximo
            atual.proximo = novo_node
        self.tamanho += 1
    
    def adicionar_no_inicio(self, valor):  # O(1)
        novo_node = Node(valor)
        novo_node.proximo = self.cabeca
        self.cabeca = novo_node
        self.tamanho += 1
    
    def remover(self, indice):  # O(n)
        if indice == 0:
            self.cabeca = self.cabeca.proximo
        else:
            atual = self.cabeca
            anterior = None
            for _ in range(indice):
                anterior = atual
                atual = atual.proximo
                if not atual:
                    return
            anterior.proximo = atual.proximo
        self.tamanho -= 1
    
    def obter(self, indice):  # O(n)
        atual = self.cabeca
        for _ in range(indice):
            if not atual:
                return None
            atual = atual.proximo
        return atual.valor if atual else None

# Uso
lista = ListaLigada()
lista.adicionar(1)
lista.adicionar(2)
lista.adicionar_no_inicio(0)
print(lista.obter(1))  # 1
```

---

### Stack (Pilha)

```python
class Pilha:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Exemplo: validar parênteses
def validar_parenteses(s):
    pilha = Pilha()
    pares = {')', '(': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in '([{':
            pilha.push(char)
        elif char in ')]}':
            if pilha.is_empty() or pilha.pop() != pares[char]:
                return False
    
    return pilha.is_empty()

print(validar_parenteses("()[]{}"))   # True
print(validar_parenteses("([)]"))     # False
```

---

### Queue (Fila)

```python
from collections import deque

class Fila:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[0]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Exemplo: simular fila de atendimento
def simula_fila():
    fila = Fila()
    
    # Clientes chegando
    for cliente in ['Ana', 'Bruno', 'Carlos']:
        fila.enqueue(cliente)
    
    # Atendimento
    while not fila.is_empty():
        print(f"Atendendo: {fila.dequeue()}")

simula_fila()
```

---

### Set (Conjunto)

```python
# Set nativo Python
conjunto = {1, 2, 3, 2, 1}  # {1, 2, 3}

conjunto.add(4)
conjunto.remove(1)
conjunto.discard(5)          # Remove sem erro
2 in conjunto                # True
len(conjunto)

# Operações de conjunto
a = {1, 2, 3}
b = {2, 3, 4}

a.union(b)          # {1, 2, 3, 4}
a | b               # {1, 2, 3, 4} (alternativa)

a.intersection(b)   # {2, 3}
a & b               # {2, 3} (alternativa)

a.difference(b)     # {1}
a - b               # {1} (alternativa)

a.symmetric_difference(b)  # {1, 4}
a ^ b                      # {1, 4} (alternativa)
```

---

### Dictionary (Dicionário)

```python
# Criação
dicionario = {'nome': 'João', 'idade': 30}
dicionario = dict(nome='João', idade=30)

# Operações
dicionario['nome']          # 'João'
dicionario.get('email', 'N/A')  # Seguro
'nome' in dicionario        # True
del dicionario['idade']
dicionario.pop('nome')

# Iteração
for chave, valor in dicionario.items():
    print(chave, valor)

# Exemplo: contagem de palavras
def contar_palavras(texto):
    palavras = {}
    for palavra in texto.split():
        palavras[palavra] = palavras.get(palavra, 0) + 1
    return palavras

from collections import Counter
# Ou usando Counter
contagem = Counter(texto.split())
```

---

### Tree (Árvore Binária de Busca)

```python
class NoArvore:
    def __init__(self, valor):
        self.valor = valor
        self.esquerda = None
        self.direita = None

class ArvoreBinariaDeBusca:
    def __init__(self):
        self.raiz = None
    
    def inserir(self, valor):
        if not self.raiz:
            self.raiz = NoArvore(valor)
        else:
            self._inserir_recursivo(self.raiz, valor)
    
    def _inserir_recursivo(self, no, valor):
        if valor < no.valor:
            if not no.esquerda:
                no.esquerda = NoArvore(valor)
            else:
                self._inserir_recursivo(no.esquerda, valor)
        else:
            if not no.direita:
                no.direita = NoArvore(valor)
            else:
                self._inserir_recursivo(no.direita, valor)
    
    def buscar(self, valor, no=None):
        if no is None:
            no = self.raiz
        if not no:
            return False
        if no.valor == valor:
            return True
        if valor < no.valor:
            return self.buscar(valor, no.esquerda)
        return self.buscar(valor, no.direita)
    
    # Percursos
    def inorder(self, no=None, resultado=None):
        if resultado is None:
            resultado = []
        if no is None:
            no = self.raiz
        
        if no:
            self.inorder(no.esquerda, resultado)
            resultado.append(no.valor)
            self.inorder(no.direita, resultado)
        
        return resultado
    
    def preorder(self, no=None, resultado=None):
        if resultado is None:
            resultado = []
        if no is None:
            no = self.raiz
        
        if no:
            resultado.append(no.valor)
            self.preorder(no.esquerda, resultado)
            self.preorder(no.direita, resultado)
        
        return resultado

# Uso
arvore = ArvoreBinariaDeBusca()
for valor in [5, 3, 7, 2, 4, 6, 8]:
    arvore.inserir(valor)

print(arvore.inorder())    # [2, 3, 4, 5, 6, 7, 8]
print(arvore.buscar(4))    # True
```

---

## Algoritmos

### Busca Linear

```python
def busca_sequencial(arr, alvo):
    for i, valor in enumerate(arr):
        if valor == alvo:
            return i
    return -1

# Uso
print(busca_sequencial([3, 1, 4, 1, 5], 4))  # 2
```

**Complexidade: O(n)**

---

### Busca Binária

```python
# Iterativa
def busca_binaria_iterativa(arr, alvo):
    esquerda, direita = 0, len(arr) - 1
    
    while esquerda <= direita:
        meio = (esquerda + direita) // 2
        
        if arr[meio] == alvo:
            return meio
        elif arr[meio] < alvo:
            esquerda = meio + 1
        else:
            direita = meio - 1
    
    return -1

# Recursiva
def busca_binaria_recursiva(arr, alvo, esq=0, dir=None):
    if dir is None:
        dir = len(arr) - 1
    
    if esq > dir:
        return -1
    
    meio = (esq + dir) // 2
    
    if arr[meio] == alvo:
        return meio
    elif arr[meio] < alvo:
        return busca_binaria_recursiva(arr, alvo, meio + 1, dir)
    else:
        return busca_binaria_recursiva(arr, alvo, esq, meio - 1)

# Uso
arr = [1, 3, 5, 7, 9, 11]
print(busca_binaria_iterativa(arr, 7))     # 3
print(busca_binaria_recursiva(arr, 7))     # 3
```

**Complexidade: O(log n)** - Requer array ORDENADO

---

### Bubble Sort

```python
def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n - 1):
        trocado = False
        
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                trocado = True
        
        if not trocado:
            break  # Array já está ordenado
    
    return arr

# Uso
print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))
```

**Complexidade: O(n²)**

---

### Merge Sort

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    meio = len(arr) // 2
    esquerda = merge_sort(arr[:meio])
    direita = merge_sort(arr[meio:])
    
    return mesclar(esquerda, direita)

def mesclar(esquerda, direita):
    resultado = []
    i = j = 0
    
    while i < len(esquerda) and j < len(direita):
        if esquerda[i] <= direita[j]:
            resultado.append(esquerda[i])
            i += 1
        else:
            resultado.append(direita[j])
            j += 1
    
    resultado.extend(esquerda[i:])
    resultado.extend(direita[j:])
    
    return resultado

# Uso
print(merge_sort([64, 34, 25, 12, 22, 11, 90]))
```

**Complexidade: O(n log n)** - Estável

---

### Quick Sort

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivo = arr[0]
    menores = [x for x in arr[1:] if x < pivo]
    maiores = [x for x in arr[1:] if x >= pivo]
    
    return quick_sort(menores) + [pivo] + quick_sort(maiores)

# In-place (mais eficiente)
def quick_sort_inplace(arr, esq=0, dir=None):
    if dir is None:
        dir = len(arr) - 1
    
    if esq < dir:
        pi = particiona(arr, esq, dir)
        quick_sort_inplace(arr, esq, pi - 1)
        quick_sort_inplace(arr, pi + 1, dir)
    
    return arr

def particiona(arr, esq, dir):
    pivo = arr[dir]
    i = esq - 1
    
    for j in range(esq, dir):
        if arr[j] < pivo:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[dir] = arr[dir], arr[i + 1]
    return i + 1

# Uso
print(quick_sort([64, 34, 25, 12, 22, 11, 90]))
```

**Complexidade: O(n log n)** média

---

### DFS (Busca em Profundidade)

```python
grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
}

# Recursiva
def dfs_recursiva(vertice, visitado=None):
    if visitado is None:
        visitado = set()
    
    visitado.add(vertice)
    print(vertice, end=' ')
    
    for vizinho in grafo[vertice]:
        if vizinho not in visitado:
            dfs_recursiva(vizinho, visitado)

# Iterativa (com pilha)
def dfs_iterativa(inicio):
    visitado = set()
    pilha = [inicio]
    
    while pilha:
        vertice = pilha.pop()
        
        if vertice not in visitado:
            print(vertice, end=' ')
            visitado.add(vertice)
            
            for vizinho in reversed(grafo[vertice]):
                if vizinho not in visitado:
                    pilha.append(vizinho)

dfs_recursiva('A')
dfs_iterativa('A')
```

**Complexidade: O(V + E)**

---

### BFS (Busca em Largura)

```python
from collections import deque

def bfs(inicio):
    visitado = {inicio}
    fila = deque([inicio])
    resultado = []
    
    while fila:
        vertice = fila.popleft()
        resultado.append(vertice)
        
        for vizinho in grafo[vertice]:
            if vizinho not in visitado:
                visitado.add(vizinho)
                fila.append(vizinho)
    
    return resultado

print(bfs('A'))  # ['A', 'B', 'C', 'D', 'E']
```

**Complexidade: O(V + E)** - Melhor para menor caminho

---

## Análise de Complexidade

```python
# O(1) - Constante
def primeiro(arr):
    return arr[0]

# O(log n) - Logarítmica
def busca_binaria(arr, alvo):
    # Visto acima

# O(n) - Linear
def soma(arr):
    return sum(arr)

# O(n log n) - Linearítmica
def merge_sort(arr):
    # Visto acima

# O(n²) - Quadrática
def bubble_sort(arr):
    # Visto acima

# O(2ⁿ) - Exponencial
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

---

## Padrões Python

### List Comprehension

```python
# Gerar lista
numeros = [x * 2 for x in range(5)]      # [0, 2, 4, 6, 8]

# Com condição
pares = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Aninhada
matriz = [[i * j for j in range(3)] for i in range(3)]

# Dictionary comprehension
quadrados = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, ...}

# Set comprehension
unicos = {x % 3 for x in range(10)}       # {0, 1, 2}
```

---

### Memoização com Decorator

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(35))  # Rápido!
```

---

### Sliding Window

```python
def max_soma_subarray(arr, k):
    if len(arr) < k:
        return None
    
    soma_atual = sum(arr[:k])
    soma_maxima = soma_atual
    
    for i in range(k, len(arr)):
        soma_atual = soma_atual - arr[i - k] + arr[i]
        soma_maxima = max(soma_maxima, soma_atual)
    
    return soma_maxima

print(max_soma_subarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4))  # 24
```

---

### Two Pointers

```python
def two_sum(arr, alvo):
    arr.sort()
    esq, dir = 0, len(arr) - 1
    
    while esq < dir:
        soma = arr[esq] + arr[dir]
        if soma == alvo:
            return [arr[esq], arr[dir]]
        elif soma < alvo:
            esq += 1
        else:
            dir -= 1
    
    return None

print(two_sum([2, 7, 11, 15], 9))  # [2, 7]
```

---

## Boas Práticas

### ✅ Recomendado

```python
# Type hints
def soma(a: int, b: int) -> int:
    return a + b

# Context managers
with open('arquivo.txt') as f:
    conteudo = f.read()

# Enumerate para índice e valor
for i, valor in enumerate(lista):
    print(i, valor)

# List comprehension
pares = [x for x in numeros if x % 2 == 0]

# Unpacking
a, b, c = [1, 2, 3]
chave, valor = item.items()

# Collections para estruturas especializadas
from collections import Counter, defaultdict, deque
```

### ❌ Evite

```python
# Não use índices quando puder iterar
for i in range(len(lista)):  # Evitar!
    print(lista[i])

for item in lista:  # Preferir!
    print(item)

# Não modifique lista durante iteração
for item in lista:
    if condicao:
        lista.remove(item)  # Evitar!

# Não use variáveis globais
global contador
contador += 1  # Evitar!

# Não ignore exceções
try:
    operacao()
except:
    pass  # Nunca faça isto!

# Use uma exceção específica
try:
    operacao()
except ValueError as e:
    print(f"Erro: {e}")
```

---

**Última atualização:** 20 de novembro de 2025
