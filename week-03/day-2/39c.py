names = ['Zakarias', 'ul', 'Hans', 'Otto', 'Ole','b;la']
# create a function that returns the shortest string
# from a list


def shortest_string(list):
    short = [list[0]]
    for i in range(len(list)):
        if len(list[i]) < len(short[0]):
            short = list[i]
    print(short)

shortest_string(names)
