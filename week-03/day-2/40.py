students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]
# create a function that takes a list of students,
# then returns how many candies are own by students
# under 10

def candylist(i):
    cukor = 0
    for student in i:
        if student["age"] < 10:
            cukor = cukor + j["candies"]
    return cukor
print(candylist(students))



# def candylist(i):
#     cukor = 0
#     for j in range(len(i)):
#             if i[j]["age"] <= 10:
#                 cukor=cukor + i[j]["candies"]
#     return cukor
# print(candylist(students))
