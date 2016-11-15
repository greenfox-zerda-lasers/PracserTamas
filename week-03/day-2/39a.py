names = ['Zakarias', 'ul', 'Hans', 'Otto', 'Ole','b;la']
# create a function that returns the shortest string
# from a list

def shortest(nevek):
    nev = len(nevek[0])
    position = 0
    for i in range(len(nevek)):
        if len(nevek[i]) < nev:
            nev = len(nevek[i])
            position = i
    print(nevek[position])

shortest(names)
