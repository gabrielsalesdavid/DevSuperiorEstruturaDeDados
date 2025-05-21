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

console.log(isAnagram("anagram", "naragam"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("batata", "attaba"));