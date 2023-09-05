# word = input("what is the word? \n")
# dic = {}
# for i, letter in enumerate(word):
#     if(letter not in dic):
#         dic[letter] = []
#     dic[letter].append(i)
# print(dic)

#2

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"
# list = []
# wallet = wallet.replace('$', '')
# wallet = int(wallet)
# for k,v in items_purchase.items():
        
#         v = (v.replace('$', ''))
#         v = (v.replace(',', ''))
#         v = int(v)
#         if(wallet >= v):
#                 list.append(k)

# list.sort()
# print(list)

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }


wallet = "$100" 



items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

list = []
wallet = wallet.replace('$', '')
wallet = int(wallet)
for k,v in items_purchase.items():
        
        v = (v.replace('$', ''))
        v = (v.replace(',', ''))
        v = int(v)
        if(wallet >= v):
                list.append(k)

list.sort()
if(list == []):
        print("Nothing")
else:
       print(list)

