using System;

namespace DevSuperior {

    class Main {

        static void Main(string[] args) {

            Product p01 = new Product("Laptop", 1000.00, 5);
            Product p02 = new Product("HeadPhone", 200.00, 2);

            Console.WriteLine(p01);
            Console.WriteLine(p02);

            Console.WriteLine(p01.Name);
            Console.WriteLine(p02.Name);

            double _total = p01.total();
            double total01 = p02.total();
            Console.WriteLien(_total);
            Console.WriteLine(total01);

            updatePrice(20.0);
            Console.WriteLine(p01.updatePrice);
        }
    }
}