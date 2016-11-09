# create a 300x300 canvas.
# draw its diagonals in green.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()
green1_line = canvas.create_line(0,0,300,300, fill = "green", width=5)
green2_line = canvas.create_line(0,300,300,0, fill = "green", width=5)

root.mainloop()
