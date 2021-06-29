// METHOD 1 - HTTPS
const https = require("https");
let data = "";
https.get("https://jsonplaceholder.typicode.com/users", (res) => {
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
});

// // METHOD 2 - NODE-FETCH
// const fetch = require("node-fetch");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((json) => {
//     for (let i = 0; i < json.length; i++) {
//       console.log(json[i].name);
//     }
//   });

// METHOD 3 - XMLHTTPREQUEST - Deprecated - Works on Client-side
// const request = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/users";
// request.open("GET", url);
// request.send();
// request.onload = () => {
//   console.log(request);
//   if (request.status === 200) {
//     users = JSON.parse(request.response);
//     for (let i = 0; i < users.length; i++) {
//       console.log(users[i].name);
//     }
//   } else {
//     console.log(`error ${request.status}`);
//   }
// };
