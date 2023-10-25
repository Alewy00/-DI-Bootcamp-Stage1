import os # operating system

#creating a variable that stores the path of the current file

#using the variable to open the file (using raw string)
# with open(dir_path + r"\\words.txt", "r") as f:
#     words = f.readlines()
#     print(words)
def get_words_from_file():
    path = r"C:\Users\alewy\OneDrive\Desktop\Bootcamp\DI_Bootcamp\DIWeek3\Day4\XP\sowpods.txt"
    dir_path = os.path.dirname(os.path.realpath("sowpods.txt")) # doesnt work
    # print("path is" + dir_path)
    with open(path, "r") as file:
        new_file = file.readlines() 
        # print(new_file)
    return new_file

# get_words_from_file()
import random
def random_sent(length):
       sent = []
       for i in range(length):
          i = random.choice(get_words_from_file())
          sent.append(i.lower())
       print(' '.join(sent).replace('\n', ''))

def main():
    print("insructions")
    sent_length = input("length of sent")
    # try:
    if(sent_length.isalpha()):
        raise TypeError("needs to be number")
    if(int(sent_length) <= 1 or int(sent_length) >= 21 ):
        raise ValueError("Not proper size")
    else:
        print("good")
        word = random_sent(int(sent_length))
        # print(word)
    # except TypeError as error:
    #     print("type error")
    #     # main()
    # except ValueError as error:
    #     print(error)
        # main()


main()