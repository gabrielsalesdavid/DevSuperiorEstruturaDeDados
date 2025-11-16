function invalidTransactions(transactions) {
    const invalids = new Set();
    const transactionList = transactions.map(t => {
        const [name, time, amount, city] = t.split(',');
        return { name, time: Number(time), amount: Number(amount), city, original: t };
    });
    
    for (let i = 0; i < transactionList.length; i++) {
        const t1 = transactionList[i];
        
        // Check for amount greater than 1000
        if (t1.amount > 1000) {
            invalids.add(t1.original);
        }
        
        // Check for transactions within 60 minutes in different cities
        for (let j = 0; j < transactionList.length; j++) {
            if (i !== j) {
                const t2 = transactionList[j];
                if (t1.name === t2.name &&
                    Math.abs(t1.time - t2.time) <= 60 &&
                    t1.city !== t2.city) {
                    invalids.add(t1.original);
                    invalids.add(t2.original);
                }
            }
        }
    }
    
    return Array.from(invalids);
}

console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"]));
console.log(invalidTransactions(["bob,689,1910,barcelona","bob,832,1726,barcelona","bob,820,596,amsterdam","bob,100,1500,barcelona"]));
console.log(invalidTransactions(["john,20,800,mtv","john,50,1200,mtv","john,55,100,beijing"]));
console.log(invalidTransactions(["daniel,10,500,paris","daniel,50,100,paris","daniel,55,600,berlin"]));