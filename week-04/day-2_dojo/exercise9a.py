
# create a Class called FileLines
# lines = FileLines('alma.txt')
# lines.get_last() <- returns the last line of the file
# lines.get_first() <- returns the fitst line of the file
# lines.get_nth(2) <- returns the nth line given in the argument

class FileLines():

    def __init__(self, filename):
        self.filename = filename
        fr = open(self.filename, "r")
        self.text = fr.readlines()
        fr.close

    def get_last(self):
        print(self.text[-1])

    def get_first(self):
        print(self.text[0])

    def get_nth(self, line):
        print(self.text[line-1])

read_the_file = FileLines("alma.txt")
read_the_file.get_last()
read_the_file.get_first()
read_the_file.get_nth(4)
