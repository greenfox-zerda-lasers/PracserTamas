# Create a class the displays the Elevator art and navigation (list of commands)
import Task_01_model_elevator

class View():

    def draw(self, levels, actual_level, people):
        print("___________________________________")
        print("`._______________________________.'")
        if actual_level == 0:
            end = -1
        else:
            end = 0
        for i in range(levels, end, -1):
            if actual_level != i:
                print("   || ||       || ||       || ||")
            else:
                if people >= 1:
                    print("   || || [ {} ] || ||       || || ".format(people))
                else:
                    print("   || || [   ] || ||       || || ")
        if actual_level == 0 and people >= 1:
            print("  _||_||_[_{}_]_||_||_______||_||_".format(people))
        elif actual_level == 0 and people == 0:
            print("  _||_||_[___]_||_||_______||_||_")
        else:
            print("  _||_||_______||_||_______||_||_")
        print(".'_______________________________`.")

# view = View()
# view.draw(4,0,5)
