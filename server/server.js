const path = require("path");
const fs = require("fs");

const Friends = [
  { name: "Jon", message: "My name is Jon!" },
  { name: "Kaley", message: "My name is Kaley!" },
  { name: "Christoph", message: "My name is Christoph!" },
  { name: "Mep", message: "My name is Mep!" },
  { name: "Lou", message: "My name is Lou!" },
];

let friendsPath = path.join(__dirname, "../chirps.json");

fs.writeFile(friendsPath, JSON.stringify(Friends, "\n"), (err) => {
  if (err) console.log(err);
});

fs.readFile(
  friendsPath,
  {
    encoding: "UTF-8",
  },
  (err, Friends) => {
    console.log(Friends);
  }
);
