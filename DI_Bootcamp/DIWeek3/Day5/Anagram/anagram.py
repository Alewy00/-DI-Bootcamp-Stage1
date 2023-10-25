import anagramChecker

def get_the_input():
    while True:
        word = (input('Give me the word or type "exit" to quit: ').strip())
        if word == 'exit':
            break
        elif len(word.split()) > 1:
            print('I can take just one word in a time')
            continue
        elif word.isalpha() == False:
            print('I can understand only words')
            continue
        else:
            break
    return anagramChecker.AnagramChecker(word)

ana = get_the_input()

ana.is_valid_word()
ana.get_anagrams()