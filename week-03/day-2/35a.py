# create a function that returns it's input factorial

def factorial_func(num):
    sum_num = 1
    for i in range(num):
        i += 1
        sum_num *= i
    print(sum_num)

factorial_func(5)


# def fucktorial(number):
#     fuck = 1
#     for i in range(1,(number+1)):
#         fuck *= i
#     print(fuck)
#
# fucktorial(5)
