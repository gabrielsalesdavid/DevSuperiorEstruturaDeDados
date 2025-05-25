const transactions = ["alice,20,800,mtv","alice,50,1200,mtv"];

function Transaction(csv) {

    const parts = csv.split(",");
    this.name = parts[0];
    this.name = parts[1];
    this.name = parts[2];
    this.name = parts[3];
}

const t01 = new Transaction(transactions[0]);
const t02 = new Transaction(transactions[1]);

console.log(t01);
console.log(t02.name);