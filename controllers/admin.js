const pool = require("../server/db/mysql");

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

const syncFixedCostsCategories = (req, res) => {
  const data = req.body.data;

  if (data[2] === 1) {
    pool.query(
      `ALTER TABLE fixed_costs ADD COLUMN ${data[0]} DOUBLE;`,
      (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send("Internal Server Error");
          return;
        }
      }
    );
  }
};

const insertNewCategory = (req, res) => {
  const data = req.body.data;
  pool.query(
    `INSERT INTO categories (id, name, isKPI, isFixedCost) VALUES (null,'${data[0]}', '${data[1]}', '${data[2]}')`,
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
    `UPDATE fixed_costs SET ${data[0]} = ${data[1]};`,
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

module.exports = {
  updateFixedCosts,
  insertNewCategory,
  syncFixedCostsCategories,
  getCategories,
};
