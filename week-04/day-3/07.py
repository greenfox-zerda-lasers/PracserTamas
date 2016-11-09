# create a 300x300 canvas.
# fill it with four different size and color rectangles.

from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

greenBox = canvas.create_rectangle(10,280,40,80, fill = "green")
redBox = canvas.create_rectangle(60,10,70,30, fill = "red")
purpleBox = canvas.create_rectangle(120,220,190,60, fill = "purple")
yellowBox = canvas.create_rectangle(220,30,300,120, fill = "yellow")


root.mainloop()
