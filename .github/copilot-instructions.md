<!-- Arquivo gerado/atualizado por Copilot: segue orientação concisa para agentes AI -->
# Copilot instructions para este repositório

Objetivo: ajudar agentes a serem produtivos rapidamente neste repositório de exercícios de JavaScript (estruturas de dados e algoritmos).

1) Visão geral (big picture)
- Este repositório é uma coleção de exercícios organizados por tópico dentro de `Exercicio/` (por exemplo `Listas`, `Pilhas e Filas`, `Busca e Ordenação`, `Conjuntos e dicionários`).
- Cada arquivo normalmente contém uma função ou solução autônoma seguida de chamadas de teste com `console.log` ou pequenos arquivos `test.js`/`test.html` para verificação manual.
- A finalidade é didática: manter soluções simples, legíveis e com dependências zero — foco em JavaScript puro (Node/browser).

2) Como executar e depurar localmente
- Arquivos JS individuais: execute com Node a partir da raiz do workspace:

  `node "Exercicio/<pasta>/<arquivo>.js"`

- Testes que usam navegador: abra `Exercicio/test.html` no browser ou use Live Server no VS Code.
- Depuração: use o depurador do VS Code (launch configuration padrão `node`), ou insira `debugger`/`console.log` para inspeção rápida.

3) Padrões e convenções do projeto
- Nomes de pastas e arquivos em português; preserve nomes e caminhos ao referenciar exemplos.
- Arquivos de exercício geralmente exportam nada (não usam `module.exports`) e verificam comportamento com `console.log` no final. Ao editar, mantenha esse estilo salvo quando for criar módulos reutilizáveis.
- Evite adicionar dependências — prefira APIs nativas do Node/JavaScript (`Array.prototype.slice`, `shift`, `push`, `for...of`, recursão etc.).

4) Estruturas recorrentes e exemplos (copiar/colar seguro)
- Fila/rotacionamento (exemplo: `Exercicio/Pilhas e Filas/sandwich.js`):

  - usa `students.slice()` para clonar o array; `shift()` para remover da frente; `push()` para reenfileirar.

- Listas ligadas (ex.: `Exercicio/Listas/estrutura-node.js`, `doubly-linked-list.js`): preserve construção de `Node` e operações básicas (inserir, remover, iterar).

5) Pontos de atenção ao modificar código
- Não remova chamadas `console.log` de arquivos de exercício sem motivo — são o principal mecanismo de verificação.
- Se criar módulos reutilizáveis, adicione `module.exports` e prefira criar um `test-<nome>.js` que importe o módulo para manter compatibilidade com os arquivos existentes.
- Mantenha comentários em português quando presentes e explique alterações complexas com um comentário curto.

6) Workflow de contribuição e commits
- Mudanças pequenas e focadas por commit (1 exercício/bugfix por commit).
- Inclua no corpo do commit: o caminho do arquivo modificado e breve razão (ex.: `Corrige loop infinito em Exercicio/Pilhas e Filas/sandwich.js`).

7) Integrações externas e dependências
- Nenhuma integração externa detectada (API, DB ou CI configurados). O repositório é autossuficiente e sem `package.json`/build.

8) Exemplo de instrução de tarefa para agente
- "Refatore `Exercicio/Busca e Ordenação/busca-binaria.js` para usar uma função pura que retorne índice ou -1; adicione `test-busca-binaria.js` com 3 casos de teste e mantenha `console.log` de demonstração."

9) Onde buscar mais contexto
- Arquivos que exemplificam padrões: `Exercicio/Pilhas e Filas/sandwich.js`, `Exercicio/Listas/estrutura-node.js`, `Exercicio/Conjuntos e dicionários/transacoes.js`.

Se algo no repositório estiver incorreto ou fora do padrão, peça ao mantenedor uma orientação explícita — e pergunte qual estilo de exportação (padrão global com `console.log` versus módulos) preferem antes de converter muitos arquivos.

---
Se quiser, atualizo a versão com exemplos de PR/commit ou mesclo conteúdo pré-existente caso você tenha arquivos de instrução adicionais para incorporar.
