# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box(x, y):
    purpleBox = canvas.create_rectangle(x,y,x+50,y+50, fill = "purple")

draw_boxes = box(56,230)
draw_boxes = box(12,30)
draw_boxes = box(220,100)

root.mainloop()
