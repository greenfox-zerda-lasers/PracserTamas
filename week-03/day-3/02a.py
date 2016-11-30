# Create a class called "Car"
# It should have a "type" property that stores the car's type in a string eg: "Mazda"
# It should have a "km" property that stores how many kilometers it have run
# The km and the type property should be a parmeter in the constructor
# It should have a method called "run" that takes a number and increments the "km" property by it

class Car():

    def __init__(self, type, km):
        self.type = type
        self.km = km

    def run(self, number):
        self.km += number
        print(self.type)
        print(self.km)

autos = Car("Mazda", 50000)
autos.run(500)
