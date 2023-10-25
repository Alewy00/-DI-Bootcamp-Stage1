
# check

def check_paran(str):
    stack_reg =[]
    stack_sqr = []
    stack_curly = []
    for char in str:
      if char == "(":
        stack_reg.append(char)
      elif char == ")": 
        if len(stack_reg) > 0 and stack_reg[-1] == "(":
           stack_reg.pop()
        else:
           return False
      elif char == "{":
        stack_curly.append(char)
      elif char == "}": 
        if len(stack_curly) > 0 and stack_curly[-1] == "{":
           stack_curly.pop()
        else:
           return False
      elif char == "[":
        stack_sqr.append(char)
      elif char == "]": 
        if len(stack_sqr) > 0 and stack_sqr[-1] == "[":
           stack_sqr.pop()
        else:
           return False
        
    if(len(stack_reg) + len(stack_curly) + len(stack_sqr)  == 0):
      return True
    else:
     return False
    

    
print(check_paran("(1 + 2) * {[(3 / 4) - 5]}"))   
print(check_paran(" [1 + 2) * (3 - 4)]"))
print(check_paran("((1 + 2)"
))          
           


