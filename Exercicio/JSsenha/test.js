function validatePassword(str) {

    if(str.length < 8) {

        return false;
    } 
    if(!hasLeter(str)) {

        return false;
    }

    if(!hasNumber(str)) {

        return false;
    }

    if(!hasSpecialCharacter(str)) {

        return false;
    }
}

function hasLeter(str) {

    for(let i = 0; i < str.length; i++) {

        if((str[i] >= 'a' && stri[i] <= 'z') || (str[i] >= 'A' && stri[i] <= 'Z')) {

            return true;
        }
    }
    
    return false;
}

function hasNumber(str) {

    for(let i = 0; i < str.length; i++) {

        if(str[i] >= '0' && stri[i] <= '9') {

            return true;
        }
    }
    
    return false;
}

function hasSpecialCharacter(str) {

    for(let i = 0; i < str.length; i++) {

        if(str[i] === '@' || str[i] === '#' || str[i] === '&') {

            return true;
        }
    }
    
    return false;
}

console.log(validatePassword("amerca1@"));
console.log(validatePassword("amrca154682"));

console.log(hasLeter("abcde"));
console.log(hasLeter("123456"));
console.log(hasLeter("123h45"));