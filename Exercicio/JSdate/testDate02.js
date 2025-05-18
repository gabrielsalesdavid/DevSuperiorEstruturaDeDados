function formatDate(day, month, year) {
    
    const formatDay = String(day).padStart(2, "0");
    const formatMonth = String(month).padStart(2, "0");
    return `${addZero(day)}/${addZero(month)}/${year}`;
}

function addZero(n) {

    if(n < 10) {

        return `0${n}`;
    }
    return `0${n}`;
}

console.log(formatDate(2, 7, 2010));