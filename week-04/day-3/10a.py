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
    for x in range(20):
        # canvas.create_rectangle(150-i**2/2,150-i**2/2,150+i**2/2,150+i**2/2)
        canvas.create_rectangle(150-x**2/2,150-x**2/2,150+x**2/2,150+x**2/2)
box(100)

root.mainloop()
