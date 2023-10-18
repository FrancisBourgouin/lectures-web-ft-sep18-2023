// Import the necessary packages
// import { Pool, Client } from "pg";

const { Pool, Client } = require("pg");
// SQL logic to extract the jokes from the database

// I want to store it in an array of objects

// ...
const client = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "sept_jokes",
  port: 5432,
});

const fetchAllJokes = () => {
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

const showJoke = (jokeObj) => {
  console.log("******************");
  console.log(`Question: ${jokeObj.question}`);
  console.log(`Answer: ${jokeObj.answer}`);
  console.log(`Author: ${jokeObj.author}, ${jokeObj.authorDescription}`);
  console.log("******************\n\n");
};

const showAllJokes = (jokeList) => {
  for (const joke of jokeList) {
    showJoke(joke);
  }
};

client
  .connect()
  .then(fetchAllJokes)
  .then(showAllJokes)
  .catch((err) => console.log(err))
  .finally(() => client.end());

// Profit!

// Async/Await syntax sugar for promises
