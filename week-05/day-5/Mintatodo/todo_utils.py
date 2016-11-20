class todo_utils:
    def welcome(self):
        print ("Python Todo application")
        print ("=======================")
        print ("")
        print ("Command line arguments:")
        print (" -l   Lists all the tasks")
        print (" -a   Adds a new task")
        print (" -r   Removes a task")
        print (" -c   Completes a task")

    def readFile(self, file_name):
        self.f = open(file_name)
        result = self.f.readlines()
        self.f.close()
        return result

    def printList(self,file_name):
        self.todo_list = self.readFile(file_name)
        for i in range(int(len(self.todo_list)/2)):
            theTask = self.todo_list[i*2+1].strip()
            if self.todo_list[i*2+0] == "false\n":
                print (str(i+1) + " - " + "[ ] " + theTask)
            else:
                print (str(i+1) + " - " + "[X] " + theTask)

    def appendTask(self, file_name, task):
        self.f = open(file_name, 'a')
        self.f.write("false\n")
        self.f.write(task)
        self.f.close()
        todo_utils().listToDos(file_name)

    def listToDos(self,file_name):
        try:
            if len(self.readFile(file_name)) > 0:
                self.printList(file_name)
            else:
                print ("No todos for today! :)")
        except FileNotFoundError:
            self.fileNotFound(file_name)

    def fileNotFound(self, file_name):
        self.f = open(file_name, "w")
        self.f.write("")
        self.f.close()

    def unableToAdd(self):
        print ("Unable to add: No task is provided")

    def override(self, file_name, list1):
        f = open(file_name, 'w')
        for i in list1:
            f.write(i)
        f.write("")
        f.close()

    def removeNthItem(self,file_name, args):
        self.todo_list = self.readFile(file_name)
        del self.todo_list[int(args[2])-1]
        self.override(file_name, self.todo_list)

    def unableToRemove(self):
        print ("Unable to remove: No index is provided")

    def removeNthAndExceptions(self,file_name, args):
        try:
            self.removeNthItem(file_name, args)
        except IndexError:
            print("Unable to remove: Index is out of bound")
        except ValueError:
            print("Unable to remove: Index is not a number")
        except FileNotFoundError:
            self.fileNotFound(file_name)

    def unsupportedArg(self):
        print ("Unsupported argument\n")
        self.welcome()

    def checkUncheck(self, file_name, args):
        try:
            self.listOfRecords = todo_utils().readFile(file_name)
            if self.listOfRecords[(int(args[2])-1)*2] == "false\n":
                self.listOfRecords[(int(args[2])-1)*2] = "true\n"
            elif self.listOfRecords[(int(args[2])-1)*2] == "true\n":
                input1 = input("That task has been completed, are you sure you want to uncheck it? (y/n)")
                if (input1).lower() == "y":
                    self.listOfRecords[(int(args[2])-1)*2] = "false\n"
                else:
                    pass
            todo_utils().override(file_name, self.listOfRecords)
            new = todo_utils().readFile(file_name)
            todo_utils().listToDos(file_name)
        except IndexError:
            print("Unable to check: Index is out of bound")
        except ValueError:
            print("Unable to check: Index is not a number")

    def unableToCheck(self):
        print ("Unable to check: No index is provided")
