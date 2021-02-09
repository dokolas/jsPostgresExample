const { Client } = require("pg");
const client = new Client({
  user: "dokolas",
  password: "@Micro52",
  host: "localhost",
  port: 5432,
  database: "jwt",
});

const execute = async () => {
  try {
    await client.connect();
    console.log("Async Await Connected Successfully");
    // await client.query("insert into employees values ($1, $2)", [1, "Name"]);
    const results = await client.query("select * from employees");
    console.table(results.rows);
  } catch (ex) {
    console.log(`Something wrong happened ${ex}`);
  } finally {
    client.end();
    console.log("Disconnected Successfully");
  }
};

execute();
