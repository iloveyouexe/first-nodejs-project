const rp = require("request-promise");
const path = require("path");
const fs = require("fs");

rp("https://www.reddit.com/r/popular.json")
  .then((res) => JSON.parse(res))
  .then((info) => {
    info.data.children.forEach((article) => {
      //article into data into url

      if (path.extname(article.data.url)) {
        //from hint, extname returns the extension of the path
        let dataName = `${article.data.id}${path.extname(article.data.url)}`;
        //this will be the name of the file

        rp(article.data.url, { encoding: "binary" }).then((media) => {
          fs.writeFile(
            path.join(__dirname, `./downloads/${dataName}`),
            media,
            { encoding: "binary" },
            (err) => {
              if (err) console.log(err);
            }
          );
        });
      }
    });
  })
  .catch((e) => console.log(e));
