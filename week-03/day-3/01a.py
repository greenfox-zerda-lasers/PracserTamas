# Create a `Circle` class that takes it's radius as cinstructor parameter
# It should have a `get_circumference` method that returns it's circumference
# It should have a `get_area` method that returns it's area

class Circle():
    pi = 3.14

    def __init__(self, radius):
        self.radius = radius

    def get_circumference(self):
        circum = 2 * self.radius * self.pi
        return circum

    def get_area(self):
        area = self.radius ** 2 * self.pi
        return area

get_circle1 = Circle(100)
get_circle2 = Circle(200)
print(get_circle1.get_circumference())
print(get_circle1.get_area())
print(get_circle2.get_circumference())
print(get_circle2.get_area())
