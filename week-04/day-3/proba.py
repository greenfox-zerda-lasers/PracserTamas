from tkinter import *
root = Tk()

canvas = Canvas(root, width = 300, height = 300)
canvas.pack()

def draw_line(x,y):
    line = canvas.create_line(x, y, 300 - x, 300 - y)

for i in range(0, 600, 20):
    if i <= 300:
        draw_line(0 + i, 0)
    else:
        draw_line(0, (0 - 300) + i)



root.mainloop()
