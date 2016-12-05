# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():
    all_grades = []

    def add_grade(self, grade):
        if 0 < grade < 6:
            self.all_grades.append(grade)

    def get_average(self):
        average = sum(self.all_grades)/len(self.all_grades)
        print("The average of the student is:", average)

stud = Student()
stud.add_grade(3)
stud.add_grade(5)
stud.add_grade(2)
stud.add_grade(1)
stud.add_grade(0)
stud.add_grade(5)
stud.get_average()
