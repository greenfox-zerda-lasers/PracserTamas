# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():
    number = 0
    take = []

    def add_grade(self, number):
        if 1 <= number <= 5:
            self.take.append(number)
            return self.take

    def get_average(self):
           average = sum(self.take)/len(self.take)
           return average

num = Student()
print(num.add_grade(1))
print(num.add_grade(5))
print(num.add_grade(9))
print(num.add_grade(5))
print(num.get_average())
