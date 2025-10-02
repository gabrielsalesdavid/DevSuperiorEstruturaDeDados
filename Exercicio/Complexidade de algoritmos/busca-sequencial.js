function sequencialSearch(elem, arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === elem)
            return i;
    }

    return -1;
}

const v = [15, 82, 79, 32, 41, 28];
console.log(sequencialSearch(32, v));
console.log(sequencialSearch(82, v));
console.log(sequencialSearch(22, v));