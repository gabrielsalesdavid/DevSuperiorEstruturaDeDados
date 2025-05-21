function isAnagram(s, t) {

    const sArray = s.split('');
    const tArray = t.split('');

    sArray.sort();
    tArray.sort();

    const sSorted = sArray.join('');
    const tSorted = tArray.join('');

    if(sSortd === tSorted) {

        return true;
    } else {

        return false;
    }
}

function isAnagram01(s, t) {

    const count = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {

        const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]++;
    }

    for(let i = 0; i < t.length; i++) {

        const index = t.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]--;
    }

    for(let val of count) {

        if(val !== 0) {

            return false;
        }
    }
    
    return true;
}

console.log(isAnagram("anagram", "naragam"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("batata", "attaba"));