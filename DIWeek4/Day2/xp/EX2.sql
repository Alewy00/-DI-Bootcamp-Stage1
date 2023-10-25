-- select * from customer

-- select first_name, last_name 
-- from customer as full_name

-- select distinct create_date from customer

-- select * from customer
-- order by first_name desc

-- select film_id, title, description, release_year from film
-- order by rental_rate

-- select address, phone from address
-- where district = 'Texas'

-- select * from film
-- where film_id = 150 or film_id = 15

-- select film_id, title, description, length, rental_rate from film
-- where title = 'Harry Potter'

-- select film_id, title, description, length, rental_rate from film
-- where title like 'Ha%'

-- select * from film
-- order by replacement_cost 
-- limit 10


-- select * from film
-- order by replacement_cost 
-- limit 20

-- select c.first_name, c.last_name, p.amount, p.payment_date
-- from customer as c
-- join payment as p
-- on c.customer_id = p.customer_id
-- order by p.customer_id

-- select * 
-- from film as f
-- left join inventory as i
-- on f.film_id = i.film_id
-- where i.inventory_id is null

-- How do I check that I am correct? I hope this is right lol

-- select c.city, con.country 
-- from city as c
-- join country as con
-- on c.country_id = con.country_id






