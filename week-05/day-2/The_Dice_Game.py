from random import randint
import Dice_Text

class Game:
    def __init__(self):
        self.name = input(Dice_Text.intro["game_intro"])
        self.yes_or_no = input(Dice_Text.intro["greet"].format(self.name))
        self.play() # Ezzel meghivom a play() methodot

    def play(self):
        if self.yes_or_no == "y":
            self.rounds(self.yes_or_no) # Ezzel meghivom a rounds() methodot
        else:
            print(Dice_Text.intro["bye"].format(self.name))

    def rounds(self, answer):
        players_score = 0
        dealers_score = 0
        while answer == "y":
            players_number = self.rolling()
            dealers_number = self.rolling()
            print(Dice_Text.loop["player_num"].format(players_number)) # Ezzel meghivom a rolling() methodot
            print(Dice_Text.loop["dealer_num"].format(dealers_number))
            if dealers_number > players_number:
                print(Dice_Text.loop["dealer_won"])
                dealers_score += 1
            elif players_number > dealers_number:
                print(Dice_Text.loop["player_won"].format(self.name))
                players_score += 1
            else:
                print(Dice_Text.loop["draw"])
            answer = input(Dice_Text.loop["question"])

        if dealers_score > players_score:
            print(Dice_Text.endgame["dealer_won_end"].format(dealers_score, players_score, self.name))
        elif dealers_score < players_score:
            print(Dice_Text.endgame["player_won_end"].format(dealers_score, players_score, self.name))
        else:
            print(Dice_Text.endgame["draw_end"].format(dealers_score))

    def rolling(self):
        return(randint(1,6))

game1 = Game()
