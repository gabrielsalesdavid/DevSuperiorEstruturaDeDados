function removeDigits(str) {

    const regex = /\D/g;
    return str.replace(regex, "");
}

console.log(removeDigits("874.092.172-93"));