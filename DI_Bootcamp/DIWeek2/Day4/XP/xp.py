# def display_message():
#     print("I am learning functions")
# display_message()

#2 

# def favorite_book(title):
#     print(f"One of my favorite books is {title}.")
# favorite_book("Harry Potter")

#3
# def describe_city(city, country="Israel"):
#     print(f"{city} is in {country}")
# describe_city("TLV")


# import random
# def rand(num):
#     new_num = random.randrange(1, 100)
#     if(new_num == num):
#         print("congrats!")
#     else:
#         print(new_num)
#         print(num)


# def make_shirt(size="Large", message="I love Python"):
#     print(f"The size of the shirt is {size} and the text is {message}")
# make_shirt("medium")
# make_shirt()
# make_shirt("medium", "Hiiiii")

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicans(magicians):
#     for name in magicians:
#         print(name)

# def make_great(names):
#     for i, name in enumerate(names):
#         name += " The Great"
#         names[i] = name

# make_great(magician_names)
# show_magicans(magician_names)

#7

# import random

# def get_random_temp(season):
#     if(season == "winter"):
#         temp = random.randrange(-10,16)
#         return temp
#     elif(season == "spring"):
#          temp = random.randrange(0,16)
#          return temp
#     elif(season =="summer"):
#          temp = random.randrange(16,40)
#          return temp
    


# print(get_random_temp())

# def main():
#     season = input("what is the season? \n")
#     temp = get_random_temp(season)
#     print(f"The temperature right now is {temp} degrees Celsius.")
#     if(temp < 0):
#         print("Brrrr is freezing, wear some extra layers")
#     elif(temp < 17):
#          print("Kinda chilly, dont forget coat")
#     elif(temp < 24):
#          print("Regular tempatures")
#     elif(temp < 33):
#          print("Pretty warm")
#     else:
#          print("Hottttt")
# main()

#8 

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def results(correct, wrong):
    print(f"You got {len(correct)} right!")
    print(f"You got {len(wrong)} wrong!")
    if(len(wrong) > 2):
        print("would you like to play agian?")

def quiz():
        correct = []
        wrong = []
        for item in data:
                answer = input(item["question"] + "\n")
                if(answer == item["answer"]):
                    correct.append(answer)
                else:
                    wrong.append(answer)
        results(correct, wrong)

quiz()
# print(data[0]["question"])


