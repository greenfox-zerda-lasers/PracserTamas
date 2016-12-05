# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import *

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def draw(x, y):
    line = canvas.create_line(x, y, 150, 150, fill="purple", width=3)

draw(10, 100)
draw(180, 300)
draw(90, 10)
draw(220, 180)

root.mainloop()
