# Create a new class called `Person` that has a first_name and a last_name (takes it in it's constructor)
# It should have a `greet` method that prints it's full name

# Create a `Student` class that is the child class of `Person`
# it should have a method to add grades
# it should have a `salute` method that prints it's full name and the average of it's grades as well

class Person():

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def greet(self):
        return self.first_name + " " + self.last_name

class Student(Person):
    all_of_grades = []

    def add_grades(self, grade):
        if 0 < grade < 6:
            self.all_of_grades.append(grade)
            return self.all_of_grades

    def salute(self):
        print("Hello " + self.greet() + "!\n" + "Your average is: ", sum(self.all_of_grades)/len(self.all_of_grades), ".")

stud = Student("Joe", "Johnson")
stud.add_grades(5)
stud.add_grades(4)
stud.add_grades(2)
stud.add_grades(9)
stud.add_grades(1)
stud.add_grades(1)
stud.salute()
