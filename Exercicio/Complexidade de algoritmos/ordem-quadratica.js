function higherValues(arr) {

    let newArray = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[i]) {

                newArray[i]++;
            }
        }
    }

    return newArray;
}

const v = [7, 3, 8, 7, 5];
const result = higherValues(v);
console.log(result);