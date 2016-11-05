numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list

def reversfunc(list):
    reversed = []
    i = len(list)-1
    while i >= 0:
        reversed.append(list[i])
        i -= 1
    return reversed

print(reversfunc(numbers))


# def reversfunc(list):
#     list.reverse()
#     return(list)
#
# print(reversfunc(numbers))
