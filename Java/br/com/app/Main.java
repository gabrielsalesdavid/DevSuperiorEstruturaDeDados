package br.com.app;

public class Main {

    public static void main(String[] args) {

        Product p01 = new Product("Laptop", 1000.00, 5);
        Product p02 = new Product("HeadPhones", 200.00, 2);        

        System.out.println(p01);
        System.out.println(p02);

        System.out.println(p01.getPrice());
        System.out.println(p02.getPrice());

        double total = p01.total(p01);
        double total01 = p02.total(p02);

        System.out.println(total);
        System.out.println(total01);

        p01.updatePrice(20.0);
        System.out.println(p01.getPrice());
    }
}