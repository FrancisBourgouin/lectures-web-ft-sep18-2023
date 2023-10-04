const express = require("express");
const cookieParser = require("cookie-parser");

const { thieves } = require("./data");
const { authenticateUser, getUserByEmail, createUser } = require("./helpers");

const app = express();
const port = 3001;

// app.use((req, res, next) => {
//   console.log("A REQUEST CAME IN!");

//   next();
// });

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const user = getUserByEmail(thieves, req.cookies.email);

  const templateVars = { name: undefined, imagePath: undefined };

  if (user) {
    templateVars.name = user.name;
    templateVars.imagePath = user.imagePath;
  }

  return res.render("index", templateVars);
});

/**
 *
 * User creation & Authentication
 *
 */

app.get("/register", (req, res) => {
  return res.render("register");
});

app.post("/register", (req, res) => {
  // const thief1 = {
  //   id:1,
  //   name:"Arsene Lupin",
  //   email:"gentleman@cambrioleur.com",
  //   password:"tophat"
  //   imagePath:"arsene.gif"
  // }
  // const newUserInfo = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  //   imagePath: req.body.imagePath,
  // };

  const newUserInfo = { ...req.body };
  // newUserInfo.age = Number(newUserInfo.age)

  const { error, user } = createUser(thieves, newUserInfo);

  if (error) {
    return res.redirect("/register");
  }

  console.log("NEW USER CREATED", user);
  res.cookie("email", user.email);

  return res.redirect("/");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // const email = req.body.email
  // const password = req.body.password

  const { error, user } = authenticateUser(thieves, email, password);

  if (error) {
    console.log("OH NO", error);
    return res.redirect("/");
  }

  console.log(user);
  res.cookie("email", user.email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");
  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
