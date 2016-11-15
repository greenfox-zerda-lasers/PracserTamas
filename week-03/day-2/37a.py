numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filter_odd_numbers(numbers):
    new_list = []
    for i in range(len(numbers)):
        if numbers[i] % 2 == 0:
            new_list.append(numbers[i])
    print(new_list)

filter_odd_numbers(numbers)
