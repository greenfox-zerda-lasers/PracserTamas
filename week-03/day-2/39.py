names = ['Zakarias', 'ul', 'Hans', 'Otto', 'Ole','b;la']
# create a function that returns the shortest string
# from a list
def short(list):
    mini = list[0]
    for i in list:
        if len(mini) > len(i):
            mini = i
    return mini

print(short(names))

# def short(list):
#     mini = list[0]
#     for i in range(len(list)):
#         if len(mini) > len(list[i]):
#             mini = list[i]
#     return mini
#
# print(short(names))
