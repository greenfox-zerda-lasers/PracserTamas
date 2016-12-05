# create a function that takes a list and returns a new list that is reversed

list = [2, 6, 8, 4, 10, 7]
def newList(lista):
    new_list = []
    print("The original list:", lista)

    for i in range(len(lista)):
        lastPosition = len(lista)-1
        new_list.append(lista[lastPosition])
        lista.remove(lista[lastPosition])
    print("This is the reversed list:", new_list)

newList(list)
