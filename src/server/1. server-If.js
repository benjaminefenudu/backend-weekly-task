// HTTP IF - ELSE IF

const http = require("http");
const fs = require("fs");

const port = 3000;
let status;

const server = http
  .createServer((req, res) => {
    let path = "./";
    if (req.url === "/") {
      path = path + "index.html";
      status = 200;
    } else if (req.url === "/home") {
      path = path + "index.html";
      status = 200;
    } else if (req.url === "/about") {
      path = path + "about.html";
      status = 200;
    } else if (req.url === "/about-us") {
      path = path + "about.html";
      status = 200;
    } else if (req.url === "/contact") {
      path = path + "contact.html";
      status = 200;
    } else {
      path = path + "error.html";
      status = 404;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        return console.error(err);
      }
      res.writeHead(status, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Client requested ${req.url}.`);
      console.log(`Client was served ${path}.`);
    });
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
