# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():
    my_grades = []

    def add_grade(self, grades):
        if 0 < grades < 6:
            self.my_grades.append(grades)

    def get_average(self):
        print(sum(self.my_grades) / len(self.my_grades))

stud=Student()
stud.add_grade(5)
stud.add_grade(3)
stud.add_grade(2)
stud.add_grade(5)
stud.add_grade(6)
stud.get_average()
