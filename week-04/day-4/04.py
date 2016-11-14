# 4. Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def powerN(base, n):
    if n == 1:
        return base
    else:
        return base * powerN(base, n-1)

# base * powerN(base, n-1) * powerN(base, n-2)
print(powerN(3, 3))
