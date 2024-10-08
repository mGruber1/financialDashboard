const pool = require("../server/db/mysql");

var currentDate = new Date();
const currentYear = currentDate.getFullYear();
currentDate.setDate(0);

function getLastMonth() {
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  return lastMonth.getMonth() + 1;
}

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

const getLastMonthExpenditures = (req, res) => {
  pool.query(
    `
    SELECT type, SUM(amount) AS lastMonthExpenditure
    FROM expenditures
    WHERE year = ${currentYear} AND month = ${getLastMonth()} GROUP BY type;
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
  pool.query(`SELECT income FROM fixed_costs;`, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results[0].income);
  });
};

const getAllFixedCosts = (req, res) => {
  pool.query("SELECT * FROM fixed_costs;", (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results[0]);
  });
};

const getSumFixedCosts = (req, res) => {
  pool.query("SELECT * FROM fixed_costs;", (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }
    delete results[0].income;

    res.json(Object.values(results[0]).reduce((a, b) => a + b));
  });
};

const getSurplusFunds = (req, res) => {
  pool.query("SELECT * FROM fixed_costs;", (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }
    let surplusFunds = 0;
    let income = results[0].income;
    delete results[0].income;

    let fixedCosts = Object.values(results[0]).reduce((a, b) => a + b);
    surplusFunds = income - fixedCosts;
    res.json(surplusFunds);
  });
};

const getIncomeFixedCostsRatio = (req, res) => {
  pool.query("SELECT * FROM fixed_costs;", (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }
    let incomeFixedCostsRatio = 0;
    let income = results[0].income;

    delete results[0].income;

    let fixedCosts = Object.values(results[0]).reduce((a, b) => a + b);
    incomeFixedCostsRatio = (fixedCosts / income) * 100;
    res.json(incomeFixedCostsRatio);
  });
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
  getAllFixedCosts,
  insertMonthlyExpenditures,
  insertMonthlyRevenues,
  getAverageCosts,
  getMonthlyCosts,
  getLastMonthExpenditures,
  getSumFixedCosts,
  getIncomeFixedCostsRatio,
  getSurplusFunds,
};
