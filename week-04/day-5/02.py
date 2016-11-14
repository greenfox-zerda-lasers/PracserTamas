from tkinter import*
import time

root = Tk()
canvas = Canvas(root, width=700, height=550)
canvas.pack()

height = ((3**0.5)/2)
def hexagon(x, y, size):
    time.sleep(0.0001)
    canvas.create_polygon(x, y, x+size, y, x+1.5*size, y+(height*size),
                          x+size, y+(2*height*size), x, y+(2*height*size),
                          x-0.5*size, y+(height*size), outline="magenta",
                          fill="", width=1)
    canvas.update()
# draw_hexagon = hexagon(200, 10, 300)

def draw_recursive(x, y, size):
    if size < 2:
        return
    else:
        hexagon(x, y, size)
        draw_recursive(x, y, size/3)
        draw_recursive(x+(size/3)*2, y, size/3)
        draw_recursive(x+(size/3)*2+size/3, y+(2/3*height*size), size/3)
        draw_recursive(x+(size/3)*2, y+(4/3*height*size), size/3)
        draw_recursive(x, y+(4/3*height*size), size/3)
        draw_recursive(x-1/3*size, y+(2/3*height*size), size/3)

draw_recursive(200, 10, 300)
root.mainloop()
