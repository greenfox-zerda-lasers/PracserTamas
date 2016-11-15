from random import randint

class Game:

    def play(self):
        count = 0
        name = input("What's your name? ")
        yes_or_no = input ("Nice to meet you " + name + "! " "Do you want to play? " "Yes? Press: y  No? Press: n HERE ==> ")
        if yes_or_no == "y":
            print("Your number is: " , self.rolling())
            count += self.rolling()
            yes_or_no = input("Do you want to roll once more? ")
            while yes_or_no == "y":
                    print("Your number is: " , self.rolling())
                    count += self.rolling()
                    yes_or_no = input("Do you want to roll once more? ")
        print("Maybe later, " + name + "!")

    def rolling(self):
        return(randint(1,6))

game1 = Game()
game1.play()
