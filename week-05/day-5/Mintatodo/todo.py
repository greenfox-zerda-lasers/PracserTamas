from todo_utils import *
import sys


def main():
    argList = sys.argv
    input_file = "todo.txt"

    if len(argList) == 1:
        todo_utils().welcome()

    elif argList[-1] == '-l':
        todo_utils().listToDos(input_file)

    elif len(argList) == 3:

        if argList[1] =='-a':
            todo_utils().appendTask(input_file, (argList[2]+"\n"))

        elif argList[1] =='-r':
            todo_utils().removeNthAndExceptions(input_file, argList)

        elif argList[1] =='-c':
            todo_utils().checkUncheck(input_file, argList)

    elif argList[-1] == '-a':
        todo_utils().unableToAdd()

    elif argList[-1] =='-r':
        todo_utils().unableToRemove()

    elif argList[-1] == '-c':
        todo_utils().unableToCheck()

    else:
        todo_utils().unsupportedArg()

main()
