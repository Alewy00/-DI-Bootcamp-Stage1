class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True
    all_cats = []
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Cat.all_cats.append(self)

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat): 
      def sing(self, sounds):
        return f'{sounds}'
# sam = Siamese("sam",1)
# charles = Chartreux("charles",1)     
# bae = Bengal("bae",1)
# saras_pets = Pets(Cat.all_cats)
# saras_pets.walk()

class Dog:

    def __init__(self, name, age, weight):
        self.name = name
        self.weight = weight
        self.age = age

    def bark(self):
        print(f"{self.name} is barking")

    def run_speed(self):
        return (self.weight / self.age) * 10
    
    def fight(self, other_dog):
        if (other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight):
            return f"{other_dog.name} is the winner"
        else:
            return f"{self.name} is the winner"
one = Dog("one", 1, 30)
two = Dog("two", 5, 50)
three = Dog("three", 7, 80)
# print(one.fight(two))
# print(two.fight(three))
# print(three.fight(one))
         
         
