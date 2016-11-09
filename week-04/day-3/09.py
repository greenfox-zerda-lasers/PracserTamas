# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box(size):
    purpleBox = canvas.create_rectangle(150-size/2,150-size/2,150+size/2,150+size/2)

draw_boxes = box(40)
draw_boxes = box(100)
draw_boxes = box(200)

root.mainloop()
