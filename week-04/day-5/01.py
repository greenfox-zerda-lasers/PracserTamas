from tkinter import*
import time

root = Tk()
canvas = Canvas(root, width=660, height=550)
canvas.pack()

height = ((3**0.5)/2)
def triangle(x, y, size):
    time.sleep(0.01)
    canvas.create_polygon(x, y, x+size, y, x+0.5*size, y+(height*size),
                          outline="purple", fill="", width=2)
    canvas.update()
# draw_triangle = triangle(30, 10, 600)

def draw_recursive(x, y, size):
    if size < 5:
        return
    else:
        triangle(x, y, size)
        draw_recursive(x, y, size/2)
        draw_recursive(x+size/2, y, size/2)
        draw_recursive(x+size/4, y+(height/2*size), size/2)


draw_recursive(30, 10, 600)
root.mainloop()
