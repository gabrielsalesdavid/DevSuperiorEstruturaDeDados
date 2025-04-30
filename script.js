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

function total(product) {

    return product.price * product.quantity;
}

function updatePrice(product, percentage) {

    product.price = product.price * (1 + percentage / 100);
}

const p01 = new Product("Laptop", 1000.00, 5);
const p02 = new Product("HeadPhones", 200.00, 2)

console.log(p01.name)
console.log(p01.price)

console.log(p02.name)
console.log(p02.price)

console.log(p02.toString())
console.log(p02.toString())


const total01 = total(p01);
const total02 = total(p02);

console.log(total01);
console.log(total02);

updatePrice(p01, 10);
console.log(p01.price);