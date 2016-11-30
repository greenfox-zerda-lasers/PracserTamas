# create a function that takes a list and returns a new list that is reversed

def newList():
    list = [2, 6, 8, 4, 10, 7]
    new_list = []
    print("The original list:", list)

    for i in range(len(list)):
        lastPosition = len(list)-1
        new_list.append(list[lastPosition])
        list.remove(list[lastPosition])
    print("This is the reversed list:", new_list)

newList()
