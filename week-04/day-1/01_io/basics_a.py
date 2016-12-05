# 1. Create a method that reads all contents of a file when its name given as param

def readfile(filename):
    fr = open(filename, "r")
    text = fr.read()
    fr.close
    print(text)

readfile("texts/zen_of_python.txt")


# 2. Create a method that gets a file_name and a number as param and reads the numberth line of the file

def readline(filename, number):
    fr = open(filename, "r")
    text = fr.readlines()
    fr.close()
    print(text[number-1].rstrip())

readline("texts/zen_of_python.txt", 4)

# 3. Create a method that gets a long sentence as param and gives back the contained words in a list

def wordmaker(sentence):
    result = sentence.split()
    print(result)

wordmaker("Create a method that gets a long sentence as param and gives back")


# 4. Create a method that gets a list of words and creates a sentence with the words separated by spaces

def sentencemaker(words):
    sentence = " ".join(words) + "."
    print(sentence)

print(sentencemaker(['Create', 'a', 'method', 'that', 'gets', 'a', 'long', 'sentence', 'as', 'param', 'and', 'gives', 'back']))

# 5. Create a method that gets a string and gives back the character codes in a list

def char_code(string):
    code_list = []
    characters = list(string)

    for i in characters:
        code_list.append(ord(i))
    print(code_list)

char_code("Create")

# 6. Create a method that gets a list of integers and gives back a string which characters are created from the numbers used as character codes

def string(char_code):
    string = ""

    for i in range(len(char_code)):
        string += (chr(char_code[i]))
    print(string)

string([67, 114, 101, 97, 116, 101])
