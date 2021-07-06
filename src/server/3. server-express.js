// ATTEMPTED - NOT YET WORKING

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

<<<<<<< HEAD
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
=======
app.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"))
);

app.get("/home", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"))
);

app.get("/about", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "about.html"))
);

app.get("/about-us", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "about.html"))
);

app.get("/contact", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "contact.html"))
);

app.get("*", (req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public", "error.html"))
);

>>>>>>> refs/remotes/origin/main
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
