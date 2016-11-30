# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

class Pirate():
    total_rum = 0

    def drink_rum(self, alcohol):
        if alcohol >= 1:
            self.total_rum += 1
            return self.total_rum

    def hows_goin_mate(self):
        if self.total_rum >= 5:
            print("Arrrr!")
        else:
            print("Nothin'")

pub = Pirate()
pub.drink_rum(1)
pub.drink_rum(1)
pub.drink_rum(1)
pub.drink_rum(1)
pub.drink_rum(1)

pub.hows_goin_mate()
