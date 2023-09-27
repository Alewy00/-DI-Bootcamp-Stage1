import psycopg2

# 1. Connect to the database

# DB_NAME = "public"
# USER = "postgres" 
# PASSWORD = "postgres" 
# HOST = "localhost"
# PORT = "5432" # or 5433

# connection = psycopg2.connect(
#     dbname = DB_NAME,
#     user = USER,
#     password = PASSWORD,
#     host = HOST,
#     port = PORT
# )

# cursor = connection.cursor()

# def create_table(table_name: str):

#     query = f'''
#             create table {table_name}(
#             id serial primary key,
#             num integer not null
#     );'''
#     cursor.execute(query)
#     connection.commit()

# table_name ="new_table"
# create_table(table_name)
