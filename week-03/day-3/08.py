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
    grades = []

    def add_grades(self, grade):
        if 1 <= grade <= 5:
            self.grades.append(grade)

    def salute(self):
        print("Hello ", self.greet(), "Your average is: ", sum(self.grades)/len(self.grades), ".")

szemely = Student("Kiss", "Pista")
szemely.add_grades(5)
szemely.add_grades(8)
szemely.add_grades(3)
szemely.add_grades(1)
szemely.add_grades(5)
szemely.salute()
