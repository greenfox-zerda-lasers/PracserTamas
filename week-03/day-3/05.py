# Create a `Stack` class that stores elements
# It should have a `size` method that returns number of elements it has
# It should have a `push` method that adds an element to the stack
# It should have a `pop` method that returns the last element form the stack and also deletes it from it

# please don`t use the built in methods

class Stack():
    elements = [2, 4, 7, 3]

    def size(self):
        elcount = 0
        for num in self.elements:
            elcount += 1
        return elcount

    def push(self, newElement):
        self.elements += [newElement]
        return self.elements

    def pop(self):
        elemszam = self.size() - 1
        print("The last element is: ", self.elements[elemszam])
        self.elements = self.elements[:-1]
        return self.elements

nomethod = Stack()
print("The number of elements: ", nomethod.size())
print("The pushed element in stack: ", nomethod.push(11))
print("The poped stack: ", nomethod.pop())
