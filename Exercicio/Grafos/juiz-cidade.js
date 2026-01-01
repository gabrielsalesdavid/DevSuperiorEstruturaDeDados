class JuizCidade {
    constructor() { // Inicializa o juiz de cidades
        this.cidades = new Map(); // Mapa para armazenar cidades e suas conexões
    }

    adicionarCidade(nome) { // Adiciona uma nova cidade
        if (!this.cidades.has(nome)) { // Verifica se a cidade já existe
            this.cidades.set(nome, new Set()); // Inicializa conjunto de conexões
        }
    }

    conectarCidades(cidade1, cidade2) { // Conecta duas cidades
        if (this.cidades.has(cidade1) && this.cidades.has(cidade2)) { // Verifica se ambas as cidades existem
            this.cidades.get(cidade1).add(cidade2); // Adiciona conexão
            this.cidades.get(cidade2).add(cidade1); // Conexão bidirecional
        }
    }

    cidadesConectadas(cidade) { // Retorna cidades conectadas
        if (this.cidades.has(cidade)) { // Verifica se a cidade existe
            return Array.from(this.cidades.get(cidade)); // Retorna lista de cidades conectadas
        }
        return []; // Retorna lista vazia se a cidade não existir
    }

    existeCaminho(cidade1, cidade2, visitadas = new Set()) { // Busca em profundidade
        if (cidade1 === cidade2) return true; // Caminho encontrado
        visitadas.add(cidade1); // Marca a cidade como visitada

        for (let vizinha of this.cidades.get(cidade1) || []) { // Itera sobre cidades vizinhas
            if (!visitadas.has(vizinha)) { // Verifica se já foi visitada
                if (this.existeCaminho(vizinha, cidade2, visitadas)) { // Recursão
                    return true; // Caminho encontrado
                }
            }
        }
        return false; // Nenhum caminho encontrado
    }
}

module.exports = JuizCidade;

// Exemplo de uso:
const juiz = new JuizCidade(); // Instancia o juiz de cidades
juiz.adicionarCidade('A'); // Adiciona cidade A
juiz.adicionarCidade('B');
juiz.adicionarCidade('C');
juiz.conectarCidades('A', 'B'); // Conecta A e B
console.log(juiz.cidadesConectadas('A')); // ['B']
console.log(juiz.existeCaminho('A', 'C')); // false
juiz.conectarCidades('B', 'C'); // Conecta B e C
console.log(juiz.existeCaminho('A', 'C')); // true

var findJudge = function(n, trust) {
    const trustCount = Array(n + 1).fill(0); // Inicializa contadores de confiança
    const trustedByCount = Array(n + 1).fill(false); // Inicializa contadores de quem é confiado

    for (const [a, b] of trust) { // Itera sobre a lista de confiança
        trustCount[a]++; // Incrementa o contador de quem confia
        trustedByCount[b] = true; // Marca que b é confiado por alguém
    }

    for (let i = 1; i <= n; i++) { // Verifica cada pessoa
        if (trustCount[i] === 0 && trustedByCount[i]) { // Se não confia em ninguém e é confiado por todos
            return i; // Retorna o juiz
        }
    }

    return -1; // Retorna -1 se não houver juiz
};

// Exemplo de uso do findJudge:
console.log(findJudge(3, [[1,3],[2,3]])); // Output: 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // Output: -1
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])); // Output: 3