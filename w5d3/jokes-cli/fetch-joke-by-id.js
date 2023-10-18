const { Client } = require("pg");

const client = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "sept_jokes",
  port: 5432,
});

const fetchJokeById = (id) => {
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

const showJoke = (jokeObj) => {
  console.log("******************");
  console.log(`Question: ${jokeObj.question}`);
  console.log(`Answer: ${jokeObj.answer}`);
  console.log(`Author: ${jokeObj.author}, ${jokeObj.authorDescription}`);
  console.log("******************\n\n");
};

const id = process.argv[2];

client
  .connect()
  .then(() => fetchJokeById(id))
  .then(showJoke)
  .catch((err) => console.log(err))
  .finally(() => client.end());
