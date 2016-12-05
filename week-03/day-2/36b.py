numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list

def reverse(list):
    new_list = []
    for i in range(len(list)):
        new_list.append(list[(len(list)-1)-i])
    print(new_list)

reverse(numbers)
