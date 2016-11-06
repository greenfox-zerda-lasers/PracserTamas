# Create a function that prints a triangle like this:
#   *
#   **
#   ***
#   ****
#   *****
#   ******
# It should take a number as parameter that describes how many lines the triangle has

def trinagle(number):
    star = 1

    while star <= number:
        print("*" * star)
        star += 1

trinagle(6)
