# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n

def add_num(n):
    if n == 1:
        return 1
    else:
        return n + add_num(n-1)

print(add_num(10))
