class Product {

    constructor(name, price, quantity) {

        this.name = name;
        this.price = price;
        this.quantity = quantity;

        this.toString = function() {

            return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
        }
    }
/*
    toString() {

        return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
        //this.name + ", " + this.price;
    }*/
}

const p01 = new Product("Laptop", 1000.00, 5);
const p02 = new Product("HeadPhones", 200.00, 2)

console.log(p01.name)
console.log(p01.price)

console.log(p02.name)
console.log(p02.price)

console.log(p02.toString())
console.log(p02.toString())