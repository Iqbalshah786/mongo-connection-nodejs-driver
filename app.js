import { MongoClient } from "mongodb";
import { uri } from "./atlas_uri.js";

const client = new MongoClient(uri);

const dbname = "dbname";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to ${dbname} database`);
    const dbs = await client.db().admin().listDatabases();
    console.table(dbs.databases);
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.log("Error connecting to database", error);
  } finally {
    await client.close();
  }
};

main();
