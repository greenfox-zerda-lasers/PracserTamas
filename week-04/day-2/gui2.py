from tkinter import*

root = Tk()
theLabel = Label(root, text="Hello Prácsi. MIZU? Semmizu? Jó kis ablak ez, mi?")
theLabel.pack()

canvas = Canvas(root, width=200, height=100)
canvas.pack()
x = 0
while x < 80000:
    blackLine = canvas.create_line(x,0,200,50)
    x += 10

redLine = canvas.create_line(0,100,200,50, fill = "red")
greenBox = canvas.create_rectangle(0,30,100,60, fill = "green")
blueBox = canvas.create_rectangle(200,310,10,60, fill = "blue")

canvas.delete(blueBox)

root.mainloop()
