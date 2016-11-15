numbers = [7, 5, 8, -1, 2]
# Write a function that returns the minimal element
# in a list (your own min function)

def mini_func(szamok):
    minimal = szamok[0]
    for i in range(len(szamok)):
        if szamok[i] < minimal:
            minimal = szamok[i]
    print(minimal)

mini_func(numbers)
