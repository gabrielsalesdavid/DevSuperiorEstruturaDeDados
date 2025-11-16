let cookies = new Map();

cookies.set("user", "Maria");
cookies.set("session", "xyz123");
cookies.set("theme", "dark");

console.log(cookies.get("user")); // Output: Maria
console.log(cookies.has("session")); // Output: true

cookies.delete("theme");

console.log(cookies.size); // Output: 2

for (let [key, value] of cookies) {
    console.log(`${key}: ${value}`);
}

// Output:
// user: Maria
// session: xyz123

console.log("Keys & Values:");
for (let key of cookies.keys()) {
    console.log(key);
}

for (let value of cookies.values()) {
    console.log(value);
}

// Output:
// Keys & Values:
// user
// session
// Maria
// xyz123

cookies.clear();
let removed = cookies.get("user");
cookies.delete("user");
console.log(cookies.size); // Output: 0
console.log(`Removed: ${removed}`);

contains([1, 2, 3], 2); // true

function contains(arr, target) {
    let set = new Set(arr);
    return set.has(target);
}

console.log(contains([1, 2, 3], 2)); // Output: true
console.log(`IsEmpty: ${isEmpty(cookies.size)}`); // Output: IsEmpty: true

function isEmpty(size) {
    return size === 0;
}

console.log(isEmpty(cookies.size)); // Output: true