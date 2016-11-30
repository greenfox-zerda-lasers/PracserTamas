# Create a `Stack` class that stores elements
# It should have a `size` method that returns number of elements it has
# It should have a `push` method that adds an element to the stack
# It should have a `pop` method that returns the last element form the stack and also deletes it from it

# please don`t use the built in methods

class Stack():
    elements = [4, 6, 12, 1]

    def size(self):
        elcount = 0
        for num in self.elements:
            elcount += 1
        print("The number of elements", elcount)

    def push(self, number):
        self.elements += [number]
        print("The stack with the new element:", self.elements)

    def pop(self):
        print("The last element is:", self.elements[-1])
        self.elements[-1: ] = [ ] ## Ez igy ok?
        print("The stack without the last element:", self.elements)

numbers = Stack()
numbers.size()
numbers.push(8)
numbers.pop()
