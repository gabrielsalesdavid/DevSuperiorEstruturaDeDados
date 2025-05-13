package br.com.app;

@Getter
@Setter
public class Product {

    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {

        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public double total(Product product) {

        return price * quantity;
    }

    public void updatePrice(double percentage) {

        price = price * (1 + percentage / 100.0);
    }

    @Override
    public String toString() {

        return name
        + ", $"
        + String.format("%.f2", price)
        + ", "
        + quantity;        
    }
}