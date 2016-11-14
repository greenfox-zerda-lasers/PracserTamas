# create a function that returns it's input factorial

def fucktorial(number):
    fuck = 1
    for i in range(1,(number+1)):
        fuck *= i
    print(fuck)

fucktorial(5)
