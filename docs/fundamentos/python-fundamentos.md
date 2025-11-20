# 🐍 Fundamentos de Python

## 📚 Índice
1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Tipos de Dados](#tipos-de-dados)
4. [Variáveis](#variáveis)
5. [Operadores](#operadores)
6. [Estruturas de Controle](#estruturas-de-controle)
7. [Funções](#funções)
8. [Coleções](#coleções)
9. [Orientação a Objetos](#orientação-a-objetos)
10. [Tratamento de Exceções](#tratamento-de-exceções)
11. [Boas Práticas](#boas-práticas)

---

## Introdução

**Python** é uma linguagem de programação de alto nível, interpretada e com tipagem dinâmica. É conhecida pela sua sintaxe simples e legibilidade.

### Características Principais
- 🔹 **Simples e Legível**: sintaxe intuitiva, próxima à linguagem natural
- 🔹 **Interpretada**: executa diretamente, sem compilação
- 🔹 **Dinâmica**: tipos verificados em runtime
- 🔹 **Multiparadigma**: suporta OOP, funcional, procedural
- 🔹 **Versátil**: web, data science, IA, automação, etc.

---

## Configuração do Ambiente

### Instalação
```bash
# Verificar versão
python --version
python3 --version

# Executar script
python arquivo.py
python3 arquivo.py

# Modo interativo
python
```

### Virtual Environment (recomendado)
```bash
# Criar virtual environment
python -m venv venv

# Ativar (Linux/Mac)
source venv/bin/activate

# Ativar (Windows)
venv\Scripts\activate

# Instalar pacotes
pip install nome_pacote

# Ver pacotes instalados
pip list
```

---

## Tipos de Dados

### Tipos Primitivos

```python
# String - texto
nome = "João"
msg = f"Olá, {nome}!"  # f-string (formatação)
msg2 = "Olá, {}!".format(nome)  # .format()

# Int - inteiros
idade = 25
numero = -10
hex_num = 0xFF

# Float - números decimais
pi = 3.14159
temperatura = -5.5

# Bool - booleano
ativo = True
inativo = False

# None - valor nulo
valor = None
```

### Tipos Coleção

```python
# List - lista mutável, ordenada
numeros = [1, 2, 3, 4, 5]
misto = [1, "texto", 3.14, True]

# Tuple - tupla imutável, ordenada
coordenadas = (10, 20)
rgb = (255, 0, 0)

# Set - conjunto, sem duplicatas
cores = {"vermelho", "verde", "azul"}

# Dict - dicionário, chave-valor
pessoa = {
    "nome": "João",
    "idade": 30,
    "email": "joao@example.com"
}
```

---

## Variáveis

### Declaração e Tipagem

```python
# Tipagem dinâmica
x = 10          # int
x = "texto"     # agora é string
x = 3.14        # agora é float

# Tipagem com type hints (Python 3.5+)
nome: str = "João"
idade: int = 30
altura: float = 1.75
ativo: bool = True

# Múltipla atribuição
a, b, c = 1, 2, 3
x, y = y, x  # swap

# Desempacotamento
dados = [10, 20, 30]
x, y, z = dados
```

### Convenção de Nomeação

```python
# snake_case (recomendado para Python)
nome_completo = "João Silva"
idade_maxima = 100

# MAIUSCULAS para constantes
MAX_TENTATIVAS = 3
TAXA_CONVERSAO = 0.85

# PascalCase apenas para classes
class Pessoa:
    pass
```

---

## Operadores

### Aritméticos

```python
a, b = 10, 3

print(a + b)    # 13 (soma)
print(a - b)    # 7 (subtração)
print(a * b)    # 30 (multiplicação)
print(a / b)    # 3.333... (divisão float)
print(a // b)   # 3 (divisão inteira)
print(a % b)    # 1 (resto/módulo)
print(a ** b)   # 1000 (potência)
```

### Comparação

```python
x = 5

print(x == 5)       # True (igualdade)
print(x != 5)       # False (diferença)
print(x > 3)        # True
print(x < 10)       # True
print(x >= 5)       # True
print(x <= 4)       # False

# Operadores 'in' e 'is'
print(3 in [1, 2, 3])  # True
print(x is None)       # False
```

### Lógicos

```python
a, b = True, False

print(a and b)      # False (AND)
print(a or b)       # True (OR)
print(not a)        # False (NOT)

# Operador ternário
idade = 20
status = "Adulto" if idade >= 18 else "Menor"
```

---

## Estruturas de Controle

### if/elif/else

```python
nota = 75

if nota >= 90:
    print("Excelente")
elif nota >= 70:
    print("Bom")
elif nota >= 60:
    print("Satisfatório")
else:
    print("Insuficiente")
```

### for

```python
# for clássico
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# for com lista
frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(fruta)

# for com índice
for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

# for com range personalizado
for i in range(1, 10, 2):  # início, fim, passo
    print(i)  # 1, 3, 5, 7, 9
```

### while

```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# break e continue
while True:
    entrada = input("Digite 'sair' para sair: ")
    if entrada == "sair":
        break
    if entrada.startswith("#"):
        continue
    print(f"Você digitou: {entrada}")
```

---

## Funções

### Declaração Básica

```python
# Função simples
def saudacao(nome):
    return f"Olá, {nome}!"

print(saudacao("João"))  # "Olá, João!"

# Parâmetro padrão
def cumprimento(nome="Visitante"):
    return f"Bem-vindo, {nome}!"

print(cumprimento())         # "Bem-vindo, Visitante!"
print(cumprimento("Maria"))  # "Bem-vindo, Maria!"
```

### Parâmetros

```python
# Múltiplos retornos
def dividir(a, b):
    if b == 0:
        return None, "Erro: divisão por zero"
    return a / b, None

resultado, erro = dividir(10, 2)

# *args (argumentos variáveis)
def somar(*numeros):
    total = 0
    for num in numeros:
        total += num
    return total

print(somar(1, 2, 3, 4, 5))  # 15

# **kwargs (argumentos nomeados variáveis)
def criar_pessoa(**dados):
    return dados

pessoa = criar_pessoa(nome="João", idade=30, email="joao@example.com")
```

### Type Hints

```python
def somar(a: int, b: int) -> int:
    return a + b

def processar(dados: list) -> dict:
    return {"processado": len(dados)}

# Com tipos opcionais
from typing import Optional

def buscar_usuario(id: int) -> Optional[dict]:
    if id == 1:
        return {"id": 1, "nome": "João"}
    return None
```

---

## Coleções

### List (Lista)

```python
numeros = [1, 2, 3, 4, 5]

# Acesso
print(numeros[0])      # 1
print(numeros[-1])     # 5 (último)

# Slicing
print(numeros[1:4])    # [2, 3, 4]
print(numeros[:3])     # [1, 2, 3]
print(numeros[2:])     # [3, 4, 5]

# Modificação
numeros.append(6)      # Adiciona ao final
numeros.insert(0, 0)   # Insere na posição
numeros.remove(3)      # Remove elemento
numeros.pop()          # Remove último

# Métodos úteis
print(len(numeros))    # Tamanho
print(3 in numeros)    # Verifica existência
print(numeros.count(2))  # Conta ocorrências
```

### Tuple (Tupla)

```python
coordenada = (10, 20)
rgb = (255, 0, 0)

# Acesso (como lista)
print(coordenada[0])   # 10

# Imutável
# coordenada[0] = 5  # TypeError!

# Unpacking
x, y = coordenada
```

### Set (Conjunto)

```python
cores = {"vermelho", "verde", "azul"}

# Adicionar
cores.add("amarelo")

# Remover
cores.remove("verde")

# Operações de conjunto
a = {1, 2, 3}
b = {2, 3, 4}

print(a | b)     # União: {1, 2, 3, 4}
print(a & b)     # Interseção: {2, 3}
print(a - b)     # Diferença: {1}
```

### Dict (Dicionário)

```python
pessoa = {
    "nome": "João",
    "idade": 30,
    "email": "joao@example.com"
}

# Acesso
print(pessoa["nome"])            # "João"
print(pessoa.get("telefone"))    # None (não lança erro)

# Modificação
pessoa["telefone"] = "123456789"
pessoa.update({"cidade": "São Paulo"})

# Métodos úteis
print(pessoa.keys())      # dict_keys(['nome', 'idade', ...])
print(pessoa.values())    # dict_values(['João', 30, ...])
print(pessoa.items())     # dict_items([('nome', 'João'), ...])

# Iteração
for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")
```

### List Comprehension

```python
# Criar lista transformada
quadrados = [x**2 for x in range(5)]
print(quadrados)  # [0, 1, 4, 9, 16]

# Com condição
pares = [x for x in range(10) if x % 2 == 0]
print(pares)  # [0, 2, 4, 6, 8]

# Dicionário
quadrados_dict = {x: x**2 for x in range(5)}
print(quadrados_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

---

## Orientação a Objetos

### Classes Básicas

```python
class Pessoa:
    def __init__(self, nome: str, idade: int):
        self.nome = nome
        self.idade = idade
    
    def apresentar(self) -> str:
        return f"Olá, meu nome é {self.nome}"
    
    def fazer_aniversario(self):
        self.idade += 1

# Usando
pessoa = Pessoa("João", 30)
print(pessoa.apresentar())      # "Olá, meu nome é João"
print(pessoa.idade)             # 30
pessoa.fazer_aniversario()
print(pessoa.idade)             # 31
```

### Herança

```python
class Animal:
    def __init__(self, nome: str):
        self.nome = nome
    
    def fazer_som(self) -> str:
        return "Som genérico"

class Cachorro(Animal):
    def fazer_som(self) -> str:
        return f"{self.nome} faz: Au au!"

# Usando
dog = Cachorro("Rex")
print(dog.fazer_som())  # "Rex faz: Au au!"
```

### Atributos e Métodos Estáticos

```python
class Contador:
    contador_total = 0  # Atributo de classe
    
    def __init__(self):
        Contador.contador_total += 1
    
    @staticmethod
    def resetar():
        Contador.contador_total = 0
    
    @classmethod
    def obter_total(cls):
        return cls.contador_total

c1 = Contador()
c2 = Contador()
print(Contador.obter_total())  # 2
Contador.resetar()
print(Contador.obter_total())  # 0
```

---

## Tratamento de Exceções

### try/except

```python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Erro: divisão por zero!")
except Exception as e:
    print(f"Erro inesperado: {e}")
else:
    print("Operação bem-sucedida!")
finally:
    print("Limpando recursos...")
```

### Levantando Exceções

```python
def dividir(a: int, b: int) -> float:
    if b == 0:
        raise ValueError("Divisor não pode ser zero")
    if not isinstance(a, (int, float)):
        raise TypeError(f"Esperado número, recebido {type(a)}")
    return a / b

try:
    resultado = dividir(10, 0)
except ValueError as e:
    print(f"Erro de valor: {e}")
except TypeError as e:
    print(f"Erro de tipo: {e}")
```

---

## Boas Práticas

### ✅ Recomendado

```python
# Use nomes descritivos
nome_usuario = "João"
idade_maxima = 100

# Use docstrings
def calcular_media(notas: list) -> float:
    """
    Calcula a média de notas.
    
    Args:
        notas: Lista de números
        
    Returns:
        Média das notas
    """
    return sum(notas) / len(notas)

# Use type hints
def processar(dados: list) -> dict:
    return {"processado": len(dados)}

# Use f-strings
saudacao = f"Olá, {nome}!"

# Use context managers
with open("arquivo.txt") as f:
    conteudo = f.read()
```

### ❌ Evite

```python
# Não use nomes genéricos
x = 10
dados = "João"

# Não use variáveis globais
global contador  # Evitar!

# Não capture exceções genéricas
try:
    algo()
except:  # Muito genérico!
    pass

# Não ignore exceções silenciosamente
except Exception:
    pass

# Não use imports wildcard
from modulo import *  # Evitar!

# Prefira usar elif ao invés de múltiplos if independentes
if condicao1:
    pass
elif condicao2:  # Melhor que múltiplos if
    pass
```

### PEP 8 - Estilo de Código

```python
# Indentação: 4 espaços
if condicao:
    print("Indentado com 4 espaços")

# Linhas máximo 79 caracteres
variavel_com_nome_muito_longo = (
    "Quebra de linha para manter"
    "79 caracteres por linha"
)

# Espaços ao redor de operadores
x = 5 + 3  # Bom
x=5+3      # Evitar

# Sem espaço antes de vírgula
lista = [1, 2, 3]  # Bom
lista = [1 , 2 , 3]  # Evitar
```

---

## Recursos Adicionais

- 📖 [Python.org Documentation](https://docs.python.org/3/)
- 🎓 [Real Python](https://realpython.com/)
- 🐍 [Python Enhancement Proposals (PEPs)](https://www.python.org/dev/peps/)
- 💻 [PEP 8 - Style Guide](https://www.python.org/dev/peps/pep-0008/)

---

**Criado em:** 20 de novembro de 2025
