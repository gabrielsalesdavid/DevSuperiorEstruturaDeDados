# ☕ Conceitos de Estrutura de Dados e Algoritmos em Java

## 📚 Índice
1. [Estruturas de Dados](#estruturas-de-dados)
2. [Algoritmos](#algoritmos)
3. [Análise de Complexidade](#análise-de-complexidade)
4. [Padrões Java](#padrões-java)
5. [Boas Práticas](#boas-práticas)

---

## Estruturas de Dados

### Array

**Implementação:**
```java
// Criação
int[] numeros = {1, 2, 3, 4, 5};
int[] arr = new int[5];
Integer[] boxed = new Integer[5];

// Acesso e modificação
numeros[0] = 10;
int primeiro = numeros[0];  // O(1)
int tamanho = numeros.length;

// Iteração
for (int i = 0; i < numeros.length; i++) {
    System.out.println(numeros[i]);
}

for (int num : numeros) {
    System.out.println(num);
}

// Busca (O(n))
int indice = -1;
for (int i = 0; i < numeros.length; i++) {
    if (numeros[i] == 3) {
        indice = i;
        break;
    }
}
```

**Quando usar:**
- ✅ Coleção com tamanho fixo
- ✅ Acesso rápido por índice
- ❌ Inserção/remoção (use ArrayList)

---

### ArrayList

**Implementação:**
```java
import java.util.ArrayList;

ArrayList<Integer> lista = new ArrayList<>();

// Operações
lista.add(1);              // Adiciona: O(1) amortizado
lista.add(0, 0);           // Insere em índice: O(n)
lista.remove(0);           // Remove: O(n)
lista.get(0);              // Acessa: O(1)
lista.set(0, 10);          // Modifica: O(1)
lista.contains(5);         // Busca: O(n)
lista.indexOf(5);          // Busca: O(n)
lista.size();              // Tamanho: O(1)

// Iteração
for (Integer num : lista) {
    System.out.println(num);
}

for (int i = 0; i < lista.size(); i++) {
    System.out.println(lista.get(i));
}

// Stream API
lista.stream()
    .filter(x -> x > 2)
    .map(x -> x * 2)
    .forEach(System.out::println);
```

---

### LinkedList (Lista Ligada)

```java
import java.util.LinkedList;

class Node<T> {
    T valor;
    Node<T> proximo;
    
    public Node(T valor) {
        this.valor = valor;
    }
}

public class ListaLigada<T> {
    private Node<T> cabeca;
    private int tamanho;
    
    public void adicionar(T valor) {  // O(n)
        Node<T> novoNode = new Node<>(valor);
        if (cabeca == null) {
            cabeca = novoNode;
        } else {
            Node<T> atual = cabeca;
            while (atual.proximo != null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNode;
        }
        tamanho++;
    }
    
    public void adicionarNoInicio(T valor) {  // O(1)
        Node<T> novoNode = new Node<>(valor);
        novoNode.proximo = cabeca;
        cabeca = novoNode;
        tamanho++;
    }
    
    public void remover(int indice) {  // O(n)
        if (indice == 0) {
            cabeca = cabeca.proximo;
        } else {
            Node<T> atual = cabeca;
            Node<T> anterior = null;
            for (int i = 0; i < indice; i++) {
                anterior = atual;
                atual = atual.proximo;
            }
            if (atual != null) {
                anterior.proximo = atual.proximo;
            }
        }
        tamanho--;
    }
    
    public T obter(int indice) {  // O(n)
        Node<T> atual = cabeca;
        for (int i = 0; i < indice && atual != null; i++) {
            atual = atual.proximo;
        }
        return atual != null ? atual.valor : null;
    }
}

// Nativa do Java
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.addFirst(0);    // O(1)
linkedList.addLast(2);     // O(1)
linkedList.removeFirst();  // O(1)
linkedList.removeLast();   // O(1)
```

---

### Stack (Pilha)

```java
import java.util.Stack;

// Stack nativo
Stack<Integer> pilha = new Stack<>();

pilha.push(1);      // Adiciona: O(1)
pilha.pop();        // Remove: O(1)
pilha.peek();       // Vê topo: O(1)
pilha.isEmpty();    // Vazio?: O(1)
pilha.search(1);    // Busca: O(n)

// Exemplo: validar parênteses
public static boolean validarParenteses(String s) {
    Stack<Character> pilha = new Stack<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            pilha.push(c);
        } else if (c == ')' || c == ']' || c == '}') {
            if (pilha.isEmpty()) {
                return false;
            }
            
            char topo = pilha.pop();
            if ((c == ')' && topo != '(') ||
                (c == ']' && topo != '[') ||
                (c == '}' && topo != '{')) {
                return false;
            }
        }
    }
    
    return pilha.isEmpty();
}
```

---

### Queue (Fila)

```java
import java.util.Queue;
import java.util.LinkedList;

// Queue nativa
Queue<Integer> fila = new LinkedList<>();

fila.add(1);        // Enqueue: O(1)
fila.remove();      // Dequeue: O(1)
fila.poll();        // Dequeue seguro: O(1)
fila.peek();        // Primeiro: O(1)
fila.isEmpty();     // Vazio?: O(1)

// Exemplo: simular fila de atendimento
public static void simulaFila() {
    Queue<String> fila = new LinkedList<>();
    
    fila.add("Cliente 1");
    fila.add("Cliente 2");
    fila.add("Cliente 3");
    
    while (!fila.isEmpty()) {
        System.out.println("Atendendo: " + fila.poll());
    }
}
```

---

### Set (Conjunto)

```java
import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;

// HashSet (desordenado, O(1) operações)
Set<Integer> conjunto = new HashSet<>();
conjunto.add(1);
conjunto.add(2);
conjunto.contains(1);  // O(1)
conjunto.remove(1);

// TreeSet (ordenado, O(log n) operações)
Set<Integer> ordenado = new TreeSet<>();
ordenado.add(3);
ordenado.add(1);
ordenado.add(2);
// [1, 2, 3]

// Operações de conjunto
Set<Integer> a = new HashSet<>(Arrays.asList(1, 2, 3));
Set<Integer> b = new HashSet<>(Arrays.asList(2, 3, 4));

// União
a.addAll(b);  // a = {1, 2, 3, 4}

// Interseção
a.retainAll(b);  // a = {2, 3}

// Diferença
a.removeAll(b);  // a = {1}
```

---

### Map (Dicionário)

```java
import java.util.Map;
import java.util.HashMap;
import java.util.TreeMap;

// HashMap (desordenado, O(1) operações)
Map<String, Integer> mapa = new HashMap<>();
mapa.put("João", 30);
mapa.put("Maria", 25);

mapa.get("João");           // 30, O(1)
mapa.containsKey("João");   // true
mapa.remove("João");
mapa.size();                // 1

// Iteração
for (Map.Entry<String, Integer> entry : mapa.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// TreeMap (ordenado, O(log n) operações)
Map<String, Integer> ordenado = new TreeMap<>();

// Exemplo: contagem de palavras
public static Map<String, Integer> contarPalavras(String texto) {
    Map<String, Integer> mapa = new HashMap<>();
    
    for (String palavra : texto.split(" ")) {
        mapa.put(palavra, mapa.getOrDefault(palavra, 0) + 1);
    }
    
    return mapa;
}
```

---

### Tree (Árvore Binária de Busca)

```java
public class TreeNode<T extends Comparable<T>> {
    T valor;
    TreeNode<T> esquerda;
    TreeNode<T> direita;
    
    public TreeNode(T valor) {
        this.valor = valor;
    }
}

public class BinarySearchTree<T extends Comparable<T>> {
    private TreeNode<T> raiz;
    
    // Inserir: O(log n) média, O(n) pior caso
    public void inserir(T valor) {
        if (raiz == null) {
            raiz = new TreeNode<>(valor);
        } else {
            inserirRecursivo(raiz, valor);
        }
    }
    
    private void inserirRecursivo(TreeNode<T> no, T valor) {
        if (valor.compareTo(no.valor) < 0) {
            if (no.esquerda == null) {
                no.esquerda = new TreeNode<>(valor);
            } else {
                inserirRecursivo(no.esquerda, valor);
            }
        } else {
            if (no.direita == null) {
                no.direita = new TreeNode<>(valor);
            } else {
                inserirRecursivo(no.direita, valor);
            }
        }
    }
    
    // Buscar: O(log n) média, O(n) pior caso
    public boolean buscar(T valor) {
        return buscarRecursivo(raiz, valor);
    }
    
    private boolean buscarRecursivo(TreeNode<T> no, T valor) {
        if (no == null) {
            return false;
        }
        
        int comp = valor.compareTo(no.valor);
        if (comp == 0) {
            return true;
        } else if (comp < 0) {
            return buscarRecursivo(no.esquerda, valor);
        } else {
            return buscarRecursivo(no.direita, valor);
        }
    }
    
    // In-order (esquerda, raiz, direita) - ordem crescente
    public void inOrder() {
        inOrderRecursivo(raiz);
    }
    
    private void inOrderRecursivo(TreeNode<T> no) {
        if (no != null) {
            inOrderRecursivo(no.esquerda);
            System.out.println(no.valor);
            inOrderRecursivo(no.direita);
        }
    }
}
```

---

## Algoritmos

### Busca Sequencial

```java
public static int buscaSequencial(int[] arr, int alvo) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == alvo) {
            return i;
        }
    }
    return -1;
}

// Uso
int indice = buscaSequencial(new int[]{3, 1, 4, 1, 5}, 4);  // 2
```

**Complexidade: O(n)**

---

### Busca Binária

```java
// Iterativa
public static int buscaBinariaIterativa(int[] arr, int alvo) {
    int esquerda = 0, direita = arr.length - 1;
    
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
public static int buscaBinariaRecursiva(int[] arr, int alvo, int esq, int dir) {
    if (esq > dir) {
        return -1;
    }
    
    int meio = (esq + dir) / 2;
    
    if (arr[meio] == alvo) {
        return meio;
    } else if (arr[meio] < alvo) {
        return buscaBinariaRecursiva(arr, alvo, meio + 1, dir);
    } else {
        return buscaBinariaRecursiva(arr, alvo, esq, meio - 1);
    }
}

// Uso
int[] arr = {1, 3, 5, 7, 9, 11};
System.out.println(buscaBinariaIterativa(arr, 7));  // 3
```

**Complexidade: O(log n)** - Requer array ORDENADO

---

### Bubble Sort

```java
public static void bubbleSort(int[] arr) {
    int n = arr.length;
    
    for (int i = 0; i < n - 1; i++) {
        boolean trocado = false;
        
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
int[] arr = {64, 34, 25, 12, 22, 11, 90};
bubbleSort(arr);
System.out.println(Arrays.toString(arr));
```

**Complexidade: O(n²)**

---

### Merge Sort

```java
public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        mesclar(arr, left, mid, right);
    }
}

private static void mesclar(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int[] esquerda = new int[n1];
    int[] direita = new int[n2];
    
    System.arraycopy(arr, left, esquerda, 0, n1);
    System.arraycopy(arr, mid + 1, direita, 0, n2);
    
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
int[] arr = {64, 34, 25, 12, 22, 11, 90};
mergeSort(arr, 0, arr.length - 1);
System.out.println(Arrays.toString(arr));
```

**Complexidade: O(n log n)** - Estável

---

### Quick Sort

```java
public static void quickSort(int[] arr, int left, int right) {
    if (left < right) {
        int pi = particiona(arr, left, right);
        quickSort(arr, left, pi - 1);
        quickSort(arr, pi + 1, right);
    }
}

private static int particiona(int[] arr, int left, int right) {
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
    
    int temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    
    return i + 1;
}

// Uso
int[] arr = {64, 34, 25, 12, 22, 11, 90};
quickSort(arr, 0, arr.length - 1);
System.out.println(Arrays.toString(arr));
```

**Complexidade: O(n log n)** média

---

### DFS (Busca em Profundidade)

```java
import java.util.*;

public class Grafo {
    private Map<String, List<String>> adjacencia;
    
    public Grafo() {
        adjacencia = new HashMap<>();
    }
    
    public void adicionarAresta(String u, String v) {
        adjacencia.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
    }
    
    // DFS recursiva
    public void dfsRecursiva(String vertice, Set<String> visitado) {
        visitado.add(vertice);
        System.out.print(vertice + " ");
        
        for (String vizinho : adjacencia.getOrDefault(vertice, new ArrayList<>())) {
            if (!visitado.contains(vizinho)) {
                dfsRecursiva(vizinho, visitado);
            }
        }
    }
    
    // DFS iterativa (com pilha)
    public void dfsIterativa(String inicio) {
        Set<String> visitado = new HashSet<>();
        Stack<String> pilha = new Stack<>();
        pilha.push(inicio);
        
        while (!pilha.isEmpty()) {
            String vertice = pilha.pop();
            
            if (!visitado.contains(vertice)) {
                System.out.print(vertice + " ");
                visitado.add(vertice);
                
                for (String vizinho : adjacencia.getOrDefault(vertice, new ArrayList<>())) {
                    if (!visitado.contains(vizinho)) {
                        pilha.push(vizinho);
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

```java
public class Grafo {
    // ... código anterior ...
    
    public List<String> bfs(String inicio) {
        Set<String> visitado = new HashSet<>();
        Queue<String> fila = new LinkedList<>();
        List<String> resultado = new ArrayList<>();
        
        visitado.add(inicio);
        fila.add(inicio);
        
        while (!fila.isEmpty()) {
            String vertice = fila.poll();
            resultado.add(vertice);
            
            for (String vizinho : adjacencia.getOrDefault(vertice, new ArrayList<>())) {
                if (!visitado.contains(vizinho)) {
                    visitado.add(vizinho);
                    fila.add(vizinho);
                }
            }
        }
        
        return resultado;
    }
}
```

**Complexidade: O(V + E)**

---

## Análise de Complexidade

```java
// O(1) - Constante
public static int primeiro(int[] arr) {
    return arr[0];
}

// O(log n) - Logarítmica
public static int buscaBinaria(int[] arr, int alvo) {
    // Visto acima
}

// O(n) - Linear
public static int soma(int[] arr) {
    int total = 0;
    for (int num : arr) {
        total += num;
    }
    return total;
}

// O(n log n) - Linearítmica
public static void mergeSort(int[] arr, int left, int right) {
    // Visto acima
}

// O(n²) - Quadrática
public static void bubbleSort(int[] arr) {
    // Visto acima
}

// O(2ⁿ) - Exponencial
public static long fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## Padrões Java

### Genéricos

```java
public class Caixa<T> {
    private T valor;
    
    public void guardar(T item) {
        this.valor = item;
    }
    
    public T retirar() {
        return valor;
    }
}

// Uso
Caixa<String> caixa = new Caixa<>();
caixa.guardar("JavaScript");
String linguagem = caixa.retirar();
```

---

### Comparable e Comparator

```java
// Comparable (ordem natural)
public class Pessoa implements Comparable<Pessoa> {
    private String nome;
    private int idade;
    
    @Override
    public int compareTo(Pessoa outra) {
        return Integer.compare(this.idade, outra.idade);
    }
}

// Comparator (ordem customizada)
Collections.sort(pessoas, new Comparator<Pessoa>() {
    @Override
    public int compare(Pessoa p1, Pessoa p2) {
        return p1.getNome().compareTo(p2.getNome());
    }
});

// Com lambda
Collections.sort(pessoas, (p1, p2) -> p1.getNome().compareTo(p2.getNome()));
```

---

### Stream API

```java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);

// Filter
numeros.stream()
    .filter(x -> x > 2)
    .forEach(System.out::println);

// Map
numeros.stream()
    .map(x -> x * 2)
    .forEach(System.out::println);

// Reduce
int soma = numeros.stream()
    .reduce(0, Integer::sum);

// Collect
List<Integer> pares = numeros.stream()
    .filter(x -> x % 2 == 0)
    .collect(Collectors.toList());
```

---

## Boas Práticas

### ✅ Recomendado

```java
// Use tipos genéricos
List<Integer> lista = new ArrayList<>();

// Prefira interfaces
List<String> nomes = new ArrayList<>();

// Use try-with-resources
try (Scanner scanner = new Scanner(new File("arquivo.txt"))) {
    // Arquivo fechado automaticamente
}

// Use métodos utilitários do Collections
Collections.sort(lista);
Collections.binarySearch(lista, valor);

// Prefira composition over inheritance
class Pessoa {
    private Endereco endereco;
}

// Use imutabilidade quando possível
String texto = "imutável";
```

### ❌ Evite

```java
// Não use tipos raw
List lista = new ArrayList();  // Evitar!
List<String> lista = new ArrayList<>();  // Preferir!

// Não ignore exceções
try {
    operacao();
} catch (Exception e) {
    // Não faça nada!
}

// Use exceção apropriada
try {
    operacao();
} catch (IOException e) {
    // Tratar especificamente
}

// Não use null frequentemente
if (objeto != null) {  // Evitar múltiplas verificações
    // código
}

// Use Optional
Optional<String> valor = Optional.ofNullable(texto);
```

---

**Última atualização:** 20 de novembro de 2025
