const pool = require("../server/db/mysql");

const getYears = (req, res) => {
  pool.query(
    `
      SELECT DISTINCT year FROM revenues;
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

module.exports = {
  getYears,
};
