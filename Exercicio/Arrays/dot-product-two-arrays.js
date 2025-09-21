/**
 * @param {number} nums
 * @return {product}
 */

const dotProduct = (nums01, nums02) => {

    let product = 0;

    for (let i = 0; i < nums01.length; i++) {

        product += nums01[i] * nums02[i];
    }

    return product;
};

let nums01 = [1, 0, 0, 2, 3];
let nums02 = [0, 3, 0, 4, 0];

console.log(dotProduct(nums01, nums02));

nums01 = [0, 1, 0, 0, 0];
nums02 = [0, 0, 0, 0, 2];

console.log(dotProduct((nums01, nums02)));

nums01 = [0, 1, 0, 0, 2, 0, 0];
nums02 = [1, 0, 0, 0, 3, 0, 4];

console.log(dotProduct(nums01, nums02));