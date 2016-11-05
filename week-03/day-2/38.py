numbers = [7, 5, 8, -1, 2]
# Write a function that returns the minimal element
# in a list (your own min function)
def minimal(list):
    mini = list[0]
    for i in range(1, len(list)):
        if mini > list[i]:
            mini = list[i]
    return mini

print(minimal(numbers))
