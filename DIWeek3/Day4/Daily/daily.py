class Text:
    def __init__(self, text):
        self.text = text
        self.allFreq = self.allFreq()


    def allFreq(self):
        print("hit")
        dict_word = {}
        list_word = self.text.split(" ")
        for word in list_word:
            dict_word[word] = list_word.count(word)
        return dict_word

    def getWordFreq(self, word):
        if word in self.allFreq:
            return f"the {word} appears {self.allFreq[word]}"
        else:
            return None
        
    def mostCommon(self):
        values = self.allFreq.values()
        common = []
        max_val = max(values)
        for word in self.allFreq:
            if self.allFreq[word] == max_val:
                common.append(word)
        return common

    def uniqueWords(self):
        unique = []
        print(self.allFreq)
        for word in self.allFreq:
            if self.allFreq[word] == 1:
                unique.append(word)
        return unique
    
    @classmethod
    def fromFile(cls):
        with open("DIWeek3\Day4\Daily\stranger.txt", "r") as file:
            return cls(file.read())

file = Text.fromFile()
print(file.uniqueWords())




