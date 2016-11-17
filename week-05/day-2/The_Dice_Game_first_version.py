from random import randint

class Game:
    def __init__(self):
        self.name = input(">>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<\n" ">>>>>>>>                                       <<<<<<<<<\n" ">>>>>>>>>>>   Welcome to the Dice Casino!   <<<<<<<<<<<<\n" ">>>>>>>>                                       <<<<<<<<<\n" ">>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<\n\n" "What's your name? ")
        self.yes_or_no = input ("\nNice to meet you " + self.name + "!\n " "Do you want to play?\n " "\nYes? Press: y  No? Press: n \nHERE ==> ")
        self.play() # Ezzel meghivom a play() methodot

    def play(self):
        if self.yes_or_no == "y":
            self.rounds(self.yes_or_no) # Ezzel meghivom a rounds() methodot
        else:
            print("Maybe later, " + self.name + "!")

    def rounds(self, answer):
        players_score = 0
        dealers_score = 0
        while answer == "y":
            players_number = self.rolling()
            dealers_number = self.rolling()
            print("\nYour number is: " , players_number) # Ezzel meghivom a rolling() methodot
            print("The Dealer's number is: " , dealers_number)
            if dealers_number > players_number:
                print("\n>>> The Dealer won this round!")
                dealers_score += 1
            elif players_number > dealers_number:
                print("\n>>> ", self.name, "won this round!")
                players_score += 1
            else:
                print("\n>>> The play is draw!")
            answer = input("\n   Do you want to roll once more? ")

        if dealers_score > players_score:
            print("\nSorry, this time the Bank won the Game!\n   The Bank won ", dealers_score, " rounds.\n   You won only ", players_score, " rounds.\nMaybe next time, " + self.name + "!")
        elif dealers_score < players_score:
            print("\nCongratulation, You are the winner!\n   The Bank won ", dealers_score, " rounds.\n   You won ", players_score, " rounds.\nSee you next time, " + self.name + "!")
        else:
            print("\nThe Game is draw. Both of us won ", dealers_score, " times.")

    def rolling(self):
        return(randint(1,6))

game1 = Game()
