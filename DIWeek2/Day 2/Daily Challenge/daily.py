
# input = input("Please enter a number and length seperated by a space \n")
# array = input.split(" ")
# num = int(array[0])
# length = int(array[1])
# output = []
# i = 1
# while i <= length:
#         output.append(num * i)
#         i += 1
# print(output)        



input = input("Please enter a word \n")
x = 0
new = ""
output = []
last = ""
for i in input:
    if(i != last):
        new += i
    last = i

print(new)

