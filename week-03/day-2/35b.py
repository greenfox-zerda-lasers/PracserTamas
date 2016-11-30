# create a function that returns it's input factorial
#
# def fact(num):
#     x = 1
#     result = 1
#     while x <= num:
#         result = result * x
#         x += 1
#     print(result)
#
# fact(5)


def fact(num):
    result = 1
    for i in range(1, num+1):
        result = result * i
    print(result)

fact(5)
