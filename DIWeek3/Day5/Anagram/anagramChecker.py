
class AnagramChecker:

    def __init__(self, word):
        self.word = word.upper()
        with open (r"C:\Users\alewy\OneDrive\Desktop\Bootcamp\DI_Bootcamp\DIWeek3\Day5\Anagram\words.txt", "r") as my_file:
            self.words = (','.join((my_file.readlines())).replace('\n','')).split(',')
        # print(self.words[0])
    def is_valid_word(self):
            if self.word in self.words == False:
                raise Exception('This is not a word')
            return True
   
    def get_anagrams(self):
        self.is_valid_word()
        list_of_anagrams = []
        for anagram in self.words:
            if ''.join(sorted(anagram)) == ''.join(sorted(self.word)) and anagram != self.word:
                list_of_anagrams.append(anagram.lower()) 
        print(f"YOUR WORD: {self.word}\nAnagrams for your word: {','.join(list_of_anagrams)}")

        