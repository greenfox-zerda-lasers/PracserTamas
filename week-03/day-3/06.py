# create a function that takes a list and returns a new list that is reversed

def newList():
    myList = [1, 2, 3, 5]
    reverse = []
    a = 0

    print("Original list: ", myList)

    while a < len(myList):
        lastPosition = len(myList) - 1
        print(lastPosition)
        reverse.append(myList[lastPosition])
        myList.remove(myList[lastPosition])

    print("Reversed list: ", reverse)

newList()
