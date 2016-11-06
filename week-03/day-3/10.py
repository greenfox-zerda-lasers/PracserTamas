# Create a function that prints a triangle like this:
#       *
#      ***
#     *****
#    *******
#   *********
#  ***********
#
# It should take a number as parameter that describes how many lines the triangle has

def triangle(number):
    star = 1
    spaces = number
    while star <= number:
        starcount = (2 * star) - 1
        print(" " * spaces, "*" * starcount)
        star += 1
        spaces -= 1

triangle(6)
