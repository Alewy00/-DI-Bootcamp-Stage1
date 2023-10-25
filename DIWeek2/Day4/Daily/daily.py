matrix = [['7ii'],
    ['Tsx'],
    ['h%?'],
    ['i #'],
    ['sM '],
    ['$a '],
    ['#t%'],
    ['^r!']]
new1 = []
new2 = []
new3 = []
for part in matrix:
    for str in part:
        if(str[0].isalpha()):
            new1.append(str[0])
        else:
            new1.append(str[0])
        if(str[1].isalpha()):
           new2.append(str[1])
        else:
            new2.append(str[2])
        if(str[2].isalpha()):
            new3.append(str[2])
        else:
            new3.append(str[2])
        
final = new1 + new2 + new3
i = 0
last = ''
for letter in final:
    if(letter.isalpha() == False and (last.isalpha() == True)):
        final[i] = " "
    elif(letter.isalpha() == False):
        final[i] = ""
    i += 1
    last = letter
new = ''
new = new.join(final)
print(new)