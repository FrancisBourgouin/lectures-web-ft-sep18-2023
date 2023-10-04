# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Easier to find in an object / reference
Relatively easy to convert an object to an array

```js
const thievesArr = [thief, thief];
const thievesObj = { 1: thief, 2: thief };

Object.values(thievesObj);
```

## Seed

```jsx
const thief1 = {
  id:1,
  name:"Arsene Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat"
  imagePath:"arsene.gif"
}

const thief2 = {
  id:2,
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"doug.webp"
}


const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}
```

## Structure

### Helpers!

- getUserByEmail

```jsx
const getUserByEmail = (users, email) => {
  return users[email];
};
```

- authenticateUser

```jsx
const authenticateUserBad = (users, email, password) => {
  const user = getUserByEmail(users, email);

  if (!user) {
    return "No user found";
  }

  if (user.password !== password) {
    return "Password doesn't match";
  }

  return user;
};

const authenticateUser = (users, email, password) => {
  const user = getUserByEmail(users, email);

  if (!user) {
    return { error: "No user found", user: null };
  }

  if (user.password !== password) {
    return { error: "Password doesn't match", user: null };
  }

  return { error: null, user };
};


const {error, user} = authenticateUser(...)

if(error){

}

const result = authenticateUserBad(...)

if(typeof result === "string")
```

- createUser

```jsx
const createUser = (users, newUserInfo) => {
  const newId = Object.values(users).length + 1;

  // const newUser = {id:newId}
  // newUser.name = newUserInfo.name
  // newUser.email = newUserInfo.email
  // newUser.password = newUserInfo.password
  // newUser.imagePath = newUserInfo.imagePath

  const newUser = { id: newId, ...newUserInfo };

  users[newUser.email] = newUser;

  return newUser;
};
```

### HTML
