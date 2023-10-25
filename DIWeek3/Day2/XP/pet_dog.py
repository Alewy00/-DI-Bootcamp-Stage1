from xp import Dog
from random import choice
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False
    
    def train(self):
        self.bark()
        self.trained = True
    
    def play(self, *dogs):
        dog_string = ""
        for dog in dogs:
            dog_string += dog.name + " "
        print(f"{dog_string}all play together" )

    def do_a_trick(self):
        if(self.trained):
            print(f'{self.name} {choice(["does a barrel roll", "stands on his back legs","shakes your hand","plays dead"])}')




one = PetDog("one", 2, 3)
# one.bark()
# one = PetDog()
two = PetDog("two", 5, 50)
# two = PetDog()
one.play(one, two)
three = Dog("three", 7, 80)
one.do_a_trick()
one.train()
one.do_a_trick()

    

