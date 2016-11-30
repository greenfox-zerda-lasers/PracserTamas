# class Tuna:
#     def __init__(self):
#         print("xy")
#     def swim(self):
#         print("I am swimming")
#
# flipper = Tuna()
# flipper.swim()

# class Enemy:
#     life = 3
#
#     def attack(self):
#         print("ouch")
#         self.life -= 1
#
#     def checkLife(self):
#         if self.life <= 0:
#             print("i am dead")
#         else:
#             print(str(self.life) + " life left")
#
# enemy1 = Enemy()
# enemy2 = Enemy()
# enemy1.attack()
# enemy1.attack()
# enemy1.checkLife()
# enemy2.checkLife()

# dinner = {"ketchup", "beer", "meet", "beer","beef", "bread"}
# print(dinner)

# def healt_calc(age, apples, cigs):
#     answer = (100-age) + (apples*2) - (cigs*10)
#     print(answer)
#
# My_datas = [32, 1, 0]
# healt_calc(*My_datas)

# def add_num(*nums):
#     total = 0
#     for x in nums:
#         total += x
#     print(total)
#
# add_num(5, 10, 6)

# x = 2
#
# def valami(num):
#     print(x+num)
# valami(4)

# def allowed_dating_age(my_age):
#     girls_age = my_age / 2 + 4
#     # print(girls_age)
#     return(girls_age)
#
# my_limit = allowed_dating_age(32)
# print("My limit is", my_limit, "or older.")
# Joes_limit = allowed_dating_age(25)
# print("Joes limit is", Joes_limit, "or older.")


# def bitcoin_to_usd(btc):
#     amount = btc * 2
#     print(amount)
#
# bitcoin_to_usd(4)

# numbersTaken = [2,10,15,18,19]
#
# print("You can use the following numbers:")
# for x in range(20):
#     if x in numbersTaken:
#         continue
#     else:
#         print(x)


# magicNum = 27
#
# for x in range(100):
#     if x is magicNum:
#         print(x, "is the magic number")
#         break
#     else:
#         print(x)

# x = 5
#
# while x < 10:
#     print(x)
    # x += 1


# for f in range(5, 12):
#     print(f)

# for f in range(10):
#     print("Wow")

# foods = ["fish", "tuna", "bread", "salami"]
# for f in foods:
#     print(f)
#     print(len(f))
