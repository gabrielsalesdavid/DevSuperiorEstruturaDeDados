class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total(self):
        return self.price * self.quantity
    
    def update_price(self, percentage):
        self.price = self.price * (1 + percentage / 100.00)

    def __str__(self):
        return f"{self.name}, $ {self.price:.2f}, {self.quantity}"
        

p01 = Product("LapTop", 1000.00, 5)
p02 = Product("HeadPhone", 200.00, 22)

print(p01)
print(p02)
print(p01.name)
print(p02.name)

total01 = p01.total()
total02 = p02.total()

print(total01)
print(total02)

update_price(p01, 10)
update_price(p02, 20)
print(p01.Price)
print(p02.Price)