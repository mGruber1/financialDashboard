const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
const mysql = require("mysql2");
require("mysql2/promise");

const mysqlServerConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: null,
};

const dbConfig = {
  ...mysqlServerConfig,
  database: process.env.DB_DATABASE,
};

const poolWithOutDB = mysql.createPool(mysqlServerConfig);
const poolWithDB = mysql.createPool(dbConfig);

poolWithOutDB.getConnection((err, connection) => {
  if (err) {
    console.log("ERROR: ", err);
    return;
  }

  console.log("Connected to mySQL-Server!");

  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`,
    (error, results, fields) => {
      if (error) {
        console.error("Error creating database:", error);
        connection.release();
        return;
      }

      console.log(`Created database ${process.env.DB_DATABASE}`);

      poolWithDB.getConnection((err, dbConnection) => {
        if (err) {
          console.log("ERROR: ", err);
          return;
        }

        console.log("Connected to Database!");

        dbConnection.query(
          "CREATE TABLE IF NOT EXISTS categories (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), isKPI TINYINT(1), isFixedCost TINYINT(1))",
          (error, results, fields) => {
            if (error) {
              console.error("Error creating database:", error);
              dbConnection.release();
              return;
            }

            console.log(`Created table 'categories'`);
          }
        );

        dbConnection.query(
          "INSERT INTO categories VALUES(null,'income',0,1);",
          (error, results, fields) => {
            if (error) {
              console.error("Error creating database:", error);
              dbConnection.release();
              return;
            }

            console.log(`Inserted into table 'categories'`);
          }
        );

        dbConnection.query(
          "CREATE TABLE IF NOT EXISTS revenues (id INT AUTO_INCREMENT PRIMARY KEY, month INT,year INT, amount DOUBLE )",
          (error, results, fields) => {
            if (error) {
              console.error("Error creating database:", error);
              dbConnection.release();
              return;
            }

            console.log(`Created table 'revenues'`);
          }
        );

        dbConnection.query(
          "CREATE TABLE IF NOT EXISTS fixed_costs (income DOUBLE)",
          (error, results, fields) => {
            if (error) {
              console.error("Error creating database:", error);
              dbConnection.release();
              return;
            }

            console.log(`Created table 'fixed_costs'`);
          }
        );

        dbConnection.query(
          "INSERT INTO fixed_costs (income) VALUES(0);",
          (error, results, fields) => {
            if (error) {
              console.error("Error creating database:", error);
              dbConnection.release();
              return;
            }

            console.log(`Inserted into table 'fixed_costs'`);
          }
        );

        dbConnection.query(
          "CREATE TABLE IF NOT EXISTS expenditures (id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(256), month INT, year INT, amount FLOAT)",
          (error, results, fields) => {
            if (error) {
              console.error("Error creating database:", error);
              dbConnection.release();
              return;
            }

            console.log(`Created table 'expenditures'`);
          }
        );
        dbConnection.release();
      });
    }
  );
  connection.release();
});
