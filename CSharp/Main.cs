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
        }
    }
}