const { Client } = require("pg");
//this is how it knows how to connect to DB
const client = new Client({
  user: "dokolas",
  passowrd: "@Micro52",
  host: "localhost",
  port: 5432,
  database: "jwt",
});

//connect to the database, it's a promise
client
  .connect()
  .then(() => {
    console.log("connected!");
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    client.end();
  });
