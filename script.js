class Product {

    constructor(name, price, quantity) {

        this.name = name;
        this.price = price;
        this.quantity = quantity;

        this.toString = function() {

            return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
        }
    }

    total() {
    
        return this.price * this.quantity;
    }
    
    updatePrice(percentage) {
    
        this.price = this.price * (1 + percentage / 100);
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


const total01 = p01.total();
const total02 = p02.total();

console.log(total01);
console.log(total02);

updatePrice(10);
console.log(p01.price);