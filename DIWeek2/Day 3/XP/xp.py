#1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# all = dict(zip(keys, values))
# print(all)

#2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total = 0
# for age in family.values():
#     if(age < 3 & age >= 12):
#         total += 10
#     elif(age > 12):
#         total += 15

# print(total)

#3
# brand = {
#     "name": "Zara",
#     "creation_date": 1975 ,
#     "creator_name": 'Amancio Ortega Gaona' ,
#     'type_of_clothes': ['men', 'women', 'children', 'home'],
#     'international_competitors': ['Gap', 'H&M', 'Benetton'],
#     'number_stores': 7000 ,
#     'major_color': {
#         'France': 'blue', 
#         'Spain': 'red', 
#         'US': ['pink', 'green']
#     }
# }
# brand['number_stores'] = 2
# print("Zara clients have money")
# brand['country creation'] = 'Spain'
# if(brand['international_competitors']):
#     brand['international_competitors'].append('Desigul')
# del brand['creation_date']
# print(brand['international_competitors'][-1])
# for color in brand['major_color']['US']:
#     print(color)
# amount = 0
# for pairs in brand.keys():
#     amount += 1
# print(amount)
# for keys in brand.keys():
#     print(keys)
# more_on_zara = {'creation_date': 1975, 
#     'number_stores': 10000}
# for key, value in more_on_zara.items():
#     brand[key] = value
# print(brand['number_stores'])

#4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
# new = {}
# for i, user in enumerate(users):
#     new[user] = i
# print(new)

# new = {}
# for i, user in enumerate(users):
#     new[i] = user
# print(new)

# new = {}
# users.sort()
# for i, user in enumerate(users):
#     new[user] = i
# print(new)

# new = {}
# # users.sort()
# for i, user in enumerate(users):
#     if(user[0] == 'M' or user[0] == 'P'):
#           new[user] = i
#     if("i" in user):
#             new[user] = i
# print(new)