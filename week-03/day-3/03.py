# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise
class Pirate():
    alcohol = 0

    def drink_rum(self, time):
        self.alcohol = self.alcohol + time
        return self.alcohol

    def hows_goin_mate(self):
        if self.alcohol >= 5:
            return "Arrrr!"
        else:
            return "Nothin`"

drink = Pirate()
print(drink.drink_rum(4))
print(drink.hows_goin_mate())
