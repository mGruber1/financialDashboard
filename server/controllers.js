const pool = require("./db/mysql");

var currentDate = new Date();
const currentYear = currentDate.getFullYear();
currentDate.setDate(0);
var lastMonth = currentDate.getMonth() + 1;

const getMonthlyExpenditures = (req, res) => {
  pool.query(
    `
    SELECT month, SUM(amount) AS monthly_expenditures
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
};

const getMonthlyRevenues = (req, res) => {
  pool.query(
    `
        SELECT month, SUM(amount) AS monthly_revenues
        FROM revenues
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
};

const getIncomeRate = (req, res) => {
  pool.query(
    `SELECT amount FROM revenues WHERE month = ${lastMonth} AND year = ${currentYear};`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
};

const getFixedCosts = (req, res) => {
  pool.query(
    "SELECT rent, insurance, grocery,investment_plan, car_gas, health, savings, shopping,leisure_spending FROM fixed_costs;",
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
};

const getSumFixedCosts = (req, res) => {
  pool.query(
    "SELECT rent, insurance, grocery,investment_plan, car_gas, health, savings, shopping,leisure_spending,(rent + insurance + grocery + investment_plan + car_gas + health + savings + shopping + leisure_spending) AS total_fixed_costs FROM fixed_costs; ",
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.json(results);
    }
  );
};

const insertMonthlyExpenditures = (req, res) => {
  const data = req.body.data;

  pool.query(
    `INSERT INTO expenditures (type, month, year, amount) VALUES ('${data[0]}', ${data[1]}, ${data[2]}, ${data[3]})`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }
    }
  );
  res.json({ status: 0, message: "Data inserted successfully" });
};

const insertMonthlyRevenues = (req, res) => {
  const data = req.body.data;
  pool.query(
    `INSERT INTO revenues (year, month, amount) VALUES ('${data[0]}', ${data[1]}, ${data[2]})`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }
    }
  );

  res.json({ status: 0, message: "Data inserted successfully" });
};

// ADMIN
const getCategories = (req, res) => {
  pool.query(`SELECT * FROM categories`, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json(results);
  });
};

const insertNewCategory = (req, res) => {
  const data = req.body.data;
  pool.query(
    `INSERT INTO categories (name, description, show_KPI) VALUES ('${data[0]}', '${data[1]}', '${data[2]}')`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }
    }
  );

  res.json({ status: 0, message: "Data inserted successfully" });
};

const updateFixedCosts = (req, res) => {
  const data = req.body.data;
  pool.query(
    `UPDATE fixed_costs SET ${data[0]} = ${data[1]}`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        return;
      }
    }
  );
  res.json({ status: 0, message: "Data inserted successfully" });
};

const getAverageCosts = (req, res) => {
  const { query } = req.body;
  pool.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
};

const getMonthlyCosts = (req, res) => {
  const { query } = req.body;
  pool.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
};

module.exports = {
  getMonthlyExpenditures,
  getMonthlyRevenues,
  getIncomeRate,
  getFixedCosts,
  getSumFixedCosts,
  insertMonthlyExpenditures,
  insertMonthlyRevenues,
  getCategories,
  insertNewCategory,
  updateFixedCosts,
  getAverageCosts,
  getMonthlyCosts,
};
