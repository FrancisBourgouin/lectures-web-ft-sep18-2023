
SELECT 
  jokes.id, jokes.question, jokes.answer, jokes.rating, jokes.author_id AS "authorId",
  authors.name AS author, authors.description AS "authorDescription"
FROM jokes 
JOIN authors 
ON authors.id = jokes.author_id;