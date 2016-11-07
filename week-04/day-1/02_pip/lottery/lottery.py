# Create a method that returns the five most frequent lottery number in a pretty table format
import csv

def five_most_frequent():
        lotto = open("d:/greenfox/pracsertamas/week-04/day-1/02_pip/lottery/otos.csv")
        lines = csv.reader(lotto, delimiter = ";")
        numbers = []
        for row in lines:
            print(row[len(row)-1])

#         numbers = ()
#         for line in lines:
#             numbers += []
#
#
print(five_most_frequent())
