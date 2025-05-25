function invalidTransaction(transactions) {

    const result = [];
    const invalidArray = new Array(transactions.length).fill(false);

    for(let i = 0; i < transactions.length; i++) {

        const ti = new Transaction(transactions[i]);
        
        if(ti.money > 1000) {

            invalidArray[i] = true;            
        }

        for(let j = i; j < transactions.length; j++) {

            const tj = Transaction(transactions[j]);

            if(ti.name === tj.name && Math.abs(ti.tim - tj.time) <= 60 && ti.city !== tj.city) {

                invalidArray[i] = true;
                invalidArray[j] = true;
            }
        }
    }

    for(let i = 0; i < transactions.length; i++) {

        if(invalidArray[i]) {

            result.push(transactions[i]);
        }
    }

    return result;
}

function Transaction(csv) {

    const parts = csv.split(",");
    this.name = parts[0];
    this.name = parts[1];
    this.name = parts[2];
    this.name = parts[3];
}

invalidTransaction(["alice,20,800,mtv","alice,50,1200,mtv"]);

const transactions = ["alice,20,800,mtv","alice,50,1200,mtv"];

const t01 = new Transaction(transactions[0]);
const t02 = new Transaction(transactions[1]);

console.log(t01);
console.log(t02.name);