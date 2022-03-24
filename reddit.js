const rp = require("request-promise");
const path = require("path");
const fs = require("fs");

const redditPath = path.join(__dirname, "./popular-articles.json");

const array = [""]; // empty array for logging

rp("http://reddit.com/r/popular.json", (err, res, body) => {
  if (err) {
    console.log(err);
  }
  JSON.parse(body).data.children.forEach((item) => {
    console.log(item.data.title);
    console.log(item.data.url);
    console.log(item.data.author_fullname);
    array.push(item.data.title, item.data.url, item.data.author_fullname);
  });

  fs.writeFileSync(redditPath, JSON.stringify(array));
});
