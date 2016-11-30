# create a function that takes a list and returns a new list with all the elements doubled

def doubleList():
    myList = [10, 20, 30, 40]
    doubledList = []
    print("The original list: ", myList)

    for i in range(len(myList)):
        doubledList.append(myList[i]*2)
    print("The doubled list: ", doubledList)

doubleList()
