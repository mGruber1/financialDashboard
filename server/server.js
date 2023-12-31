const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3000;

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "datenjahr",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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
  pool.query("SELECT netto_pt FROM revenues;", (error, results, fields) => {
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
    "SELECT rent, insurance, internet, groceries, investment_plan, car_gas,health FROM fixed_costs;",
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
    "SELECT rent, insurance, internet, groceries, investment_plan, car_gas,health, (rent+insurance+internet+groceries+investment_plan+car_gas+health) AS total_fixed_costs FROM fixed_costs;",
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
    'SELECT AVG(amount) as averageCarGasCosts FROM expenditures WHERE year = 2023 AND type= "car-gas";',
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
    'SELECT amount, month FROM expenditures where type="car-gas" and year = 2023 ORDER BY month;',
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
    'SELECT AVG(amount) as averageInvestmentCosts FROM expenditures WHERE year = 2023 AND type= "investment-plan";',
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
    'SELECT amount, month FROM expenditures where type="investment-plan" and year = 2023 ORDER BY month;',
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
    'SELECT AVG(amount) as averageGroceryCosts FROM expenditures WHERE year = 2023 AND type= "grocery";',
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
    'SELECT amount, month FROM expenditures where type="grocery" and year = 2023 ORDER BY month;',
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
