# Write a Person class that have a name and a birth_date property
# It should raise an error of the birthdate is less than 0 or more than 2016

class Person():

    def __init__(self, name, birth_date):
        if birth_date > 2016 or birth_date < 0:
            raise ValueError("The number must be between 0 and 2016.")
        self.name = name
        self.birth_date = birth_date

# if __name__ == '__main__':
print(person = Person('Laci', 2015))
