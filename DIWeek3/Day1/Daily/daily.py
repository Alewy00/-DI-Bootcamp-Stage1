
class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, num = 1):
        if animal in self.animals:
            self.animals[animal] += num
        else:
            self.animals[animal] = num

    def get_animals(self):
        for animal, num in self.animals.items():
            print(f" {animal}: {num}")
            
    def get_info(self):
        print(f" {self.name}'s Farm:")
        self.get_animals()
        print("E-I-E-I-O")
    
    def get_animal_types(self):
        types = []
        for type in self.animals.keys():
            types.append(type)
        types.sort()
        return types
    

    def get_short_info(self):
        types = self.get_animal_types()
        for i, word in enumerate(types):
            if word != "sheep":
                word += "s"
                types[i] = word
        final_word = types[-1]
        types[-1] = "and " + final_word
        types_string = ", ".join(types)
        print(f" {self.name}'s Farm has {types_string}")

    
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
# macdonald.get_info()  
macdonald.get_short_info() 
            
    