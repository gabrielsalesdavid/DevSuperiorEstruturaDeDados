# 🟦 Conceitos de Estrutura de Dados e Algoritmos em C#

## 📚 Índice
1. [Estruturas de Dados](#estruturas-de-dados)
2. [Algoritmos](#algoritmos)
3. [Análise de Complexidade](#análise-de-complexidade)
4. [Padrões C#](#padrões-csharp)
5. [Boas Práticas](#boas-práticas)

---

## Estruturas de Dados

### Array

**Implementação:**
```csharp
// Criação
int[] numeros = { 1, 2, 3, 4, 5 };
int[] arr = new int[5];
int[] arr2 = new[] { 1, 2, 3 };

// Acesso e modificação
numeros[0] = 10;
int primeiro = numeros[0];  // O(1)
int tamanho = numeros.Length;

// Iteração
foreach (int num in numeros) {
    Console.WriteLine(num);
}

for (int i = 0; i < numeros.Length; i++) {
    Console.WriteLine(numeros[i]);
}

// LINQ - Busca funcional
var maior = numeros.Where(x => x > 3).FirstOrDefault();
var dobrados = numeros.Select(x => x * 2).ToArray();
```

**Quando usar:**
- ✅ Coleção com tamanho fixo
- ✅ Acesso rápido por índice
- ❌ Inserção/remoção (use List<T>)

---

### List<T>

**Implementação:**
```csharp
using System;
using System.Collections.Generic;

// Criação
var lista = new List<int>();
var lista2 = new List<int> { 1, 2, 3, 4, 5 };

// Operações
lista.Add(1);              // Adiciona: O(1) amortizado
lista.Insert(0, 0);        // Insere: O(n)
lista.Remove(1);           // Remove: O(n)
lista.RemoveAt(0);         // Remove índice: O(n)
lista[0] = 10;             // Modifica: O(1)
lista.Contains(5);         // Contém?: O(n)
lista.IndexOf(5);          // Índice: O(n)
lista.Count;               // Tamanho: O(1)

// Iteração
foreach (int num in lista) {
    Console.WriteLine(num);
}

// LINQ
var pares = lista.Where(x => x % 2 == 0).ToList();
var triplos = lista.Select(x => x * 3).ToList();
var ordenado = lista.OrderBy(x => x).ToList();
```

---

### LinkedList<T>

```csharp
using System.Collections.Generic;

public class LinkedListCustom<T> {
    private class Node {
        public T Value { get; set; }
        public Node Next { get; set; }
        
        public Node(T value) => Value = value;
    }
    
    private Node head;
    public int Count { get; private set; }
    
    public void Add(T value) {  // O(n)
        var novoNode = new Node(value);
        
        if (head == null) {
            head = novoNode;
        } else {
            var atual = head;
            while (atual.Next != null) {
                atual = atual.Next;
            }
            atual.Next = novoNode;
        }
        Count++;
    }
    
    public void AddFirst(T value) {  // O(1)
        var novoNode = new Node(value);
        novoNode.Next = head;
        head = novoNode;
        Count++;
    }
    
    public void Remove(int index) {  // O(n)
        if (index == 0) {
            head = head.Next;
        } else {
            var atual = head;
            Node anterior = null;
            
            for (int i = 0; i < index; i++) {
                anterior = atual;
                atual = atual.Next;
            }
            
            if (atual != null) {
                anterior.Next = atual.Next;
            }
        }
        Count--;
    }
    
    public T Get(int index) {  // O(n)
        var atual = head;
        for (int i = 0; i < index && atual != null; i++) {
            atual = atual.Next;
        }
        return atual != null ? atual.Value : default;
    }
}

// Ou usar LinkedList<T> nativa
var linkedList = new LinkedList<int>();
linkedList.AddFirst(0);      // O(1)
linkedList.AddLast(1);       // O(1)
linkedList.RemoveFirst();    // O(1)
linkedList.RemoveLast();     // O(1)
```

---

### Stack<T>

```csharp
using System.Collections.Generic;

// Stack nativo
var pilha = new Stack<int>();

pilha.Push(1);      // Adiciona: O(1)
pilha.Pop();        // Remove: O(1)
pilha.Peek();       // Vê topo: O(1)
pilha.Count;        // Tamanho: O(1)

// Exemplo: validar parênteses
public static bool ValidarParenteses(string s) {
    var pilha = new Stack<char>();
    var pares = new Dictionary<char, char> {
        { ')', '(' },
        { ']', '[' },
        { '}', '{' }
    };
    
    foreach (char c in s) {
        if (c == '(' || c == '[' || c == '{') {
            pilha.Push(c);
        } else if (c == ')' || c == ']' || c == '}') {
            if (pilha.Count == 0 || pilha.Pop() != pares[c]) {
                return false;
            }
        }
    }
    
    return pilha.Count == 0;
}

// Uso
Console.WriteLine(ValidarParenteses("()[]{}"));   // true
Console.WriteLine(ValidarParenteses("([)]"));     // false
```

---

### Queue<T>

```csharp
using System.Collections.Generic;

// Queue nativa
var fila = new Queue<int>();

fila.Enqueue(1);    // Adiciona: O(1)
fila.Dequeue();     // Remove: O(1)
fila.Peek();        // Primeiro: O(1)
fila.Count;         // Tamanho: O(1)

// Exemplo: simular fila de atendimento
public static void SimulaFila() {
    var fila = new Queue<string>();
    
    fila.Enqueue("Cliente 1");
    fila.Enqueue("Cliente 2");
    fila.Enqueue("Cliente 3");
    
    while (fila.Count > 0) {
        Console.WriteLine($"Atendendo: {fila.Dequeue()}");
    }
}
```

---

### HashSet<T>

```csharp
using System.Collections.Generic;

// HashSet
var conjunto = new HashSet<int> { 1, 2, 3, 2, 1 };  // {1, 2, 3}

conjunto.Add(4);
conjunto.Remove(1);
conjunto.Contains(2);      // true: O(1)
conjunto.Count;            // 3: O(1)

// Operações de conjunto
var a = new HashSet<int> { 1, 2, 3 };
var b = new HashSet<int> { 2, 3, 4 };

// União
a.UnionWith(b);            // {1, 2, 3, 4}

// Interseção
a.IntersectWith(b);        // {2, 3}

// Diferença
a.ExceptWith(b);           // {1}

// Simetria
a.SymmetricExceptWith(b);  // {1, 4}
```

---

### Dictionary<K, V>

```csharp
using System.Collections.Generic;

// Dictionary
var mapa = new Dictionary<string, int>();

mapa["João"] = 30;
mapa.Add("Maria", 25);

mapa["João"];               // 30: O(1)
mapa.ContainsKey("João");   // true
mapa.Remove("João");
mapa.Count;                 // 1

// TryGetValue (seguro)
if (mapa.TryGetValue("Ana", out int idade)) {
    Console.WriteLine(idade);
} else {
    Console.WriteLine("Não encontrado");
}

// Iteração
foreach (var kvp in mapa) {
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}

// Exemplo: contagem de palavras
public static Dictionary<string, int> ContarPalavras(string texto) {
    var mapa = new Dictionary<string, int>();
    
    foreach (var palavra in texto.Split(' ')) {
        if (mapa.ContainsKey(palavra)) {
            mapa[palavra]++;
        } else {
            mapa[palavra] = 1;
        }
    }
    
    return mapa;
}
```

---

### Tree (Árvore Binária de Busca)

```csharp
public class TreeNode<T> where T : IComparable<T> {
    public T Value { get; set; }
    public TreeNode<T> Left { get; set; }
    public TreeNode<T> Right { get; set; }
    
    public TreeNode(T value) => Value = value;
}

public class BinarySearchTree<T> where T : IComparable<T> {
    private TreeNode<T> root;
    
    // Inserir: O(log n) média, O(n) pior caso
    public void Insert(T value) {
        if (root == null) {
            root = new TreeNode<T>(value);
        } else {
            InsertRecursive(root, value);
        }
    }
    
    private void InsertRecursive(TreeNode<T> node, T value) {
        if (value.CompareTo(node.Value) < 0) {
            if (node.Left == null) {
                node.Left = new TreeNode<T>(value);
            } else {
                InsertRecursive(node.Left, value);
            }
        } else {
            if (node.Right == null) {
                node.Right = new TreeNode<T>(value);
            } else {
                InsertRecursive(node.Right, value);
            }
        }
    }
    
    // Buscar: O(log n) média, O(n) pior caso
    public bool Search(T value) => SearchRecursive(root, value);
    
    private bool SearchRecursive(TreeNode<T> node, T value) {
        if (node == null) {
            return false;
        }
        
        int comp = value.CompareTo(node.Value);
        if (comp == 0) {
            return true;
        } else if (comp < 0) {
            return SearchRecursive(node.Left, value);
        } else {
            return SearchRecursive(node.Right, value);
        }
    }
    
    // In-order (esquerda, raiz, direita) - ordem crescente
    public void InOrder() => InOrderRecursive(root);
    
    private void InOrderRecursive(TreeNode<T> node) {
        if (node != null) {
            InOrderRecursive(node.Left);
            Console.WriteLine(node.Value);
            InOrderRecursive(node.Right);
        }
    }
}

// Uso
var arvore = new BinarySearchTree<int>();
foreach (int valor in new[] { 5, 3, 7, 2, 4, 6, 8 }) {
    arvore.Insert(valor);
}
arvore.InOrder();  // 2, 3, 4, 5, 6, 7, 8
```

---

## Algoritmos

### Busca Sequencial

```csharp
public static int BuscaSequencial(int[] arr, int alvo) {
    for (int i = 0; i < arr.Length; i++) {
        if (arr[i] == alvo) {
            return i;
        }
    }
    return -1;
}

// Uso
int indice = BuscaSequencial(new[] { 3, 1, 4, 1, 5 }, 4);  // 2
```

**Complexidade: O(n)**

---

### Busca Binária

```csharp
// Iterativa
public static int BuscaBinariaIterativa(int[] arr, int alvo) {
    int esquerda = 0, direita = arr.Length - 1;
    
    while (esquerda <= direita) {
        int meio = (esquerda + direita) / 2;
        
        if (arr[meio] == alvo) {
            return meio;
        } else if (arr[meio] < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }
    
    return -1;
}

// Recursiva
public static int BuscaBinariaRecursiva(int[] arr, int alvo, int esq = 0, int? dir = null) {
    dir = dir ?? arr.Length - 1;
    
    if (esq > dir) {
        return -1;
    }
    
    int meio = (esq + dir.Value) / 2;
    
    if (arr[meio] == alvo) {
        return meio;
    } else if (arr[meio] < alvo) {
        return BuscaBinariaRecursiva(arr, alvo, meio + 1, dir);
    } else {
        return BuscaBinariaRecursiva(arr, alvo, esq, meio - 1);
    }
}

// Uso
int[] arr = { 1, 3, 5, 7, 9, 11 };
Console.WriteLine(BuscaBinariaIterativa(arr, 7));     // 3
```

**Complexidade: O(log n)** - Requer array ORDENADO

---

### Bubble Sort

```csharp
public static void BubbleSort(int[] arr) {
    int n = arr.Length;
    
    for (int i = 0; i < n - 1; i++) {
        bool trocado = false;
        
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                trocado = true;
            }
        }
        
        if (!trocado) break;  // Array já está ordenado
    }
}

// Uso
int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
BubbleSort(arr);
Console.WriteLine(string.Join(", ", arr));
```

**Complexidade: O(n²)**

---

### Merge Sort

```csharp
public static void MergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        
        MergeSort(arr, left, mid);
        MergeSort(arr, mid + 1, right);
        Mesclar(arr, left, mid, right);
    }
}

private static void Mesclar(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int[] esquerda = new int[n1];
    int[] direita = new int[n2];
    
    System.Array.Copy(arr, left, esquerda, 0, n1);
    System.Array.Copy(arr, mid + 1, direita, 0, n2);
    
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (esquerda[i] <= direita[j]) {
            arr[k++] = esquerda[i++];
        } else {
            arr[k++] = direita[j++];
        }
    }
    
    while (i < n1) {
        arr[k++] = esquerda[i++];
    }
    
    while (j < n2) {
        arr[k++] = direita[j++];
    }
}

// Uso
int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
MergeSort(arr, 0, arr.Length - 1);
Console.WriteLine(string.Join(", ", arr));
```

**Complexidade: O(n log n)** - Estável

---

### Quick Sort

```csharp
public static void QuickSort(int[] arr, int left, int right) {
    if (left < right) {
        int pi = Particiona(arr, left, right);
        QuickSort(arr, left, pi - 1);
        QuickSort(arr, pi + 1, right);
    }
}

private static int Particiona(int[] arr, int left, int right) {
    int pivo = arr[right];
    int i = left - 1;
    
    for (int j = left; j < right; j++) {
        if (arr[j] < pivo) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    int temp2 = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp2;
    
    return i + 1;
}

// Uso
int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
QuickSort(arr, 0, arr.Length - 1);
Console.WriteLine(string.Join(", ", arr));
```

**Complexidade: O(n log n)** média

---

### DFS (Busca em Profundidade)

```csharp
using System;
using System.Collections.Generic;

public class Grafo {
    private Dictionary<string, List<string>> adjacencia;
    
    public Grafo() {
        adjacencia = new Dictionary<string, List<string>>();
    }
    
    public void AdicionarAresta(string u, string v) {
        if (!adjacencia.ContainsKey(u)) {
            adjacencia[u] = new List<string>();
        }
        adjacencia[u].Add(v);
    }
    
    // DFS recursiva
    public void DfsRecursiva(string vertice, HashSet<string> visitado) {
        visitado.Add(vertice);
        Console.Write(vertice + " ");
        
        if (adjacencia.ContainsKey(vertice)) {
            foreach (string vizinho in adjacencia[vertice]) {
                if (!visitado.Contains(vizinho)) {
                    DfsRecursiva(vizinho, visitado);
                }
            }
        }
    }
    
    // DFS iterativa (com pilha)
    public void DfsIterativa(string inicio) {
        var visitado = new HashSet<string>();
        var pilha = new Stack<string>();
        pilha.Push(inicio);
        
        while (pilha.Count > 0) {
            string vertice = pilha.Pop();
            
            if (!visitado.Contains(vertice)) {
                Console.Write(vertice + " ");
                visitado.Add(vertice);
                
                if (adjacencia.ContainsKey(vertice)) {
                    foreach (string vizinho in adjacencia[vertice]) {
                        if (!visitado.Contains(vizinho)) {
                            pilha.Push(vizinho);
                        }
                    }
                }
            }
        }
    }
}
```

**Complexidade: O(V + E)**

---

### BFS (Busca em Largura)

```csharp
public List<string> Bfs(string inicio) {
    var visitado = new HashSet<string> { inicio };
    var fila = new Queue<string>();
    var resultado = new List<string>();
    
    fila.Enqueue(inicio);
    
    while (fila.Count > 0) {
        string vertice = fila.Dequeue();
        resultado.Add(vertice);
        
        if (adjacencia.ContainsKey(vertice)) {
            foreach (string vizinho in adjacencia[vertice]) {
                if (!visitado.Contains(vizinho)) {
                    visitado.Add(vizinho);
                    fila.Enqueue(vizinho);
                }
            }
        }
    }
    
    return resultado;
}
```

**Complexidade: O(V + E)**

---

## Análise de Complexidade

```csharp
// O(1) - Constante
public static int Primeiro(int[] arr) => arr[0];

// O(log n) - Logarítmica
public static int BuscaBinaria(int[] arr, int alvo) {
    // Visto acima
}

// O(n) - Linear
public static int Soma(int[] arr) {
    int total = 0;
    foreach (int num in arr) {
        total += num;
    }
    return total;
}

// O(n log n) - Linearítmica
public static void MergeSort(int[] arr, int left, int right) {
    // Visto acima
}

// O(n²) - Quadrática
public static void BubbleSort(int[] arr) {
    // Visto acima
}

// O(2ⁿ) - Exponencial
public static long Fibonacci(int n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```

---

## Padrões C#

### LINQ (Language Integrated Query)

```csharp
var numeros = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Where (filtrar)
var pares = numeros.Where(x => x % 2 == 0);

// Select (transformar)
var dobrados = numeros.Select(x => x * 2);

// OrderBy (ordenar)
var ordenado = numeros.OrderBy(x => x).ToArray();
var descendente = numeros.OrderByDescending(x => x).ToArray();

// FirstOrDefault (primeiro ou padrão)
int primeiro = numeros.FirstOrDefault(x => x > 5);  // 6

// Any (algum?)
bool temPar = numeros.Any(x => x % 2 == 0);  // true

// All (todos?)
bool todosMaiores = numeros.All(x => x > 0);  // true

// Count
int quantidade = numeros.Count(x => x > 5);  // 5

// Combine LINQ
var resultado = numeros
    .Where(x => x > 2)
    .Select(x => x * 2)
    .OrderBy(x => x)
    .Take(5)
    .ToArray();
```

---

### Properties e Auto-Properties

```csharp
public class Pessoa {
    // Auto-property
    public string Nome { get; set; }
    public int Idade { get; set; }
    
    // Property com validação
    private int _salario;
    public int Salario {
        get { return _salario; }
        set { if (value > 0) _salario = value; }
    }
    
    // Property apenas leitura
    public bool EhMaiorDeIdade => Idade >= 18;
    
    // Init-only property (C# 9.0+)
    public string Email { get; init; }
}

// Uso
var pessoa = new Pessoa {
    Nome = "João",
    Idade = 30,
    Email = "joao@email.com"
};
```

---

### Nullable Reference Types

```csharp
#nullable enable

public class Pessoa {
    public string Nome { get; set; }     // Não nulo
    public string? Email { get; set; }   // Pode ser nulo
}

// Com null-coalescing
string email = pessoa.Email ?? "sem-email@example.com";

// Com null-conditional
int? tamanho = pessoa?.Nome?.Length;
```

---

## Boas Práticas

### ✅ Recomendado

```csharp
// Use var para tipos óbvios
var pessoa = new Pessoa();
var lista = new List<int>();

// Use properties ao invés de campos
public string Nome { get; set; }

// Use null-coalescing
string nome = input ?? "Padrão";

// Use string interpolation
string msg = $"Olá, {nome}!";

// Use async/await
async Task<int> BuscarDadosAsync() {
    return await FetchAsync();
}

// Use LINQ
var resultado = numeros.Where(x => x > 2).Select(x => x * 2).ToList();

// Use try-catch específico
try {
    operacao();
} catch (ArgumentException ex) {
    // Tratar
}
```

### ❌ Evite

```csharp
// Não use campos públicos
public string nome;  // Evitar!
public string Nome { get; set; }  // Preferir!

// Não ignore exceções
try {
    operacao();
} catch { }  // Nunca!

// Não use concatenação de strings em loop
string resultado = "";
foreach (var item in lista) {
    resultado += item;  // Ineficiente!
}
// Use StringBuilder

// Não deixe recursos abertos
File.Open("arquivo.txt");  // Evitar!

// Use using
using (var file = File.Open("arquivo.txt")) {
    // Arquivo fechado automaticamente
}
```

---

**Última atualização:** 20 de novembro de 2025
