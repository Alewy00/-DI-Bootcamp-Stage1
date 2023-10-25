-- select * from language

-- select f.title, f.description, l.name from film as f
-- join language as l
-- on f.language_id = l.language_id

-- select f.title, f.description, l.name from film as f
-- right join language as l
-- on f.language_id = l.language_id

-- create table new_film (
-- 	id serial primary key,
-- 	name varchar(50)
-- )

-- insert into new_film(name)
-- values
-- 	('harry 1'),
-- 	('harry 2'),
-- 	('harry 3')

-- create table customer_review (
-- 	id serial primary key not null,
-- 	film_id integer not null,
-- 	language_id integer not null,
-- 	foreign key(film_id) references new_film(id) on delete cascade,
-- 	foreign key(language_id) references language(language_id),
-- 	title varchar(50),
-- 	score integer check (score > 0 and score < 11),
-- 	review_text varchar,
-- 	last_update date	
-- )

-- insert into customer_review (film_id,language_id,title,score,review_text,last_update)
-- values
-- 	(1,1,'Harry 1', 9,'Good Start!','9-20-2023')
-- 	(1,1,'Harry 2', 10,'Good Second!','9-20-2023')

-- delete from new_film where id = 1

-- update film
-- set language_id = 3
-- where film_id = 1

-- store_id, and address_id, we must make sure that the refrences are unique

-- drop table customer_review

-- no problems

-- select * from rental
-- where return_date is null

-- select r.*, amount from rental as r
-- join payment as p
-- on r.rental_id = r.rental_id
-- where return_date is null
-- order by amount desc
-- limit(30)

-- select * from film as f
-- join film_actor as fa
-- on f.film_id = fa.film_id
-- join actor as a
-- on a.actor_id = fa.actor_id
-- where f.description like '%Sumo%' and a.first_name = 'Penelope' and a.last_name = 'Monroe'

-- select * from film as f
-- join film_category as fc
-- on f.film_id = fc.film_id
-- join category as c
-- on fc.category_id = c.category_id
-- where f.length < 60 and rating = 'R' and c.name = 'Documentary'

-- select * from film as f
-- join inventory as i
-- on f.film_id = i.film_id
-- join rental as r
-- on r.inventory_id = i.inventory_id
-- join customer as c
-- on r.customer_id = c.customer_id
-- join payment as p
-- on r.rental_id = p.rental_id
-- where c.first_name = 'Matthew' and c.last_name = 'Mahan' and p.amount > 4.00 and r.return_date between '07-28-2005' and '08-1-2005'  


-- select * from film as f
-- join inventory as i
-- on f.film_id = i.film_id
-- join rental as r
-- on r.inventory_id = i.inventory_id
-- join customer as c
-- on r.customer_id = c.customer_id
-- join payment as p
-- on r.rental_id = p.rental_id
-- where c.first_name = 'Matthew' and c.last_name = 'Mahan' and p.amount > 4.00 and (f.description like '%Boat%' or f.title like '%Boat%') 
-- order by amount
-- limit(1)

-- couldn't figure out max





