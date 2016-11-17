# create a function that takes a number and divides ten with it and prints the result
# it should print "fail" if it is divided by 0

def divide(number):
    try:
        return(10 / number)
    except ZeroDivisionError:
        return("Fail")


print(divide(10))
