numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filter(list):
    evens = [ ]
    for i in range(len(list)):
        if list[i] % 2 == 0:
            evens.append(list[i])
    return evens

print(filter(numbers))
