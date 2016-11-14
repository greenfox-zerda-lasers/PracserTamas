numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list

def reversfunc(number):
    reverslist = []
    for i in range(len(number)):
        reverslist.append(number[(len(number)-1)-i])
    print(reverslist)

reversfunc(numbers)
