from Task_01_model_elevator import Elevator
from Task_01_view_elevator import View
import os

class Elavator_controller:

    def __init__(self):
        self.model = Elevator()
        self.view = View()

    def add_people(self):
        try:
            self.model.add_people()
        except ValueError:
            print("Sorry, the elevator is full already.")

    def remove_people(self):
        try:
            self.model.remove_people()
        except ValueError:
            print("No more people in the elevator.")

    def move_up(self):
        try:
            self.model.move_up()
        except ValueError:
            print("No more leveles.")

    def move_down(self):
        try:
            self.model.move_down()
        except ValueError:
            print("You are on the ground floor.")

    def handle_input(self):
        command = "p"
        while command != "q":
            os.system('cls' if os.name == 'nt' else 'clear')
            self.view.draw(self.model.max_level, self.model.position, self.model.people)
            command = input("Please tell me, what should I do!")
            if command == "w":
                self.move_up()
            if command == "s":
                self.move_down()
            if command == "a":
                self.remove_people()
            if command == "d":
                self.add_people()


control = Elavator_controller()
control.handle_input()
