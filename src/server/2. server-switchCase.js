// HTTP SWITCH CASE

const http = require("http");
const fs = require("fs");

const port = 3000;
let status;

const server = http
  .createServer((req, res) => {
    let path = "./";
    switch (req.url) {
      case "/":
        path = path + "index.html";
        status = 200;
        break;
      case "/home":
        path = path + "index.html";
        status = 200;
        break;
      case "/about":
        path = path + "about.html";
        status = 200;
        break;
      case "/about-us":
        path = path + "about.html";
        status = 200;
        break;
      case "/contact":
        path = path + "contact.html";
        status = 200;
        break;
      default:
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
