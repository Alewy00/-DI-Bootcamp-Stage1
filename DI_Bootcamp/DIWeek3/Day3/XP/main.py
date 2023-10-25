class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount


    def __str__(self):
        return f'{self.amount} {self.currency}'
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
             return  f'{self.amount} + {self.currency}'

    def __add__(self, other):
        if(isinstance(other, Currency) and self.currency != other.currency):
               raise TypeError(f"cant add between {self.currency} and {other.currency}")
        return self.amount + int(other)

    def __iadd__(self, other):
        self.amount = (self + other)
        return self





c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# str(c1)
# print(c1)
# c1 += 5
# c1 += c2
# print(c1)
# c1 + c3

import random

def randomNum(num):
     randnum = random.randrange(1,100)
     if(num == randnum):
          print("success")

randomNum(1)

import string

def randString():
    final = ""
    for letter in range(0,5):
          rand = random.randrange(0,25)
          final += string.ascii_letters[rand]
    print(final)

# randString()

import datetime

def current_date():
    print(datetime.datetime.now())

current_date()