from tkinter import *
from PIL import Image, ImageTk
import map

class View:
    def __init__(self):
        self.root = Tk()
        self.canvas = Canvas(self.root, width=850, height=603, background="black")
        self.canvas.focus_set()
        self.floor = self.resize("images/floor.png", 55, 55)
        self.wall = self.resize("images/wall.png", 55, 55)
        self.hero_up = self.resize("images/hero-up.png", 55, 55)
        self.hero_down = self.resize("images/hero-down.png", 55, 55)
        self.hero_left = self.resize("images/hero-left.png", 55, 55)
        self.hero_right = self.resize("images/hero-right.png", 55, 55)
        self.skeleton = self.resize("images/skeleton.png", 55, 55)
        self.boss = self.resize("images/boss.png", 55, 55)
        self.title = self.resize("images/title.jpg", 300, 480)
        self.title_image = self.resize("images/title_image.png", 220, 306)
        self.draw_image()
        self.canvas.pack()

    def resize(self, img_path, width, height):
        image = Image.open(img_path)
        resized_image = image.resize((width, height), Image.ANTIALIAS)
        return ImageTk.PhotoImage(resized_image)

    def screen(self, screen_parameters):
        for y in range(len(screen_parameters)):
            for x in range(len(screen_parameters[y])):
                if screen_parameters[y][x] == 0:
                    self.canvas.create_image(x*55,y*55, image=self.floor, anchor=NW, tag="floor")
                else:
                    self.canvas.create_image(x*55,y*55, image=self.wall, anchor=NW, tag = "wall")

    def show(self):
        self.root.mainloop()

    def draw_hero(self, x, y, direction):
        self.canvas.delete("hero")
        if direction == "up":
            self.canvas.create_image(x*55,y*55, image=self.hero_up, anchor=NW, tag="hero")
        elif direction == "down":
            self.canvas.create_image(x*55,y*55, image=self.hero_down, anchor=NW, tag="hero")
        elif direction == "left":
            self.canvas.create_image(x*55,y*55, image=self.hero_left, anchor=NW, tag="hero")
        elif direction == "right":
            self.canvas.create_image(x*55,y*55, image=self.hero_right, anchor=NW, tag="hero")

    def draw_image(self):
        self.canvas.create_image(550, 0, image=self.title, anchor=NW)
        self.canvas.create_image(590, 170, image=self.title_image, anchor=NW)

    # def draw_skeletons(self, skeletons):
    #     self.canvas.delete("skeleton")
    #     for skeleton in skeletons:
    #         self.canvas.create_image(skeleton.x*55,skeleton.y*55, image=self.skeleton, anchor=NW, tag="skeleton")
    #
    # def draw_boss(self, x, y):
    #     self.canvas.delete("boss")
    #     self.canvas.create_image(x*55,y*55, image=self.boss, anchor=NW, tag="boss")


    def draw_enemies(self, enemies):
        self.canvas.delete("skeleton", "boss")
        for enemy in enemies:
            if enemy.tag == "skeleton":
                self.canvas.create_image(enemy.x*55,enemy.y*55, image=self.skeleton, anchor=NW, tag="skeleton")
            elif enemy.tag == "boss":
                self.canvas.create_image(enemy.x*55,enemy.y*55, image=self.boss, anchor=NW, tag="boss")
