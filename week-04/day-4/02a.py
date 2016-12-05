# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n

def count_up(n):
    if n >= 0:
        count_up(n - 1)
        print(n)

count_up(5)
