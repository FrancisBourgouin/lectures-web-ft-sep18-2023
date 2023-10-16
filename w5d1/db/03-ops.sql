-- Basic SELECT

-- SELECT * FROM jokes;

SELECT question, answer FROM jokes;

SELECT jokes.question, jokes.answer FROM jokes;

SELECT question AS joke_start, answer AS joke_finish FROM jokes;


-- Single WHERE clause

-- SELECT * 
-- FROM jokes 
-- WHERE rating = 1;


SELECT * FROM jokes WHERE rating > 3;

SELECT * FROM jokes WHERE question LIKE 'What%';


SELECT * FROM jokes WHERE question LIKE '% a %';




-- Multiple WHERE clauses

SELECT * FROM jokes WHERE question LIKE '% a %' AND answer LIKE 'A%'; -- Case sensitive

SELECT * FROM jokes WHERE question LIKE '% a %' AND LOWER(answer) LIKE 'a%'; -- Lower case everything

SELECT * FROM jokes WHERE question LIKE '% a %' AND answer ILIKE 'a%'; -- Lower case everything



-- Ordering results

SELECT * FROM jokes ORDER BY question ASC;
SELECT * FROM jokes ORDER BY question DESC;

SELECT * FROM jokes WHERE question ILIKE 'w%' ORDER BY question LIMIT 2;

-- Joining tables

SELECT *
FROM jokes 
LEFT JOIN authors
ON authors.id = jokes.author_id;

SELECT *
FROM authors 
RIGHT JOIN jokes
ON authors.id = jokes.author_id;


SELECT 
  jokes.id, jokes.question, jokes.answer, jokes.rating, jokes.author_id AS "authorId",
  authors.name, authors.funny, authors.description
FROM jokes 
LEFT JOIN authors
ON authors.id = jokes.author_id;


-- DEPENDS!



-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT AVG(rating) AS average_rating_for_jokes FROM jokes;

SELECT author_id, AVG(rating) AS average_rating_for_jokes FROM jokes GROUP BY author_id;


SELECT * FROM jokes HAVING AVG(rating) < rating;

-- SHOW the jokes of authors having an average of 4 and more in their jokes



-- Nested selects

SELECT * 
FROM jokes 
WHERE rating > (
  SELECT AVG(rating) AS average_rating_for_jokes FROM jokes
);


SELECT * 
FROM jokes
WHERE author_id IN (1,2,3); 


SELECT author_id FROM jokes GROUP BY author_id HAVING AVG(rating) > 4;


SELECT *
FROM jokes
WHERE author_id IN (
  SELECT author_id 
  FROM jokes 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
);


-- Views (stretch)
-- Essentially a read-only table


CREATE VIEW cool_jokes AS (
  SELECT *
  FROM jokes
  WHERE author_id IN (
    SELECT author_id 
    FROM jokes 
    GROUP BY author_id 
    HAVING AVG(rating) > 4
  )
);

