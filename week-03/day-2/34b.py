numbers = [4, 5, 6, 7, 8, 9, 10]
kitties = [4, 5, 6, 7, 8, 9, 11]
# write your own sum function

def sum_func(list_name):
    sum = 0
    for i in range(len(list_name)):
        sum += list_name[i]
    print(sum)

sum_func(numbers)
sum_func(kitties)
