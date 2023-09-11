import math
class Pagination():
    current_page = 1
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = pageSize
        self.totalPages = math.ceil(len(items) / pageSize)
        self.current_page = 1

    def getVisibleItems(self):
            start_index = (self.pageSize * self.current_page - self.pageSize)
            end_index = start_index + self.pageSize
            i = start_index
            last_index = self.items.index(self.items[-1])
            # print(start_index)
            visible = []
            while i < end_index and i <= last_index:
                visible.append(self.items[i])
                i += 1
            print(visible)

    def nextPage(self):
         if(self.current_page < self.pageSize):
            self.current_page += 1
         return self

    def prevPage(self):
        if(self.current_page > 1):
              self.current_page -= 1
        return self

    def firstPage(self):
         self.current_page = 1
         return self
         
    
    def lastPage(self):
         self.current_page = self.totalPages
         return self

    def goToPage(self, num):
        if (num < 1 ):
              self.firstPage()
        elif(num > self.totalPages):
             self.lastPage()
        else:
             self.current_page = num
        return self
         
    


    










alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
# p.getVisibleItems()
p.nextPage().nextPage().prevPage()
# p.getVisibleItems()
p.goToPage(10)
p.getVisibleItems()
p.goToPage(-3)
p.getVisibleItems()