# create a 300x300 canvas.
# draw a box that has different colored lines on each edge.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()
red_line = canvas.create_line(10,10,290,10, fill = "red", width=5)
green_line = canvas.create_line(290,10,290,290, fill = "green", width=5)
purple_line = canvas.create_line(10,290,290,290, fill = "purple", width=5)
blue_line = canvas.create_line(10,10,10,290, fill = "blue", width=5)
root.mainloop()
