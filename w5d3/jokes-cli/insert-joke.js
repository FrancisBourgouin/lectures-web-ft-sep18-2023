const { Client } = require("pg");

const client = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "sept_jokes",
  port: 5432,
});

const insertJoke = (question, answer, rating, authorId) => {
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

const showJoke = (jokeObj) => {
  console.log("******************");
  console.log(`Question: ${jokeObj.question}`);
  console.log(`Answer: ${jokeObj.answer}`);
  console.log("******************\n\n");
};

// const id = process.argv[2];
const [, , question, answer, rating, authorId] = process.argv;

client
  .connect()
  .then(() => insertJoke(question, answer, rating, authorId))
  .then(showJoke)
  .catch((err) => console.log(err))
  .finally(() => client.end());
