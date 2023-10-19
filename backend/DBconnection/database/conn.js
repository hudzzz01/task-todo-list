import { Sequelize } from "sequelize";

const conDb = {
    database : "todo-list",
    username : "root",
    password : "",
    host : "localhost"
}

const db = new Sequelize(conDb.database, conDb.username, conDb.password, {
    host: conDb.host,
    dialect: "mysql"
  });

  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
export default db;