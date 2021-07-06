// ATTEMPTED - NOT YET WORKING

const express = require("express");
const app = express();
const fs = require("fs");

const port = process.env.PORT || 3000;

app.get((req, res) => {
  routes = {
    "/": "index.html",
    "/home": "index.html",
    "/about": "about.html",
    "/about-us": "about.html",
    "/contact": "contact.html",
  }

  var url = req.url;

  if (routes[url] !== undefined) {
    fs.readFile(route[url].value, (err, data) => {
      if (err) {
        return console.error(err);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Client requested ${url}.`);
      console.log(`Client was served ${route[url]}.`);
    });
  } else {
    fs.readFile("./error.html", (err, data) => {
      if (err) {
        return console.error(err);
      }
      res.writeHead(status, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Client requested ${url}.`);
      console.log(`Client was served ${route[url]}.`);
    });
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
