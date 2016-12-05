names = ['Zakarias', 'ul', 'Hans', 'Otto', 'Ole','b;la']
# create a function that returns the shortest string
# from a list


def shortest_string(list):
    shortest = [list[0]]
    for i in range(len(list)):
        if len(list[i]) < len(shortest[0]):
            shortest = list[i]
    print(shortest)

shortest_string(names)
