// CIT281 - Lab 8
// Garrett Arnold

const fastify = require("fastify")();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

fastify.get("/photos", (request, reply) => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {console.log(json);

      reply
      .code(200)
      .header("Content-Type", "text/json; charset=utf-8")
      .send({ error: "", statusCode: 200, photos: json});
    })
    .catch((error) => {
      reply
      .code(200)
      .header("Content-Type", "text/json; charset=utf-8")
      .send({ error: err, statusCode: 404, photos: []});
    });
});

fastify.get("/photos/:id", (request, reply) => {
  fetch("https://jsonplaceholder.typicode.com/photos" + id)
  .then((response) => response.json())
  .then((photo) => {
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", statusCode: 200, photos: json});
  })
  .catch((error) => {
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({ error: err, statusCode: 404, photos: []});
  });
  
  const { id = "" } = request.params;
  reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({ error: "ERROR", statusCode: 404 });
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
