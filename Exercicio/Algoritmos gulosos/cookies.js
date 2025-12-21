/**
 * @param {number} n
 * @param {number []} child
 * @param {number} c
 * @param {number []} cookies
 */

var findContentChildren = function (n, child, c, cookies) {

    child.sort((a, b) => a - b); // sort both arrays in ascending order
    cookies.sort((a, b) => a - b); // sort both arrays in ascending order

    let i = 0; // pointer for children
    let j = 0; // pointer for cookies
    let contentChildren = 0; // count of content children

    while (i < n && j < c) { // while there are children and cookies left to consider

        if (cookies[j] >= child[i]) { // if the cookie can satisfy the child

            contentChildren++; // increment the count of content children
            i++; // move to the next child
        }
        j++; // move to the next cookie
    }

    return contentChildren; // return the number of content children
};

// Example usage:
const n = 3; // number of children
const child = [1, 2, 3]; // greed factors of children
const c = 2; // number of cookies
const cookies = [1, 2]; // sizes of cookies
console.log(findContentChildren(n, child, c, cookies)); // Output: 2