# create a 300x300 canvas.
# fill it with a checkerboard pattern.

from tkinter import *

def checkerboard(can):
    w=can.winfo_width()
    h=can.winfo_height()
    cellwidth = w/10
    cellheight=h/10
    for row in range(10):
        for col in range(10):
            if (row+col)%2==0:
                can.create_rectangle(col*cellwidth,row*cellheight,(col+1)*cellwidth,(row+1)*cellheight,fill='black')


window=Tk()
thecanvas = Canvas(window, width=300,height=300)
thecanvas.grid(row=0,column=0)
window.update_idletasks()
checkerboard(thecanvas)
window.mainloop()


#
# from tkinter import*
#
# root = Tk()
# canvas = Canvas(root, width=300, height=300)
# canvas.pack()
#
# def box(x, y, offset, size):
#     purpleBox = canvas.create_rectangle(x+offset,y+offset,x+size+offset,y+size+offset, fill="purple")
#
# size = 10
# i = 300//size
# while i > 0:
#     box(0, 0, size*i, size)
#     i = i - 1
#
# root.mainloop()
