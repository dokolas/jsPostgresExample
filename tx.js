const { Client } = require("pg");

const client = new Client({
  user: "dokolas",
  password: "@Micro52",
  host: "localhost",
  database: "jwt",
  port: 5432,
});

const execute = async () => {
  try {
    await client.connect();
    await client.query("BEGIN");
    await client.query("INSERT INTO EMPLOYEES VALUES ($1,$2,$3)", [
      6,
      "Peter",
      38,
    ]);
    console.log("Inserted a New Row");
    await client.query("COMMIT");
  } catch (er) {
    console.log(`There was an error, here it is... ${er}`);
    await client.query("ROLLBACK");
  } finally {
    await client.end();
    console.log("Databased closed");
  }
};

execute();
