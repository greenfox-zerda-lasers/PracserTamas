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

def howManyStudents(i):
    numOfStud = 0
    for student in i:
        if student["candies"] > 4:
            numOfStud = numOfStud + 1
    return numOfStud

print(howManyStudents(students))
