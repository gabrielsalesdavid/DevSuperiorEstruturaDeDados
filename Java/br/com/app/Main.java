package br.com.app;

public class Main {

    static double total(Product product) {

        return product.getPrice() * product.getQuantity();
    }

    static void updatePrice(Product product, double percentage) {

        double newPrice = product.getPrice() * (1 + percentage / 100.0);
    }

    public static void main(String[] args) {

        Product p01 = new Product("Laptop", 1000.00, 5);
        Product p02 = new Product("HeadPhones", 200.00, 2);        

        System.out.println(p01);
        System.out.println(p02);

        System.out.println(p01.getPrice());
        System.out.println(p02.getPrice());

        double total = total(p01);
        double total01 = total(p02);

        System.out.println(total);
        System.out.println(total01);

        updatePrice(p01, 20.0);
        System.out.println(p01.getPrice());
    }
}