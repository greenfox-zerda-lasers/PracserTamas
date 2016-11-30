students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 2}
]

# create a function that counts the students that
# has more than 4 candies

def candies(stud):
    students_with_more_than_4_candies = 0
    for i in stud:
        if i["candies"] > 4:
            students_with_more_than_4_candies += 1
    print(students_with_more_than_4_candies)

candies(students)
