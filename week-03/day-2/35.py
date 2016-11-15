# create a function that returns it's input factorial
def factorials(num):
    a = 1
    result = 1
    while a <= num:
        result = result * a
        a += 1
    return result

print (factorials(5))
