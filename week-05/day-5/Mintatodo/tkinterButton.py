from tkinter import *
from todo_utils import *
from todo import *
import os

input_file = "todo.txt"

master = Tk()
def cls():
    os.system('cls' if os.name=='nt' else 'clear')

def listTasks():
    todo_utils().listToDos(input_file)


b = Button(master, text="OK", command=listTasks)
b.pack()

mainloop()
