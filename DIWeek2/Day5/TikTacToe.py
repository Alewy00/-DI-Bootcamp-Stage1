board = ['      ', "|       |", "      "],["      ", "|       |", "     "],["      ", "|       |", "      "]
current_player = "X"
turns_played = 0

def play(): 
    player_input("X", turns_played)


def display_board(board):
    print("     Col 1   Col 2   Col 3 ")
    print("                     ")
    for i, row in enumerate(board):
        print(f"Row{i + 1}:" + "".join(row))
        if(i != 2):
            print("     _ _ _ | _ _ _ | _ _ _")
        
    



def check_win(player): 
    for i, row in enumerate(board):
        if(player in row[0] and player in row[1] and player in row[2]):
            print("Row Win!")
            return True
        elif(player in board[0][i] and player in board[1][i] and player in board[2][i]):
            print("Col win")
            return True
    
    if(player in board[1][1] and player in board[0][0] and player in board[2][2]):
            print("Diagonal win")
            return True
    elif(player in board[1][1] and player in board[0][2] and player in board[2][0]):
          print("Diagonal win")
          return True
    return False



def player_input(player, turns_played):
    if (player == "X"):
        token = "X"
    else: 
        token = "O"
    print(f"Turn number: {turns_played + 1}")
    print(f"Player {token}'s turn! ")

    if(turns_played == 0):
        display_board(board)

    row = int(input("Which row? \n")) - 1
    col = int(input("Which column? \n")) - 1

    if("X"  in board[row][col] or "O" in board[row][col]):
        print("Someone already went there! Choose a different spot")
        player_input(player, turns_played)
    if (col == 1):
        board[row][col] = f"|   {token}   |"
    else:
        board[row][col] = f"  {token}   " 

    turns_played += 1
    if(check_win(player)):
        print(f"Game over - Player {token} Wins!")
        display_board(board)
    elif(turns_played == 9):
        print("Game over - Draw")
        display_board(board)
    else:
        if (player == "X"):
            player = "O"
        else:
            player = "X"
        display_board(board)
        player_input(player, turns_played)

play()

