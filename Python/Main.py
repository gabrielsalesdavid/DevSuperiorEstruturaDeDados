class Product:

    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def __str__(self):
        return f"{self.name}, $ {self.price:.2f}, {self.quantity}"
        
p01 = Product("LapTop", 1000.00, 5)
p02 = Product("HeadPhone", 200.00, 22)

print(p01)
print(p02)
print(p01.name)
print(p02.name)