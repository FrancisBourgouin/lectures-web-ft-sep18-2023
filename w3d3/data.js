const thief1 = {
  id: 1,
  name: "Arsene Lupin",
  email: "gentleman@cambrioleur.com",
  password: "tophat",
  imagePath: "arsene.gif",
};

const thief2 = {
  id: 2,
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: "rosa",
  imagePath: "doug.webp",
};

const thieves = {
  "gentleman@cambrioleur.com": thief1,
  "pontiac@bandit.com": thief2,
};

module.exports = { thief1, thief2, thieves };
