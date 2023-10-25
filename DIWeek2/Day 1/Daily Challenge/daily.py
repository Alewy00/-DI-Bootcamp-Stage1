import random
string = input("Enter a string")
len = len(string)
if(len == 10):
    print("A perfect string \n")
    print(f"{string[0]} {string[-1]} \n")
    for x in string:
        print(x)
        
    print("Shuffled \n")
    list = list(string)
    random.shuffle(list)
    print (''.join(list))
    
    

elif(len < 10):
      print("That string is too short")
else:
     print("That string is too long")
