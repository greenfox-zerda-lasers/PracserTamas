numbers = [4, 5, 6, 7, 8, 9, 10]
kitties = [4, 5, 6, 7, 8, 9, 11]
# write your own sum function

def summarum(lists):
    summa = 0
    for i in range(len(lists)):
        summa += lists[i]
    print(summa)

summarum(numbers)
summarum(kitties)
