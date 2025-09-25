function sumNaturals (n) {

    if (n === 0) {

        return 0;
    } else {

        return n + sumNaturals(n - 1);
    }
}

const result = sumNaturals(4);
console.log(result);