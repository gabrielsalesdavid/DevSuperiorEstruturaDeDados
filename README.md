# 📚 DevSuperior - Estrutura de Dados e Algoritmos em JavaScript

![GitHub repo size](https://img.shields.io/github/repo-size/gabrielsalesdavid/DevSuperiorEstruturaDeDados?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/gabrielsalesdavid/DevSuperiorEstruturaDeDados?style=flat-square)
![GitHub license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green?style=flat-square)

Uma coleção completa de **exercícios educacionais** sobre estruturas de dados e algoritmos em **JavaScript puro**, sem dependências externas. Ideal para estudantes, iniciantes em programação e profissionais que desejam consolidar conhecimentos.

## 📖 Visão Geral

Este repositório é um projeto de **aprendizagem ativa** focado em:

- ✅ **Estruturas de Dados**: Listas, Pilhas, Filas, Árvores, Grafos
- ✅ **Algoritmos**: Busca, Ordenação, Recursividade, Dinâmica
- ✅ **Análise de Complexidade**: Notação Big O, cálculo de eficiência
- ✅ **Padrões de Código**: JavaScript moderno e boas práticas
- ✅ **Testes**: Console.log para verificação rápida, testes no navegador

**Propósito**: Material didático do curso **DevSuperior - Fundação de Programação** (Estrutura de Dados e Algoritmos).

## 📁 Estrutura do Repositório

```
.
├── Exercicio/                          # Pasta principal com exercícios
│   ├── Arrays/                         # Operações com arrays
│   │   ├── contains-duplicate.js
│   │   ├── dot-product-two-arrays.js
│   │   ├── duplicar-zeros.js
│   │   └── ... (mais 5 arquivos)
│   │
│   ├── Arvores/                        # Estruturas de árvore
│   │   └── (exercícios em desenvolvimento)
│   │
│   ├── Busca e Ordenação/              # Algoritmos de busca e sort
│   │   ├── bubble-sort.js
│   │   ├── busca-binaria.js
│   │   ├── busca-sequencial.js
│   │   ├── insertion-sort.js
│   │   ├── merge-sort.js
│   │   ├── quick-sort.js
│   │   ├── selection-sort.js
│   │   └── bubble-sort-e-complexidade.js
│   │
│   ├── Listas/                         # Listas ligadas e operações
│   │   ├── estrutura-node.js
│   │   ├── doubly-linked-list.js
│   │   ├── adiciona-elemento-no-inicio.js
│   │   ├── adicionar-elemento-ao-final-da-lista.js
│   │   ├── imprimir-elementos-da-lista.js
│   │   └── ... (mais operações)
│   │
│   ├── Pilhas e Filas/                 # Pilhas (Stack) e Filas (Queue)
│   │   ├── pilha-com-array.js
│   │   ├── pilha-com-lista.js
│   │   ├── fila-com-lista.js
│   │   ├── sandwich.js                 # Exemplo com fila
│   │   ├── is-balanced.js              # Parênteses balanceados
│   │   ├── valid-parentheses.js
│   │   └── ... (mais exemplos)
│   │
│   ├── Conjuntos e dicionários/        # Sets e Maps
│   │   ├── intersection.js
│   │   ├── two-sum.js
│   │   ├── word-count.js
│   │   ├── votacao.js
│   │   ├── transacoes.js
│   │   └── ... (mais exercícios)
│   │
│   ├── Complexidade de algoritmos/     # Análise de complexidade
│   │   ├── busca-sequencial.js
│   │   ├── ordem-logaritmica.js
│   │   ├── ordem-quadratica.js
│   │   ├── ordem-exponencial.js
│   │   └── ordem-cubica.js
│   │
│   ├── Recursividade/                  # Problemas recursivos
│   │   ├── fatorial.js
│   │   ├── fibonacci.js
│   │   ├── reverse.js
│   │   ├── pilha-de-chamadas.js
│   │   └── recursividade-de-cauda.js
│   │
│   ├── JS*/                            # Exercícios tópicos específicos
│   │   ├── JSanagram/                  # Anagramas
│   │   ├── JScpf/                      # Validação de CPF
│   │   ├── JSdate/                     # Manipulação de datas
│   │   ├── JSemail/                    # Validação de email
│   │   ├── JSprefixocomum/             # Prefixo comum
│   │   ├── JSsenha/                    # Validação de senha
│   │   └── JStransaction/              # Transações
│   │
│   ├── test.html                       # Testes interativos no navegador
│   └── time-test.js                    # Testes de performance
│
├── docs/                               # Documentação
│   ├── fundamentos/                    # Tutoriais de fundamentos por linguagem
│   │   ├── javascript-fundamentos.md   # Tutorial JavaScript (650+ linhas, 50+ exemplos)
│   │   ├── python-fundamentos.md       # Tutorial Python (650+ linhas, 50+ exemplos)
│   │   ├── java-fundamentos.md         # Tutorial Java (650+ linhas, 50+ exemplos)
│   │   └── csharp-fundamentos.md       # Tutorial C# (650+ linhas, 50+ exemplos)
│   ├── java-documentation.html         # Guia Java completo (referência)
│   └── README.md                       # Instruções de uso
│
├── .github/
│   └── copilot-instructions.md        # Instruções para agentes AI
│
├── .vscode/
│   └── (configurações do VS Code)
│
├── Strings/                            # Exercícios com strings
├── Topico inicial/                     # Introdução
│
└── README.md                           # Este arquivo
```

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** v14.0 ou superior ([download](https://nodejs.org/))
- **VS Code** (recomendado)
- Navegador moderno (Chrome, Firefox, Edge)
- Conhecimento básico de JavaScript

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/gabrielsalesdavid/DevSuperiorEstruturaDeDados.git
   cd DevSuperiorEstruturaDeDados/JavaScript
   ```

2. **Execute um exercício com Node.js**:
   ```bash
   node "Exercicio/Arrays/contains-duplicate.js"
   node "Exercicio/Listas/estrutura-node.js"
   node "Exercicio/Pilhas e Filas/sandwich.js"
   ```

3. **Execute testes no navegador**:
   - Abra `Exercicio/test.html` em seu navegador
   - Ou use **Live Server** no VS Code (clique direito em `test.html` → "Open with Live Server")

4. **Verifique performance** (tempo de execução):
   ```bash
   node "Exercicio/time-test.js"
   ```

## 📚 Tópicos Cobertos

### 1. **Arrays** (8 exercícios)
- Buscar duplicatas
- Produto escalar de dois arrays
- Duplicar zeros
- Quadrado de array ordenado
- Merging arrays
- e mais...

**Como rodar:**
```bash
node "Exercicio/Arrays/contains-duplicate.js"
```

### 2. **Listas Ligadas** (10+ exercícios)
- Estrutura Node básica
- Listas duplamente ligadas
- Adicionar/remover elementos
- Obter elementos por posição
- Verificar se lista está vazia
- Limpar lista
- e mais...

**Exemplo:**
```bash
node "Exercicio/Listas/estrutura-node.js"
```

### 3. **Pilhas e Filas** (12+ exercícios)
- Implementação com array
- Implementação com lista ligada
- Problema: sanduíches em fila
- Verificar parênteses balanceados
- Validar parênteses, colchetes, chaves
- Remover duplicatas com pilha
- e mais...

**Exemplo popular:**
```bash
node "Exercicio/Pilhas e Filas/sandwich.js"
# Output: [1, 1] ou [0, 1] (alunos que não comeram)
```

### 4. **Busca e Ordenação** (9 algoritmos)
- **Busca**: Sequencial, Binária (recursiva)
- **Ordenação**: 
  - Bubble Sort (com análise de complexidade)
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - e comparações de desempenho

**Comparar algoritmos:**
```bash
node "Exercicio/Busca e Ordenação/bubble-sort.js"
node "Exercicio/Busca e Ordenação/quick-sort.js"
```

### 5. **Conjuntos e Dicionários** (8+ exercícios)
- Interseção de conjuntos
- Two Sum (encontrar par com soma alvo)
- Contagem de palavras
- Votação
- Transações
- Alunos e visitantes
- e mais...

**Exemplo:**
```bash
node "Exercicio/Conjuntos e dicionários/two-sum.js"
```

### 6. **Análise de Complexidade** (5 exemplos)
- Ordem O(n) - Busca Sequencial
- Ordem O(log n) - Logarítmica
- Ordem O(n²) - Quadrática
- Ordem O(n³) - Cúbica
- Ordem O(2ⁿ) - Exponencial

**Rodar análise:**
```bash
node "Exercicio/Complexidade de algoritmos/busca-sequencial.js"
```

### 7. **Recursividade** (5+ exercícios)
- Fatorial
- Fibonacci
- Reverse (inverter array/string)
- Pilha de chamadas
- Recursividade de cauda
- Otimizações

**Exemplo:**
```bash
node "Exercicio/Recursividade/fibonacci.js"
```

### 8. **Exercícios Específicos** (Validações e Algoritmos)
- **CPF**: Validação de CPF brasileira
- **Email**: Validação de formato
- **Senha**: Critérios de força
- **Anagrama**: Verificar se são anagramas
- **Prefixo Comum**: Encontrar prefixo comum em strings
- **Data**: Manipulação de datas
- **Transação**: Simulação de transações

**Exemplos:**
```bash
node "Exercicio/JScpf/test.js"
node "Exercicio/JSemail/test.js"
node "Exercicio/JSsenha/test.js"
```

## 💡 Padrões e Convenções

### Estrutura de um Exercício Típico

```javascript
// Exercicio/Meu-Topico/meu-exercicio.js

/**
 * Descrição do que a função faz
 * @param {tipo} parametro - Descrição do parâmetro
 * @returns {tipo} Descrição do retorno
 */
function minhaFuncao(parametro) {
    // Implementação
    return resultado;
}

// Testes com console.log
console.log(minhaFuncao(entrada1));    // Resultado esperado
console.log(minhaFuncao(entrada2));    // Resultado esperado
```

### Executar Qualquer Arquivo

```bash
# Formato genérico
node "Exercicio/<Pasta>/<arquivo>.js"

# Exemplos reais
node "Exercicio/Arrays/contains-duplicate.js"
node "Exercicio/Listas/estrutura-node.js"
node "Exercicio/Busca e Ordenação/merge-sort.js"
```

### Depuração

1. **Adicione `console.log()` para verificar valores**:
   ```javascript
   console.log("Variável x:", x);
   console.log("Array completo:", array);
   ```

2. **Use o depurador do VS Code**:
   - Pressione `F5` para iniciar debug
   - Coloque breakpoints clicando na linha

3. **Use `debugger` no código**:
   ```javascript
   debugger;  // Pausa aqui ao executar com --inspect
   node --inspect "Exercicio/arquivo.js"
   ```

## 📊 Estatísticas do Repositório

| Tópico | Quantidade | Exemplos |
|--------|-----------|----------|
| **Arrays** | 8 exercícios | contains-duplicate, merge-arrays |
| **Listas** | 10+ exercícios | estrutura-node, doubly-linked-list |
| **Pilhas e Filas** | 12+ exercícios | sandwich, is-balanced |
| **Busca e Ordenação** | 9 algoritmos | merge-sort, quick-sort, busca-binaria |
| **Conjuntos e Dicionários** | 8+ exercícios | two-sum, word-count |
| **Complexidade** | 5 exemplos | Análise O(n), O(n²), O(2ⁿ) |
| **Recursividade** | 5+ exercícios | fibonacci, fatorial |
| **Validações** | 7 tipos | CPF, email, senha, anagrama |
| **Total** | **60+** | Exercícios completos |

## 🎓 Currículo de Aprendizagem Sugerido

### Nível 1: Iniciante
1. Arrays básicos
2. Listas simples
3. Pilhas e Filas
4. Recursividade simples

### Nível 2: Intermediário
5. Algoritmos de busca e ordenação
6. Análise de complexidade
7. Conjuntos e Dicionários
8. Listas duplamente ligadas

### Nível 3: Avançado
9. Árvores (em desenvolvimento)
10. Grafos (em desenvolvimento)
11. Algoritmos dinâmicos
12. Otimizações avançadas

## 🔗 Recursos Adicionais

### Documentação Local
- **`docs/conceitos/`** - Conceitos de Estruturas de Dados e Algoritmos por linguagem:
  - `javascript-conceitos.md` - Arrays, Listas Ligadas, Pilhas, Filas, BST, Busca, Ordenação
  - `python-conceitos.md` - List, Deque, Linked List, Stack, Queue, Tree, Algoritmos
  - `java-conceitos.md` - ArrayList, LinkedList, Stack, Queue, BST, Busca, Ordenação
  - `csharp-conceitos.md` - List<T>, LinkedList<T>, Stack<T>, Queue<T>, LINQ
- **`docs/fundamentos/`** - Tutoriais de fundamentos por linguagem (650+ linhas cada)
- **`docs/java-documentation.html`** - Guia de referência Java (30+ páginas)
- **`.github/copilot-instructions.md`** - Instruções para agentes AI

### 📖 Documentação de Fundamentos por Linguagem

Este repositório inclui **tutoriais abrangentes** de fundamentos para as 4 linguagens utilizadas:

| Linguagem | Arquivo | Conteúdo |
|-----------|---------|----------|
| **JavaScript** | `docs/fundamentos/javascript-fundamentos.md` | 650+ linhas com 50+ exemplos: tipos, variáveis, operadores, controle, funções, arrays, objetos, async/await, boas práticas |
| **Python** | `docs/fundamentos/python-fundamentos.md` | 650+ linhas com 50+ exemplos: tipos, variáveis, operadores, controle, funções, coleções, OOP, exceções, PEP 8 |
| **Java** | `docs/fundamentos/java-fundamentos.md` | 650+ linhas com 50+ exemplos: tipos, variáveis, operadores, controle, métodos, arrays, OOP, exceções, interfaces |
| **C#** | `docs/fundamentos/csharp-fundamentos.md` | 650+ linhas com 50+ exemplos: tipos, variáveis, operadores, controle, métodos, LINQ, OOP, properties, async |

**Como usar**:
1. Acesse a pasta `docs/fundamentos/`
2. Escolha a linguagem desejada
3. Abra o arquivo `.md` no VS Code ou navegador
4. Cada arquivo contém 11 seções estruturadas com exemplos práticos

### Links Externos
- [MDN - JavaScript](https://developer.mozilla.org/en-us/docs/Web/JavaScript/)
- [Big O Complexity Chart](https://www.bigocheatsheet.com/)
- [Visualgo - Algoritmos Animados](https://visualgo.net/)
- [LeetCode](https://leetcode.com/) - Mais problemas para praticar

## 📝 Como Contribuir

### Adicionar um Novo Exercício

1. **Crie o arquivo na pasta apropriada**:
   ```bash
   Exercicio/<Topico>/meu-exercicio.js
   ```

2. **Siga o padrão do projeto**:
   - Use JavaScript puro (sem dependências)
   - Adicione comentários Javadoc
   - Inclua `console.log` com testes

3. **Faça commit com mensagem clara**:
   ```bash
   git add "Exercicio/<Topico>/meu-exercicio.js"
   git commit -m "Adiciona exercício de <Topico>: <descrição>"
   ```

4. **Faça push**:
   ```bash
   git push origin main
   ```

### Reportar Erros

1. Abra uma **Issue** no GitHub
2. Descreva o problema e o exercício afetado
3. Inclua como reproduzir (se possível)

## ⚙️ Configuração do Projeto

### VS Code Recomendado
- **Extensão**: Quokka.js (executa código em tempo real)
- **Extensão**: Live Server (abre test.html no navegador)
- **Extensão**: Code Runner (atalho para executar)

### Configuração do Depurador

Arquivo `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/Exercicio/seu-arquivo.js",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja [LICENSE](LICENSE) para detalhes.

Você é livre para usar, modificar e distribuir este código, desde que atribua crédito ao autor original.

## 👤 Autor

- **Gabriel Sales David**
- GitHub: [@gabrielsalesdavid](https://github.com/gabrielsalesdavid)
- DevSuperior Student

## 🤝 Agradecimentos

- **DevSuperior** - Comunidade de educação em programação
- **Contribuidores** - Todos que reportam bugs e sugerem melhorias
- **JavaScript Community** - Por ferramentas e recursos incríveis

## 📞 Suporte

Tem dúvidas? Precisa de ajuda?

1. Consulte a documentação local em `docs/`
2. Abra uma **Issue** no GitHub
3. Verifique exemplos similares no repositório
4. Consulte recursos externos (MDN, Stack Overflow)

---

**Última atualização**: 20 de novembro de 2025

⭐ Se este repositório foi útil, considere dar uma estrela (star) no GitHub!

Happy Coding! 🚀
