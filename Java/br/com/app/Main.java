package br.com.app;

public class Main {

    public static void main(String[] args) {

        Product p01 = new Product("Laptop", 1000.00, 5);
        Product p02 = new Product("HeadPhones", 200.00, 2);

        System.out.println(p01);
        System.out.println(p02);
    }
}