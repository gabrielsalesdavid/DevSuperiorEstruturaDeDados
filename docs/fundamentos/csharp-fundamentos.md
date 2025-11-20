# 🟦 Fundamentos de C#

## 📚 Índice
1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Tipos de Dados](#tipos-de-dados)
4. [Variáveis](#variáveis)
5. [Operadores](#operadores)
6. [Estruturas de Controle](#estruturas-de-controle)
7. [Funções/Métodos](#funçõesmétodos)
8. [Coleções](#coleções)
9. [Orientação a Objetos](#orientação-a-objetos)
10. [Tratamento de Exceções](#tratamento-de-exceções)
11. [Boas Práticas](#boas-práticas)

---

## Introdução

**C#** é uma linguagem de programação moderna, compilada, com tipagem estática e orientada a objetos. Desenvolvida pela Microsoft para a plataforma .NET.

### Características Principais
- 🔹 **Compilada para IL**: compilado para Intermediate Language, executado pela CLR (.NET Runtime)
- 🔹 **Tipagem Estática Forte**: tipos verificados em tempo de compilação
- 🔹 **Orientada a Objetos**: tudo é objeto
- 🔹 **Multiplataforma**: .NET Core roda em Windows, Linux, macOS
- 🔹 **Garbage Collection**: gerenciamento automático de memória
- 🔹 **Modern Features**: async/await, LINQ, properties, eventos

---

## Configuração do Ambiente

### Instalação do .NET SDK
```bash
# Verificar versão
dotnet --version

# Criar novo projeto
dotnet new console -n MeuProjeto

# Compilar e executar
dotnet run

# Compilar apenas
dotnet build
```

### Estrutura do Projeto
```
MeuProjeto/
├── Program.cs          # Arquivo principal
├── MeuProjeto.csproj   # Configuração do projeto
├── bin/                # Compilados
└── obj/                # Objetos temporários
```

---

## Tipos de Dados

### Tipos de Valor (Value Types)

```csharp
// Inteiros
byte idade = 25;           // 0-255
sbyte temp = -10;          // -128 a 127
short populacao = 10000;    // -32768 a 32767
int numero = 100000;        // -2^31 a 2^31-1 (mais usado)
long grande = 9007199254740991L;

// Ponto flutuante
float pi = 3.14159f;        // 32 bits
double raiz = 2.71828;      // 64 bits (mais usado)
decimal dinheiro = 99.99m;  // 128 bits (para precisão)

// Booleano
bool ativo = true;

// Caractere
char letra = 'A';

// Estrutura
struct Ponto {
    public int X;
    public int Y;
}
```

### Tipos de Referência (Reference Types)

```csharp
// String
string nome = "João";
string mensagem = $"Olá, {nome}!";  // Interpolação

// Object (classe base de tudo)
object obj = "Qualquer coisa";

// Array
int[] numeros = { 1, 2, 3, 4, 5 };

// Classe
class Pessoa {
    public string Nome { get; set; }
}
```

---

## Variáveis

### Declaração

```csharp
// Tipagem explícita
int x = 10;
string nome = "João";

// var (tipo inferido pelo compilador)
var idade = 30;           // inferido como int
var pessoa = new Pessoa(); // inferido como Pessoa

// const (constante em tempo de compilação)
const int MAX_TENTATIVAS = 3;

// readonly (apenas leitura em tempo de execução)
readonly DateTime dataInicio = DateTime.Now;
```

### Convenção de Nomeação (PascalCase)

```csharp
// PascalCase para propriedades, métodos, classes
string NomeCompleto { get; set; }
void CalcularIdade() { }
class Pessoa { }

// camelCase para variáveis locais
string nomeCompleto = "João Silva";
int idadeAtual = 25;

// MAIUSCULAS para constantes (opcional)
const int MAX_VALORES = 100;
```

---

## Operadores

### Aritméticos

```csharp
int a = 10, b = 3;

Console.WriteLine(a + b);   // 13 (soma)
Console.WriteLine(a - b);   // 7 (subtração)
Console.WriteLine(a * b);   // 30 (multiplicação)
Console.WriteLine(a / b);   // 3 (divisão inteira)
Console.WriteLine(a % b);   // 1 (módulo)
Console.WriteLine(Math.Pow(a, b));  // 1000 (potência)

// Incremento/Decremento
a++;  // a = 11
b--;  // b = 2
```

### Comparação

```csharp
int x = 5;

Console.WriteLine(x == 5);   // true
Console.WriteLine(x != 5);   // false
Console.WriteLine(x > 3);    // true
Console.WriteLine(x < 10);   // true
Console.WriteLine(x >= 5);   // true
Console.WriteLine(x <= 4);   // false
```

### Lógicos

```csharp
bool a = true, b = false;

Console.WriteLine(a && b);   // false (AND)
Console.WriteLine(a || b);   // true (OR)
Console.WriteLine(!a);       // false (NOT)

// Operador ternário
int idade = 20;
string status = idade >= 18 ? "Adulto" : "Menor";
```

---

## Estruturas de Controle

### if/else

```csharp
int nota = 75;

if (nota >= 90) {
    Console.WriteLine("Excelente");
} else if (nota >= 70) {
    Console.WriteLine("Bom");
} else if (nota >= 60) {
    Console.WriteLine("Satisfatório");
} else {
    Console.WriteLine("Insuficiente");
}
```

### switch/case

```csharp
int dia = 3;

switch (dia) {
    case 1:
        Console.WriteLine("Segunda");
        break;
    case 2:
        Console.WriteLine("Terça");
        break;
    case 3:
        Console.WriteLine("Quarta");
        break;
    default:
        Console.WriteLine("Dia inválido");
        break;
}

// Switch expression (C# 8.0+)
string resultado = dia switch {
    1 => "Segunda",
    2 => "Terça",
    3 => "Quarta",
    _ => "Dia inválido"
};
```

### for

```csharp
// for tradicional
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

// foreach
int[] numeros = { 1, 2, 3, 4, 5 };
foreach (int num in numeros) {
    Console.WriteLine(num);
}
```

### while

```csharp
// while
int contador = 0;
while (contador < 5) {
    Console.WriteLine(contador);
    contador++;
}

// do-while (executa pelo menos uma vez)
do {
    Console.WriteLine("Executa pelo menos uma vez");
} while (false);
```

---

## Funções/Métodos

### Declaração

```csharp
// Método estático
static int Somar(int a, int b) {
    return a + b;
}

// Método de instância
void Exibir(string mensagem) {
    Console.WriteLine(mensagem);
}

// Com parâmetro default
void Saudacao(string nome = "Visitante") {
    Console.WriteLine($"Bem-vindo, {nome}!");
}

// Com params (argumentos variáveis)
int SomarVarios(params int[] numeros) {
    int total = 0;
    foreach (int num in numeros) {
        total += num;
    }
    return total;
}

// Uso
Console.WriteLine(Somar(5, 3));           // 8
Saudacao();                               // "Bem-vindo, Visitante!"
Console.WriteLine(SomarVarios(1,2,3,4,5)); // 15
```

### Expression Members (C# 6.0+)

```csharp
// Método com =>
int Dobro(int x) => x * 2;

// Propriedade com =>
class Pessoa {
    public string Nome { get; set; }
    public int Idade { get; set; }
    
    public bool EhMaiorDeIdade => Idade >= 18;
    
    public string Apresentacao => $"Sou {Nome}";
}
```

---

## Coleções

### List

```csharp
using System.Collections.Generic;

// List<T>
List<string> frutas = new List<string>();
frutas.Add("Maçã");
frutas.Add("Banana");
frutas.Add("Laranja");

Console.WriteLine(frutas[0]);    // "Maçã"
Console.WriteLine(frutas.Count); // 3

frutas.Remove("Banana");
frutas.RemoveAt(0);

// Inicialização com coletor
var numeros = new List<int> { 1, 2, 3, 4, 5 };
```

### Dictionary

```csharp
// Dictionary<K, V>
Dictionary<string, int> idades = new Dictionary<string, int>();
idades.Add("João", 30);
idades.Add("Maria", 25);
idades["Pedro"] = 35;

Console.WriteLine(idades["João"]);        // 30
Console.WriteLine(idades.ContainsKey("Maria")); // true

// Iteração
foreach (var item in idades) {
    Console.WriteLine($"{item.Key}: {item.Value}");
}

// TryGetValue (mais seguro)
if (idades.TryGetValue("Ana", out int idade)) {
    Console.WriteLine(idade);
} else {
    Console.WriteLine("Não encontrado");
}
```

### HashSet

```csharp
// HashSet<T> (sem duplicatas)
HashSet<string> cores = new HashSet<string>();
cores.Add("Vermelho");
cores.Add("Verde");
cores.Add("Vermelho");  // Não adiciona

Console.WriteLine(cores.Count);  // 2

// Operações de conjunto
var a = new HashSet<int> { 1, 2, 3 };
var b = new HashSet<int> { 2, 3, 4 };

a.UnionWith(b);          // {1, 2, 3, 4}
a.IntersectWith(b);      // {2, 3}
a.ExceptWith(b);         // {1}
```

### LINQ (Language Integrated Query)

```csharp
using System.Linq;

int[] numeros = { 1, 2, 3, 4, 5 };

// Where (filtrar)
var pares = numeros.Where(n => n % 2 == 0);

// Select (transformar)
var dobrados = numeros.Select(n => n * 2);

// OrderBy (ordenar)
var ordenados = numeros.OrderByDescending(n => n);

// FirstOrDefault
int primeiro = numeros.FirstOrDefault(n => n > 3); // 4

// Any (algum?)
bool temPar = numeros.Any(n => n % 2 == 0);

// All (todos?)
bool todosMaiores = numeros.All(n => n > 0);

// Combine LINQ
var resultado = numeros
    .Where(n => n > 2)
    .Select(n => n * 2)
    .OrderBy(n => n);
```

---

## Orientação a Objetos

### Classes e Properties

```csharp
public class Pessoa {
    // Auto-properties (C# 3.0+)
    public string Nome { get; set; }
    public int Idade { get; set; }
    
    // Property com validação
    private int _idade;
    public int IdadeComValidacao {
        get { return _idade; }
        set { if (value > 0) _idade = value; }
    }
    
    // Construtor
    public Pessoa(string nome, int idade) {
        Nome = nome;
        Idade = idade;
    }
    
    // Método
    public void Apresentar() {
        Console.WriteLine($"Olá, meu nome é {Nome}");
    }
    
    // Override
    public override string ToString() {
        return $"Pessoa {{ Nome={Nome}, Idade={Idade} }}";
    }
}

// Uso
var pessoa = new Pessoa("João", 30);
pessoa.Apresentar();
Console.WriteLine(pessoa);
```

### Herança

```csharp
// Classe base
class Animal {
    public string Nome { get; set; }
    
    public Animal(string nome) {
        Nome = nome;
    }
    
    public virtual void FazerSom() {
        Console.WriteLine("Som genérico");
    }
}

// Classe derivada
class Cachorro : Animal {
    public Cachorro(string nome) : base(nome) {
    }
    
    public override void FazerSom() {
        Console.WriteLine($"{Nome} faz: Au au!");
    }
}

// Uso
Animal dog = new Cachorro("Rex");
dog.FazerSom();  // "Rex faz: Au au!"
```

### Interfaces

```csharp
interface IVeiculo {
    void Acelerar();
    void Frear();
}

class Carro : IVeiculo {
    public void Acelerar() {
        Console.WriteLine("Carro acelerando");
    }
    
    public void Frear() {
        Console.WriteLine("Carro freando");
    }
}

// Uso
IVeiculo carro = new Carro();
carro.Acelerar();
```

### Classes Abstratas

```csharp
abstract class Funcionario {
    public string Nome { get; set; }
    public double Salario { get; set; }
    
    public Funcionario(string nome, double salario) {
        Nome = nome;
        Salario = salario;
    }
    
    public abstract void CalcularBonus();
    
    public void Exibir() {
        Console.WriteLine($"{Nome}: R$ {Salario}");
    }
}

class Gerente : Funcionario {
    public Gerente(string nome, double salario) 
        : base(nome, salario) {
    }
    
    public override void CalcularBonus() {
        Console.WriteLine($"Bônus: R$ {Salario * 0.2}");
    }
}
```

---

## Tratamento de Exceções

### try/catch/finally

```csharp
try {
    int resultado = 10 / 0;  // Lançará DivideByZeroException
} catch (DivideByZeroException ex) {
    Console.WriteLine("Erro: divisão por zero!");
} catch (Exception ex) {
    Console.WriteLine($"Erro genérico: {ex.Message}");
} finally {
    Console.WriteLine("Bloco executado sempre");
}
```

### Lançar Exceção

```csharp
public void ValidarIdade(int idade) {
    if (idade < 0) {
        throw new ArgumentException("Idade não pode ser negativa");
    }
}

// Relançar exceção
try {
    algo();
} catch (Exception ex) {
    Console.WriteLine("Erro ocorreu");
    throw;  // Relança a mesma exceção
}
```

---

## Boas Práticas

### ✅ Recomendado

```csharp
// Use var para tipos óbvios
var pessoa = new Pessoa("João", 30);
var lista = new List<int>();

// Use properties ao invés de campos
public string Nome { get; set; }

// Use null-coalescing operator
string nome = input ?? "Padrão";

// Use string interpolation
string msg = $"Olá, {nome}!";

// Use async/await
async Task<int> BuscarDadosAsync() {
    return await FetchAsync();
}

// Use LINQ para transformações
var pares = numeros.Where(n => n % 2 == 0);
```

### ❌ Evite

```csharp
// Não use campos públicos
public string nome;  // Evitar!
public string Nome { get; set; }  // Preferir

// Não ignore exceções
try {
    algo();
} catch (Exception) {
    // Não fazer nada!
}

// Não use concatenação de strings em loop
string resultado = "";
foreach (var item in lista) {
    resultado += item;  // Ineficiente!
}
// Use StringBuilder ao invés

// Não deixe recursos abertos
File.Open("arquivo.txt");  // Evitar!

// Use using ao invés
using (var file = File.Open("arquivo.txt")) {
    // Código
}  // Arquivo fechado automaticamente
```

---

## Recursos Adicionais

- 📖 [Microsoft C# Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- 🎓 [C# Player's Guide](https://csharpplayersguide.com/)
- 🚀 [.NET Documentation](https://docs.microsoft.com/en-us/dotnet/)
- 💻 [Microsoft Learn - C#](https://learn.microsoft.com/en-us/dotnet/csharp/)

---

**Criado em:** 20 de novembro de 2025
