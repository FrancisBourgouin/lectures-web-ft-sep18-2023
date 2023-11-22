# W10D1 - Rails Review

- Review Rails by building a project
- Existential questions

## Opinions

- Loved the no-lecture (relaxing post-react) x4
- Loved Rails x2
- "Forced" talking to your peers

## Rebuild of TinyApp ( You can (not) build fast )

- User (Browse, Read, Add, Update, Delete) => BREAD / CRUD
- Session RAD
- Urls BREAD => All urls when logged out, User's url when logged in

(cookie-session)

- Authentication

User / Urls => generate scaffold
Session ? password_digest , bcrypt, has_secure_password

MVC => Model / View / Controller

M: User => have many urls => has_many :urls
M: Url => belong to user => belongs_to :user

V: Show the information about the models
V: Give the user a possiblity to interact with the data

C: Actions that we can do on a model (BREAD/CRUD)
