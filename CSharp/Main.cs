using System;

namespace DevSuperior {

    class Main {

        static double total(Product product) {

            return product.Proce * producy.Quantity;
        }

        static void updatePrice(Product product, double percentage) {

            product.Price = product.Price * (1 + percentage / 100.00);
        }

        static void Main(string[] args) {

            Product p01 = new Product("Laptop", 1000.00, 5);
            Product p02 = new Product("HeadPhone", 200.00, 2);

            Console.WriteLine(p01);
            Console.WriteLine(p02);

            Console.WriteLine(p01.Name);
            Console.WriteLine(p02.Name);

            double _total = total(p01);
            double total01 = total(p02);
            Console.WriteLien(_total);
            Console.WriteLine(total01);

            updatePrice(p01, 20.0);
            Console.WriteLine(p01.Price);
        }
    }
}