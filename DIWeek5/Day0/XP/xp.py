# #Snippet 1



# for i in range(10):
#     print(i)

#  0(1)


# Snippet 2

# for i in range(n):
#     for j in range(n):
#         print(i, j)

# 0(n)

# Snippet 3



# i = 1
# while i < n:
#     i *= 2
#     print(i)

# log(n)

numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list) -> None:
  i = 1
  while i < len(numbers) :
      prev = numbers[i - 1]
      current =  numbers[i]
      if(prev > current):
         numbers[i] = prev
         numbers[i - 1] = current
        #  Check to make sure that this isnt the first index
         if(i > 1): 
            i -= 1
      else:
       i += 1
   

# insertion_sort(numbers)
# print(numbers)


numbers = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int) -> int:
   low = 0
   high = len(numbers) -1
   while(low <= high):
    mid = round((high + low) / 2)
    if numbers[mid] == value:
        return mid
    elif numbers[mid] > value:
       high = mid - 1
    elif numbers[mid] < value:
       low = mid + 1
      
   

print(binary_search(numbers, 7))