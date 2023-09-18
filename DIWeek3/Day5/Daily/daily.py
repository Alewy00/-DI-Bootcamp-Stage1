import random

class Card:
    info = {
    'Suits': ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    'Cards' : ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    }

class DeckOfCards:

    def __init__(self, deck):
        if isinstance(deck, Card) == False:
            raise Exception("Deck should be a card")
        else:
            self.deck = deck

    def shuffle(self):
        shuffle_deck = []
        if isinstance(self.deck, Card) == False:
            raise Exception('Deck should be a Card class')
        else:
            for key in self.deck.info['Suits']:
                random.shuffle(self.deck.info['Cards'])
                for value in self.deck.info['Cards']:
                    shuffle_deck.append(f'{key}:{value}')
            random.shuffle(shuffle_deck)
            return shuffle_deck
        
    def deal(self):
        my_list = self.shuffle()
        card = random.choice(my_list)
        print(card)
        my_list.remove(card)

card = Card()
d = DeckOfCards(card)

d.shuffle()
d.deal()