from view import View
from map import Map
from characters import Hero
from characters import Skeletons
from characters import Boss
from random import randint


class Game_play:

    def __init__(self):
        self.view = View()
        self.map = Map()
        self.hero = Hero()
        self.view.screen(self.map.playscreen)
        self.view.draw_hero(self.hero.x, self.hero.y, "down")
        self.view.canvas.bind("<Up>", self.move_up)
        self.view.canvas.bind("<Down>", self.move_down)
        self.view.canvas.bind("<Left>", self.move_left)
        self.view.canvas.bind("<Right>", self.move_right)
        self.enemies = [Skeletons(8, 10), Skeletons(7, 5), Boss(4, 4)]
        self.view.draw_enemies(self.enemies)

    def start(self):
        self.view.show()

    def valid_move(self, cell_x, cell_y):
        if cell_x in range(0, 10) and cell_y in range(0, 11):
            if self.map.playscreen[cell_y][cell_x] == 0:
                return True
        else:
            return False

    def move_up(self, event):
        if self.valid_move(self.hero.x, self.hero.y-1):
            self.hero.move_hero(0, -1)
        self.view.draw_hero(self.hero.x, self.hero.y, "up")

    def move_down(self, event):
        if self.valid_move(self.hero.x, self.hero.y+1):
            self.hero.move_hero(0, 1)
        self.view.draw_hero(self.hero.x, self.hero.y, "down")

    def move_left(self, event):
        if self.valid_move(self.hero.x-1, self.hero.y):
            self.hero.move_hero(-1, 0)
        self.view.draw_hero(self.hero.x, self.hero.y, "left")

    def move_right(self, event):
        if self.valid_move(self.hero.x+1, self.hero.y):
            self.hero.move_hero(1, 0)
        self.view.draw_hero(self.hero.x, self.hero.y, "right")

    # def random_x_y(self):
    #     x = randint(1,10))
    #     y = randint(1, 11)
    #
    # def enemy_move(self, x, y):
    #     up = self.enemy.move_enemy(0, -1)




game = Game_play()
game.start()
