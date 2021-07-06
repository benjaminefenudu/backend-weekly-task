// ATTEMPTED EXPRESS-SERVER - WORKING
// Utilized res.redirect to redirect from /about-us to /about
// Not yet found conditional syntax to add two or more URL choices to "/"
// like I could do with SWITCH CASEs and IFs.

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

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
  res.redirect("/about")
);

app.get("/contact", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "public", "contact.html"))
);

app.get("*", (req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public", "error.html"))
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
