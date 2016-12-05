# create a 300x300 canvas.
# draw a green 10x10 square to its center.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box(x,y):
    greenBox = canvas.create_rectangle(x,y,x+10,y+10, fill = "green")
draw_box = box(145,145)

root.mainloop()
