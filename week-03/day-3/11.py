# Create a function that prints a diamond like this:
#       *
#      ***
#     *****
#    *******
#   *********
#  ***********
#   *********
#    *******
#     *****
#      ***
#       *
#
# It should take a number as parameter that describes how many lines the diamond has

def triangle1(number):
    star = 1
    spaces = number
    while star <= number:
        starcount = (2 * star) - 1
        print(" " * spaces, "*" * starcount)
        star += 1
        spaces -= 1

def triangle2(number):
    star = number
    spaces = 1
    while spaces <= number:
        starcount = (2 * star) - 1
        print(" " * spaces, "*" * starcount)
        star -= 1
        spaces += 1

triangle1(3)
triangle2(3)
