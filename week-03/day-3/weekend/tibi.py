def triangle (num):
    if num % 2 == 0:
        num += 1

    space = num // 2 + 1
    diamond_core = (num / 2) - 0.5
    j = num // 2 + 1

    for i in range (0, num):
        if i < diamond_core:
            i += 1
            space -= 1
            print ((space*' ') + (i*'*') + ((i-1)*'*'))
        elif i == diamond_core:
            i += 1
            space -= 1
            print ((space*' ') + (i*'*') + ((i-1)*'*'))
        else:
            space += 1
            j -= 1
            print ((space*' ') + (j*'*') + ((j-1)*'*'))

diamond = 10
triangle(diamond)
