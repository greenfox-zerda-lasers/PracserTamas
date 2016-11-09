# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.


from tkinter import*
from random import choice

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

color = ["red", "orange", "yellow", "green", "blue", "violet"]
def box(size, color):
    colorBox = canvas.create_rectangle(150-size/2,150-size/2,150+size/2,150+size/2, fill=color)

x = 20
while x > 0:
    box(x**2, choice(color))
    x = x - 1

root.mainloop()
