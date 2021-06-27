const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].name);
    }
  });
