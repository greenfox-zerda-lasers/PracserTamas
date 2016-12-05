# Create a Rectangle class
# That stores its size and its coordinates
# it should have a method called is_over, that takes an other Rectangle and
# returns True if the two rectangles are overlaping and returns False otherwise

class Rectangle():
    a = 0
    b = 0
    x = 0
    y = 0

    def __init__(self, a, b, x, y):
        self.a = a
        self.b = b
        self.x = x
        self.y = y

    def is_over(self, obj2):
        x1 = self.x
        x2 = self.x + self.a
        ox1 = obj2.x
        ox2 = obj2.x + obj2.a
        y1 = self.y
        y2 = self.y + self.b
        oy1 = obj2.y
        oy2 = obj2.y + obj2.b
        return x1 < ox2 and x2 > ox1 and y1 < oy2 and y2 > oy1

rectangle1 = Rectangle(10,10,3,3)
rectangle2 = Rectangle(2,3,0,0)

print(rectangle1.is_over(rectangle2))
