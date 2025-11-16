function total(visitors) {

    let uniqueVisitors = [];

    visitors.forEach(entry => {
        const name = entry.split(",")[0];

        uniqueVisitors.push(name);
    });

    return uniqueVisitors.size;
}

function totalNaive(visitors) {

    let uniqueVisitors = [];

    visitors.forEach(entry => {
        const name = entry.split(",")[0];

        if (!uniqueVisitors.includes(name)) { // O(n) check

            uniqueVisitors.push(name);
        }
    });

    return uniqueVisitors.length;
}

const visitors = [
    "ana,2024-07-04T21:42:40.3532800Z,https://blog.com/login",
    "bruno,2024-07-04T21:43:40.3532800Z,https://blog.com/home",
    "ana,2024-07-04T22:00:40.3532800Z,https://blog.com/profile",
    "carla,2024-07-04T22:10:40.3532800Z,https://blog.com/login",
    "bruno,2024-07-04T22:20:40.3532800Z,https://blog.com/settings"
];

const start01 = new Date();
console.log(total(visitors)); // Output: 3
const end01 = new Date();
console.log(`Execution time: ${(end01 - start01).toFixed(2)} ms`);

const start02 = new Date();
console.log(totalNaive(visitors)); // Output: 3
const end02 = new Date();
console.log(`Execution time: ${(end02 - start02).toFixed(2)} ms`);

const quo = (end02 - start02) / (end01 - start01);
console.log(`Segundo algoritmo ${quo.toFixed(2)} vezes mais lento que o primeiro.`);