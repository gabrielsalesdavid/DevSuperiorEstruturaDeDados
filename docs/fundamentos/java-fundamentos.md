# ☕ Fundamentos de Java

## 📚 Índice
1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Tipos de Dados](#tipos-de-dados)
4. [Variáveis](#variáveis)
5. [Operadores](#operadores)
6. [Estruturas de Controle](#estruturas-de-controle)
7. [Funções/Métodos](#funçõesmétodos)
8. [Arrays e Coleções](#arrays-e-coleções)
9. [Orientação a Objetos](#orientação-a-objetos)
10. [Tratamento de Exceções](#tratamento-de-exceções)
11. [Boas Práticas](#boas-práticas)

---

## Introdução

**Java** é uma linguagem de programação orientada a objetos, compilada, com tipagem estática e multiplataforma.

### Características Principais
- 🔹 **Compilada**: compilado para bytecode, executado pela JVM
- 🔹 **Tipagem Estática**: tipos verificados em tempo de compilação
- 🔹 **Orientada a Objetos**: tudo é objeto (exceto tipos primitivos)
- 🔹 **Multiplataforma**: WORA (Write Once, Run Anywhere)
- 🔹 **Gerenciamento Automático de Memória**: Garbage Collector
- 🔹 **Fortemente Tipada**: sem coerção automática de tipos

---

## Configuração do Ambiente

### Instalação do JDK
```bash
# Verificar versão instalada
java -version
javac -version

# Compilar arquivo
javac NomeClasse.java  # Gera NomeClasse.class

# Executar
java NomeClasse
```

### Estrutura do Projeto
```
projeto/
├── src/
│   └── com/empresa/
│       ├── Main.java
│       ├── Pessoa.java
│       └── Calculadora.java
├── bin/
│   └── (arquivos compilados .class)
└── lib/
    └── (dependências externas)
```

---

## Tipos de Dados

### Tipos Primitivos

```java
// byte - 1 byte
byte idade = 25;

// short - 2 bytes
short populacao = 10000;

// int - 4 bytes (mais usado para inteiros)
int numero = 100000;

// long - 8 bytes
long grande = 9007199254740991L;

// float - 4 bytes
float pi = 3.14159f;

// double - 8 bytes (mais usado para decimais)
double raiz = 2.71828;

// boolean - true/false
boolean ativo = true;

// char - caractere único
char letra = 'A';
```

### Tipos Referência

```java
// String
String nome = "João";
String mensagem = "Olá, " + nome + "!";

// Array
int[] numeros = {1, 2, 3, 4, 5};
String[] frutas = new String[3];

// Object (qualquer classe)
Object obj = new String("Java");
```

---

## Variáveis

### Declaração

```java
// Variável local
int x = 10;
String nome = "João";

// Atributo de classe
class MinhaClasse {
    static int contador = 0;      // Estático
    private String nome;          // Instância
}

// Constante
static final int MAX_TENTATIVAS = 3;
```

### Modificadores de Acesso

```java
public class Pessoa {
    // Acessível de qualquer lugar
    public String nome;
    
    // Acessível apenas nesta classe
    private int idade;
    
    // Acessível neste pacote e subclasses
    protected double salario;
    
    // Acessível neste pacote (padrão)
    boolean ativo;
}
```

### Convenção de Nomeação

```java
// camelCase para variáveis e métodos
String nomeCompleto = "João Silva";
void calcularIdade() { }

// PascalCase para classes e interfaces
class Pessoa { }
interface Veiculo { }

// MAIUSCULAS para constantes
static final int MAX_VALORES = 100;
static final String VERSAO_APP = "1.0";
```

---

## Operadores

### Aritméticos

```java
int a = 10, b = 3;

System.out.println(a + b);   // 13 (soma)
System.out.println(a - b);   // 7 (subtração)
System.out.println(a * b);   // 30 (multiplicação)
System.out.println(a / b);   // 3 (divisão inteira)
System.out.println(a % b);   // 1 (módulo)
System.out.println(Math.pow(a, b));  // 1000 (potência)

// Incremento/Decremento
a++;  // a = 11
b--;  // b = 2
```

### Comparação

```java
int x = 5;

System.out.println(x == 5);   // true
System.out.println(x != 5);   // false
System.out.println(x > 3);    // true
System.out.println(x < 10);   // true
System.out.println(x >= 5);   // true
System.out.println(x <= 4);   // false
```

### Lógicos

```java
boolean a = true, b = false;

System.out.println(a && b);   // false (AND)
System.out.println(a || b);   // true (OR)
System.out.println(!a);       // false (NOT)

// Operador ternário
int idade = 20;
String status = (idade >= 18) ? "Adulto" : "Menor";
```

---

## Estruturas de Controle

### if/else

```java
int nota = 75;

if (nota >= 90) {
    System.out.println("Excelente");
} else if (nota >= 70) {
    System.out.println("Bom");
} else if (nota >= 60) {
    System.out.println("Satisfatório");
} else {
    System.out.println("Insuficiente");
}
```

### switch/case

```java
int dia = 3;

switch (dia) {
    case 1:
        System.out.println("Segunda");
        break;
    case 2:
        System.out.println("Terça");
        break;
    case 3:
        System.out.println("Quarta");
        break;
    default:
        System.out.println("Dia inválido");
}
```

### for

```java
// for tradicional
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// for-each
int[] numeros = {1, 2, 3, 4, 5};
for (int num : numeros) {
    System.out.println(num);
}
```

### while/do-while

```java
// while
int contador = 0;
while (contador < 5) {
    System.out.println(contador);
    contador++;
}

// do-while (executa pelo menos uma vez)
do {
    System.out.println("Executa pelo menos uma vez");
} while (false);
```

---

## Funções/Métodos

### Declaração

```java
// Método estático (de classe)
static int somar(int a, int b) {
    return a + b;
}

// Método de instância
void exibir(String mensagem) {
    System.out.println(mensagem);
}

// Método com múltiplos retornos (via array ou objeto)
int[] buscarIntervalos(int inicio, int fim) {
    return new int[]{inicio, fim};
}

// Método com varargs
int somarVarios(int... numeros) {
    int total = 0;
    for (int num : numeros) {
        total += num;
    }
    return total;
}
```

### Sobrecarga (Overloading)

```java
// Mesmo nome, parâmetros diferentes
void imprimir(String texto) {
    System.out.println(texto);
}

void imprimir(int numero) {
    System.out.println(numero);
}

void imprimir(double valor) {
    System.out.println(valor);
}

// Uso
imprimir("Texto");    // Chama primeiro
imprimir(42);         // Chama segundo
imprimir(3.14);       // Chama terceiro
```

---

## Arrays e Coleções

### Arrays

```java
// Declaração e inicialização
int[] numeros = {1, 2, 3, 4, 5};

// Acesso
System.out.println(numeros[0]);      // 1
System.out.println(numeros.length);  // 5

// Modificação
numeros[0] = 10;

// Arrays multidimensionais
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matriz[0][1]);  // 2
```

### List

```java
import java.util.*;

// ArrayList
List<String> frutas = new ArrayList<>();
frutas.add("Maçã");
frutas.add("Banana");
frutas.add("Laranja");

System.out.println(frutas.get(0));    // "Maçã"
System.out.println(frutas.size());    // 3

frutas.remove(1);
frutas.remove("Laranja");

// LinkedList
LinkedList<Integer> numeros = new LinkedList<>();
numeros.add(10);
numeros.addFirst(5);
numeros.addLast(15);
```

### Set

```java
// HashSet (sem ordem, rápido)
Set<String> cores = new HashSet<>();
cores.add("Vermelho");
cores.add("Verde");
cores.add("Vermelho");  // Não adiciona duplicata

System.out.println(cores.size());  // 2

// TreeSet (ordenado)
TreeSet<Integer> numeros = new TreeSet<>();
numeros.add(30);
numeros.add(10);
numeros.add(20);
// Iteração em ordem: 10, 20, 30
```

### Map

```java
// HashMap
Map<String, Integer> idades = new HashMap<>();
idades.put("João", 30);
idades.put("Maria", 25);
idades.put("Pedro", 35);

System.out.println(idades.get("João"));  // 30
System.out.println(idades.containsKey("Maria"));  // true

// Iteração
for (String chave : idades.keySet()) {
    System.out.println(chave + ": " + idades.get(chave));
}
```

---

## Orientação a Objetos

### Classes

```java
public class Pessoa {
    
    // Atributos
    private String nome;
    private int idade;
    
    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Getters
    public String getNome() {
        return nome;
    }
    
    public int getIdade() {
        return idade;
    }
    
    // Setters
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public void setIdade(int idade) {
        if (idade > 0) {
            this.idade = idade;
        }
    }
    
    // Métodos
    public void apresentar() {
        System.out.println("Olá, meu nome é " + nome);
    }
    
    @Override
    public String toString() {
        return "Pessoa{" + nome + ", " + idade + "}";
    }
}
```

### Herança

```java
// Classe pai
class Animal {
    protected String nome;
    
    public Animal(String nome) {
        this.nome = nome;
    }
    
    public void fazer_som() {
        System.out.println("Som genérico");
    }
}

// Classe filha
class Cachorro extends Animal {
    
    public Cachorro(String nome) {
        super(nome);  // Chama construtor da classe pai
    }
    
    @Override
    public void fazer_som() {
        System.out.println(nome + " faz: Au au!");
    }
}

// Uso
Cachorro dog = new Cachorro("Rex");
dog.fazer_som();  // "Rex faz: Au au!"
```

### Polimorfismo

```java
Animal[] animais = {
    new Cachorro("Rex"),
    new Gato("Miau"),
    new Passaro("Piu")
};

for (Animal animal : animais) {
    animal.fazer_som();  // Chama o método da classe específica
}
```

### Interfaces

```java
interface Veiculo {
    void acelerar();
    void frear();
}

class Carro implements Veiculo {
    
    @Override
    public void acelerar() {
        System.out.println("Carro acelerando");
    }
    
    @Override
    public void frear() {
        System.out.println("Carro freando");
    }
}

// Uso
Veiculo carro = new Carro();
carro.acelerar();
carro.frear();
```

### Classes Abstratas

```java
abstract class Funcionario {
    protected String nome;
    protected double salario;
    
    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }
    
    abstract void calcularBonus();
    
    public void exibir() {
        System.out.println(nome + ": R$ " + salario);
    }
}

class Gerente extends Funcionario {
    
    public Gerente(String nome, double salario) {
        super(nome, salario);
    }
    
    @Override
    void calcularBonus() {
        System.out.println("Bônus: R$ " + (salario * 0.2));
    }
}
```

---

## Tratamento de Exceções

### try/catch

```java
try {
    int resultado = 10 / 0;  // Lançará ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Erro: divisão por zero!");
    e.printStackTrace();
} finally {
    System.out.println("Bloco executado sempre");
}
```

### Multiple catch

```java
try {
    // código que pode gerar exceção
} catch (FileNotFoundException e) {
    System.out.println("Arquivo não encontrado");
} catch (IOException e) {
    System.out.println("Erro de E/S");
} catch (Exception e) {
    System.out.println("Exceção genérica");
}
```

### throws

```java
public void lerArquivo(String caminho) throws IOException {
    // Método que pode lançar IOException
}

// Quem chamar deve tratar
try {
    lerArquivo("arquivo.txt");
} catch (IOException e) {
    e.printStackTrace();
}
```

### Lançar Exceção

```java
public void validarIdade(int idade) {
    if (idade < 0) {
        throw new IllegalArgumentException("Idade não pode ser negativa");
    }
}
```

---

## Boas Práticas

### ✅ Recomendado

```java
// Use tipos específicos
List<String> nomes = new ArrayList<>();

// Use try-with-resources
try (Scanner scanner = new Scanner(System.in)) {
    String entrada = scanner.nextLine();
}

// Encapsulação: atributos private, getters/setters
private String nome;
public String getNome() { return nome; }
public void setNome(String nome) { this.nome = nome; }

// Use @Override
@Override
public String toString() { return "..."; }

// Use constantes
static final int MAX_TENTATIVAS = 3;

// Use generics
List<Integer> numeros = new ArrayList<>();

// Use logging ao invés de System.out
Logger logger = Logger.getLogger(getClass().getName());
logger.info("Mensagem de informação");
```

### ❌ Evite

```java
// Não use tipos crus (raw types)
List nomes = new ArrayList();  // Evitar!

// Não ignore exceções
try {
    algo();
} catch (Exception e) {
    // Não fazer nada!
}

// Não deixe atributos public
public String nome;  // Evitar!

// Não use toString() sem sobrescrever
class Pessoa { }
System.out.println(new Pessoa());  // Saída ruim

// Não captura Exception genérica
catch (Exception e) { }  // Muito abrangente

// Não use tipos primitivos em coleções
List<int> numeros;  // Erro! Use List<Integer>
```

---

## Recursos Adicionais

- 📖 [Oracle Java Documentation](https://docs.oracle.com/en/java/)
- 🎓 [Java SE API](https://docs.oracle.com/javase/8/docs/api/)
- 🚀 [Java Programming MOOC](https://moocfi.github.io/courses/2013/programming-part-1/)
- 💻 [Effective Java](https://www.oreilly.com/library/view/effective-java-3rd/9780134685991/)

---

**Criado em:** 20 de novembro de 2025
