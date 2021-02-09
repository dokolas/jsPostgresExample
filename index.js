const { Client } = require("pg");
//this is how it knows how to connect to DB
const client = new Client({
  user: "dokolas",
  password: "@Micro52",
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
  .then(() =>
    client.query("select * from employees where name = $1", ["Spiro"])
  )
  .then((results) => console.table(results.rows))
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    client.end();
  });

//https://www.youtube.com/watch?v=ufdHsFClAk0
