from tkinter import*

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box(x, y, offset, size):
    purpleBox = canvas.create_rectangle(x+offset,y+offset,x+size+offset,y+size+offset, fill="purple")

size = 10
i = 1
g = 300//size
while i < 6:
    box(0, 0, size*1.2, size*1.2)
    size = size*2
    i = i + 1

# canvas.create_rectangle(0, 0, 10, 10)
# canvas.create_rectangle(10, 10, 30, 30)
# canvas.create_rectangle(30, 30, 70, 70)
    #  0  0 10 10 // 10
    # 10 10 30 30 // 20
    # 30 30 70 70 // 40
    # 70 70 120 120 // 50

root.mainloop()

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
# i = 1
# g = 300//size
# while i < 6:
#     # box(0, 0, size*2, size*2)
#     size = size*2
#     i = i + 1
#
# canvas.create_rectangle(0, 0, 10, 10)
# canvas.create_rectangle(10, 10, 30, 30)
# canvas.create_rectangle(30, 30, 70, 70)
#     #  0  0 10 10 // 10
#     # 10 10 30 30 // 20
#     # 30 30 70 70 // 40
#     # 70 70 120 120 // 50
#
# root.mainloop()
