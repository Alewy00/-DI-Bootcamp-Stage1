class Cat:
    cats = []
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
        Cat.add_cat_list(self)
        

    def oldest_cat():
        oldest = Cat.cats[0]
        for cat in Cat.cats:
            if cat.age > oldest.age:
                oldest = cat
        return oldest



    def add_cat_list(cat):
        Cat.cats.append(cat)
    

cat1 = Cat("one",1)
cat2 = Cat("two",2)
cat3 = Cat("three",3)
# oldest = Cat.oldest_cat()
# print(f" The oldest cat is {oldest.age} years old and the cats name is {oldest.name} ")


class Dog:

    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes WOOF")

    def jump(self):
         print(f"{self.name} jumps {self.height * 2} cm high")
         
    def info(self):
         print(f"the dogs name is {self.name} and its height is {self.height} cm")
 
# davids_dog = Dog("Rex", 50)
# davids_dog.info()
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)
# sarahs_dog.info()
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print (davids_dog.name)
# else:
#     print (sarahs_dog.name)

class Song:
 
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_a_song(self):
        for words in self.lyrics:
            print(words)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"]) 
# stairway.sing_a_song()  

class Zoo:
    def __init__(self, ramat_gan_zoo_name):
        self.animals = []
        self.name = ramat_gan_zoo_name

    def add_animal(self, animal):
        if animal not in self.animals:
            self.animals.append(animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)
        if self.animals == []:
            print("no animals")

    def sell_animal(self, animal):
        if animal in self.animals:
            self.animals.remove(animal)
        else:
            print("you dont own that animal")
    
    def sort_animals(self):
        sorted = {}
        group_num = 0
        self.animals.sort()
        last_letter = ""
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter != last_letter:
                group_num += 1
            if group_num not in sorted:
                sorted[group_num] = [animal]
            else:
                sorted[group_num].append(animal)
            last_letter = animal[0]
        return sorted
            
    def get_groups(self):
        animals = self.sort_animals()
        for group in animals.values():
            print(" ".join(group))

    

ramat_gan_zoo = Zoo("ramat_gan_zootopia")
ramat_gan_zoo.add_animal("dog")
ramat_gan_zoo.add_animal("Ape")
ramat_gan_zoo.add_animal("doggo")
ramat_gan_zoo.add_animal("doggos")
ramat_gan_zoo.add_animal("gorilla")
ramat_gan_zoo.add_animal("giraffe")
# ramat_gan_zoo.get_animals()
# ramat_gan_zoo.sort_animals()
ramat_gan_zoo.get_groups()

