using System.Globalization;

namespace DevSuperior {

    class Product {

        public string Name {get; set;}
        public double Price {get; set;}
        public int Quantity {get; set;}
        public Product(string name, double price, int quantity) {

            this.Name = name;
            this.Price = price;
            this.Quantity = quantity;
        }

        public override string ToString() {

            return Name
            + ", R$ "
            + Price.ToString("F2", CultureInfo.InvariantCulture)
            + ", "
            + Quantity;
        }
    }
}