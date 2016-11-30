# Create a function that prints a triangle like this:
#   *
#   **
#   ***
#   ****
#   *****
#   ******
# It should take a number as parameter that describes how many lines the triangle has

def trinagle(number):
    x = 1
    while number >= x:
        print("*" * x)
        x += 1

trinagle(6)
