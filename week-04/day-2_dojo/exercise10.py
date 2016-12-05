# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():
    grades = []

    def add_grade(self, grade):
        grades = self.grades
        if grade in range(1, 6):
            self.grades.append(grade)
        else:
            print('Invalid grade. Add a number between 1 and 5.')
        return self.grades

    def get_average(self):
        return round(sum(self.grades)/len(self.grades), 1)

student1 = Student()

print(student1.add_grade(4))
print(student1.add_grade(4))
print(student1.add_grade(5))
print(student1.get_average())
