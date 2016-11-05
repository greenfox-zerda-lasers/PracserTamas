# Create a `Circle` class that takes it's radius as cinstructor parameter
# It should have a `get_circumference` method that returns it's circumference
# It should have a `get_area` method that returns it's area

class Circle:
    radius = 0
    pi = 3.14

    def __init__(self, radius):
        self.radius = radius

    def get_circumference(self):
        return 2 * self.radius * self.pi

    def get_area(self):
        return self.radius ** 2 * self.pi

tCircle = Circle(100)
tCircle2 = Circle(200)
print(tCircle.get_circumference())
print(tCircle2.get_circumference())
print(tCircle.get_area())
print(tCircle2.get_area())
