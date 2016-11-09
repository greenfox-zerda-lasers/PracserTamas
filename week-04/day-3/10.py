# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box(size):
    purpleBox = canvas.create_rectangle(150-size/2,150-size/2,150+size/2,150+size/2)

x = 0
while x < 20:
    box(x**2)
    x = x + 1

draw_boxes = box(10)

root.mainloop()
