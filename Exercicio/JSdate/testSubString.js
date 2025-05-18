function extractDateData(date) {
    
    const day = Number(date.sustring(0, 2));
    const month = Number(date.substring(3, 5));
    const year = Number(date.substrin(6, 10));

    return {day, month, year};
}

const parts = "21/07/2010".split("/");
const month = Number(parts[1]);

console.log(parts);
console.log(parts[1]);
console.log(month);