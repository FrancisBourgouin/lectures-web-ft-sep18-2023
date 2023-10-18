// Callbacks! Used by HOFs
// HOF is a function that takes in a function as a param
// HOF is a function that returns a function definition

const generateJokeHelpers = (client) => {
  const fetchAll = () => {
    const queryString = `
    SELECT 
    jokes.id, jokes.question, jokes.answer, jokes.rating, jokes.author_id AS "authorId",
    authors.name AS author, authors.description AS "authorDescription"
    FROM jokes 
    JOIN authors 
    ON authors.id = jokes.author_id
    `;

    return client.query(queryString).then((result) => result.rows);
  };

  const fetchById = (id) => {
    const queryString = `
    SELECT 
    jokes.id, jokes.question, jokes.answer, jokes.rating, jokes.author_id AS "authorId",
    authors.name AS author, authors.description AS "authorDescription"
  FROM jokes 
  JOIN authors 
  ON authors.id = jokes.author_id
  WHERE jokes.id = $1
  `;
    const queryArgs = [id];

    return client.query(queryString, queryArgs).then((result) => result.rows[0]);
  };

  const insert = (question, answer, rating, authorId) => {
    const queryString = `
  INSERT INTO jokes 
  (question, answer, rating, author_id)
  VALUES
  ($1, $2, $3, $4)
  RETURNING *
  `;
    const queryArgs = [question, answer, rating, authorId];

    return client.query(queryString, queryArgs).then((result) => result.rows[0]);
  };

  return { fetchAll, fetchById, insert };
};

const generateAuthorHelpers = (client) => {
  const fetchAll = () => {
    const queryString = `
  SELECT 
    *
  FROM authors
  `;

    return client.query(queryString).then((result) => result.rows);
  };

  return { fetchAll };
};
module.exports = { generateJokeHelpers, generateAuthorHelpers };
