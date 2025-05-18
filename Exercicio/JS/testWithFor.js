function removeDigit(str) {

    let charArray = [];

    for(let i = 0; i < str.length; i++) {

        if(str[i] >= '0' && str[i] <= '9') {

            charArray.push(str[i]);
        }
    }

    return charArray.join("");
}

function removeDigits(str) {

    const regex = /\D/g;
    return str.replace(regex, "");
}

console.log(removeDigits("949.237.847-99"));