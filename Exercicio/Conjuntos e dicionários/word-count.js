class Rank {
    constructor(word, count) {
        this.word = word;
        this.count = count;
    }
}

function wordCount(texte) {
    const normalizedText = normalize(texte);
    const words = normalizedText.split(" ");
    const wordCounts = {};

    for (const word of words) {
        if (word in wordCounts) {
            wordCounts[word] += 1;
        } else {
            wordCounts[word] = 1;
        }
    }

    const ranks = [];
    for (const [word, count] of Object.entries(wordCounts)) {
        ranks.push(new Rank(word, count));
    }

    return ranks.sort((a, b) => {
        const Comparison = b.count - a.count;
        if (Comparison !== 0) {
            return Comparison;
        }
        return a.word.localeCompare(b.word);
    });
}

function normalize(texte) {

    const noPunction = texte.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gu, " ");
    return noPunction.replace(/\s{2,}/g, " ").toLowerCase().trim();
};

const inputText = `O vento sussurra sons entre as árvores,
sons que fazem animais correrem. A floresta e a natureza vibram com segredos e sons.`;

const result = wordCount(inputText);
console.log(result);
result.forEach(rank => {
    console.log(`Palavra: "${rank.word}", Contagem: ${rank.count}`);
});