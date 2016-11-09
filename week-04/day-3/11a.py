from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box(x, y, offset, size):
    purpleBox = canvas.create_rectangle(x+offset,y+offset,x+size+offset,y+size+offset, fill="purple")

size = 10
i = 300//size
while i > 0:
    box(0, 0, size*i, size)
    i = i - 1

root.mainloop()
