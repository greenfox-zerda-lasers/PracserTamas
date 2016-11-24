from tkinter import *
from PIL import Image, ImageTk

class Hero:
    def __init__(self):
        self.x = 0
        self.y = 0

    def move_hero(self, x, y):
        self.x = self.x + x
        self.y = self.y + y

class Skeletons:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.tag = "skeleton"

    def move_skeleton(self, x, y):
        self.x = self.x + x
        self.y = self.y + y

class Boss:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.tag = "boss"

    def move_boss(self, x, y):
        self.x = self.x + x
        self.y = self.y + y
