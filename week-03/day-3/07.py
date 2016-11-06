# create a function that takes a list and returns a new list with all the elements doubled

def doubleList():
    myList = [10, 20, 30, 40]
    doubledList = []
    a = 0

    while a < len(myList):
        position = a
        doubledList.append(myList[position]*2)
        a += 1

    print("The doubled list: ", doubledList)

doubleList()
