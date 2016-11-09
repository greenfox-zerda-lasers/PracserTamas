# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def lines(x, y):
    green1_line = canvas.create_line(x,y,150,150, fill = "green", width=5)

draw_lines = lines(12,30)
draw_lines = lines(56,230)
draw_lines = lines(220,290)
draw_lines = lines(90,60)
draw_lines = lines(190,150)
draw_lines = lines(120,20)

root.mainloop()
