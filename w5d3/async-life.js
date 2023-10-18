const work = async () => {
  let res = undefined;
  try {
    await client.connect();

    res = await client.query("SELECT NOW()");
  } catch (e) {
    console.log(e);
  }

  await client.end();
  return res;
};

// const clientP = new Client()

// clientP
//   .connect()
//   .then(() => client.query("SELECT NOW()"))
//   .then(res => ())
//   .catch(err => console.log(err))
//   .finally(() => client.end())

// const someFunction = () => {
//   return 2 + 2;
// };

// const someResult = someFunction();

// console.log(someResult);

const someOtherFunction = async () => {
  return 2 + 2;
};

const someOtherResult = someOtherFunction();

console.log(someOtherResult);
