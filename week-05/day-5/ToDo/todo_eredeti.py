import ToDo_messages, sys, os, csv

class Todo():
    def __init__(self):
        path = "todo.csv"
        if not os.path.isfile(path):
            f = open(path, 'w+')
            f.write("")
            f.close()

    def read_File(self, file_name):
        f = open(file_name)
        text = f.readlines()
        f.close()
        return text

    def write_File(self, file_name, task):
        f = open(file_name, "a")
        f.write(task)
        f.close()

    def update_Nth_item(self, file_name, updated_element):
        f = open(file_name, "w")
        for i in updated_element:
            f.write(i)
        f.close()

    def main(self):
        argList = sys.argv

        if len(argList) == 1:
            print(ToDo_messages.welcome["com_line"])

        elif len(argList) == 2:
            if argList[1] == "-l":
                read = self.read_File("todo.csv")
                if len(read) > 0:
                    for i in range(len(read)):
                        print(i+1 , " - ", read[i].rstrip())
                else:
                    print("No todos for today!")

            elif argList[1] == "-a":
                print("Unable to add: No task is provided")

            elif argList[1] == "-r":
                print("Unable to remove: No index is provided")

            elif argList[1] == "-c":
                print("Unable to check: No index is provided")

            else:
                print("Unsupported argument")
                print(ToDo_messages.welcome["com_line"])

        elif len(argList) == 3:
            if argList[1] == "-a":
                self.write_File("todo.csv", "[ ] "+(argList[2]+"\n"))

            elif argList[1] == "-r":
                try:
                    read = self.read_File("todo.csv")
                    del read[int(argList[2])-1]
                    self.update_Nth_item("todo.csv", read)
                except IndexError:
                    print("Unable to remove: Index is out of bound")
                except ValueError:
                    print("Unable to remove: Index is not a number")

            elif argList[1] == "-c":
                try:
                    read = self.read_File("todo.csv") # A read egy tömb lesz, aminek az elemei az egyes sorok
                    selected = read[int(argList[2])-1] # A selected változóhoz hozzárendeljük a kiválasztott tömb elemet
                    if selected[:3] == "[ ]":
                        selected = "[X]" + selected[3:] # A selected[3:] 3-tól felfelé megőrzi az értéket, és eléje beilleszti a [X]-t
                        read[int(argList[2])-1] = selected # Az új selected érétkét visszarakom a read tömb kiválasztott elemébe
                    else:
                        input1 = input("That task has been completed, are you sure you want to uncheck it? (y/n)")
                        if (input1).lower() == "y":
                            selected = "[ ]" + selected[3:]
                            read[int(argList[2])-1] = selected
                    self.update_Nth_item("todo.csv", read)
                except IndexError:
                    print("Unable to check: Index is out of bound")
                except ValueError:
                    print("Unable to check: Index is not a number")

one = Todo()
one.main()
