# 1. write a recursive function
# that takes one parameter: n
# and counts down from n

def count_down(n):
    if n >= 0:
        print(n)
        count_down(n-1)

count_down(10)
