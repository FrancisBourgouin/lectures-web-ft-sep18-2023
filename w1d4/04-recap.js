const users = {
  1: { id: 1, name: "Bob" },
  2: { id: 2, name: "Bobby" },
  4: { id: 4, name: "Bobinator" },
};
const userIds = [1, 2, 3];

const listOfUsersResult = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Bobby" },
];

const validUserIds = userIds.filter((userId) => users[userId]); // [1,2]
const listOfUsers = validUserIds.map((userId) => users[userId]);

console.log(validUserIds);
console.log(listOfUsers);

const otherListOfusers = [];
for (const userId of userIds) {
  if (users[userId]) {
    otherListOfusers.push(users[userId]);
  }
}
