const https = require('https');

https.get("https://jsonplaceholder.typicode.com/users", (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.json('end', () => {
    for (let i = 0; i < json.length; i++) {
            console.log(json[i].name);
          }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});



// // METHOD 2
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }



// // METHOD 3
// const request = require('request');

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });


// // METHOD 4
// const fetch = require("node-fetch");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((json) => {
//     for (let i = 0; i < json.length; i++) {
//       console.log(json[i].name);
//     }
//   });
