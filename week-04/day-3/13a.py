# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def lines(x, y):
    green1_line = canvas.create_line(x,y,150,150, fill = "green")

a = 0
x = 0
y = 0
while a <= 15:
    draw_lines = lines(x,y)
    x += 20
    y += 0
    a += 1

a = 0
x = 0
y = 0
while a <= 15:
    draw_lines = lines(x+300,y)
    x += 0
    y += 20
    a += 1

a = 0
x = 0
y = 0
while a <= 15:
    draw_lines = lines(x+300,y+300)
    x -= 20
    y -= 0
    a += 1

a = 0
x = 0
y = 0
while a <= 15:
    draw_lines = lines(x,y+300)
    x -= 0
    y -= 20
    a += 1

root.mainloop()
