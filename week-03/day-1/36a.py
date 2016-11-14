ah = [3, 4, 5, 6, 7]
# print the sum of all numbers in ah

# print(sum(ah))

summa = 0
x = 0
while x < len(ah):
    # summa = ah[x] + summa
    summa += ah[x]  # Ez ugyanaz, mint a 9. sor
    x += 1
print(summa)
