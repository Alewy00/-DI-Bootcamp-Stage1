from executor import Executor

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.table_name = 'Menu_Items'

    def save(self):
        query = f"insert into {self.table_name}(name, price) values ('{self.name}','{self.price}');"
        # print(self.name)
        Executor.run_commit(query)
        return query
    
    def delete(self):
        query = f"delete from {self.table_name} where name = '{self.name}' and price = {self.price}"
        Executor.run_commit(query)
        return query 
    
    def update(self, new_name = "", new_price = ""):
        n_name = new_name if new_name != "" else self.name
        n_price = new_price if new_price != "" else self.price
        query = f"update {self.table_name} set name='{n_name}', price={n_price} where "
        query += f"name='{self.name}' and price={self.price}"
        Executor.run_commit(query)
        return query
    
    

if __name__ == '__main__':
    item = MenuItem('Falafel', 5)
    item.save()
    # item.update(new_name='BurgerXL')
    # print(item.update(new_price=15))
    # item.delete()