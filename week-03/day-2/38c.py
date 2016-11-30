numbers = [7, 5, 8, -1, 2, -10]
# Write a function that returns the minimal element
# in a list (your own min function)

def minimal_element(list):
    mini = list[0]
    for i in range(len(list)):
        if list[i] < mini:
            mini = list[i]
    print(mini)


minimal_element(numbers)
