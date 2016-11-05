numbers = [4, 5, 6, 7, 8, 9, 10]
kitties = [4, 5, 6, 7, 8, 9, 11]
# write your own sum function
def sumfunc(num):
    a = 0
    b = 0
    while a < len(num):
        b = b + num[a]
        a += 1
    return (b)

print (sumfunc(numbers))
print (sumfunc(kitties))
