const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "datenjahr",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

var currentDate = new Date();
const currentYear = currentDate.getFullYear();
currentDate.setDate(0);
var lastMonth = currentDate.getMonth() + 1;

app.use(
  cors({
    origin: "http://localhost",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/api/ConnectionTest", (req, res) => {
  res.json({ status: 0 });
});

app.get("/api/getMonthlyCosts", (req, res) => {
  pool.query(
    `
    SELECT month, SUM(amount) AS total_spending
    FROM expenditures
    WHERE year = ${currentYear}
    GROUP BY month
    ORDER BY month;
    
  `,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getIncomeRate", (req, res) => {
  pool.query(`SELECT amount FROM revenues WHERE month = ${lastMonth} AND year = ${currentYear};`, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json(results);
  });
});

app.get("/api/getFixedCosts", (req, res) => {
  pool.query(
    "SELECT rent, insurance, grocery,investment_plan, car_gas, health, bank_deposit, shopping,leisure_spending FROM fixed_costs;",
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getSumFixedCosts", (req, res) => {
  pool.query(
    "SELECT rent, insurance, grocery,investment_plan, car_gas, health, bank_deposit, shopping,leisure_spending,(rent + insurance + grocery + investment_plan + car_gas + health + bank_deposit + shopping + leisure_spending) AS total_fixed_costs FROM fixed_costs; ",
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getAverageCarGasCosts", (req, res) => {
  pool.query(
    `SELECT AVG(amount) as averageCarGasCosts FROM expenditures WHERE year = ${currentYear} AND type= "car-gas";`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getMonthlyCarGasCosts", (req, res) => {
  pool.query(
    `SELECT amount, month FROM expenditures where type="car-gas" and year = ${currentYear} ORDER BY month;`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getAverageInvestmentCosts", (req, res) => {
  pool.query(
    `SELECT AVG(amount) as averageInvestmentCosts FROM expenditures WHERE year = ${currentYear} AND type= "investment-plan";`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getMonthlyInvestmentPlanCosts", (req, res) => {
  pool.query(
    `SELECT amount, month FROM expenditures where type="investment-plan" and year = ${currentYear} ORDER BY month;`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getAverageGroceryCosts", (req, res) => {
  pool.query(
    `SELECT AVG(amount) as averageGroceryCosts FROM expenditures WHERE year = ${currentYear} AND type= "grocery";`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.get("/api/getMonthlyGroceryCosts", (req, res) => {
  pool.query(
    `SELECT amount, month FROM expenditures where type="grocery" and year = ${currentYear} ORDER BY month;`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
