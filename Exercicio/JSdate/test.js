function extractDateData(date) {

    const parts = date.split("/");
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    return {day, month, year};
}

const obj = extractDateData("21/07/2010");
console.log(`Dia: ${obj.day}`);
console.log(`Mês: ${obj.month}`);
console.log(`Ano: ${obj.year}`);

const parts = "21/07/2010".split("/");
const month = Number(parts[1]);

console.log(parts);
console.log(parts[1]);
console.log(month);