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
}

const getIncomeRate = (req, res) => {
    pool.query(`SELECT amount FROM revenues WHERE month = ${lastMonth} AND year = ${currentYear};`, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
            return;
        }

        res.json(results);
    });
}

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
}

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
}

const getAverageCarGasCosts = (req, res) => {
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
}

const getMonthlyCarGasCosts = (req, res) => {
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
}

const getAverageInvestmentCosts = (req, res) => {
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
}

const getMonthlyInvestmentPlanCosts = (req, res) => {
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
}

const getAverageGroceryCosts = (req, res) => {
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
}

const getAverageShoppingCosts = (req, res) => {
    pool.query(
        `SELECT AVG(amount) as averageShoppingCosts FROM expenditures WHERE year = ${currentYear} AND type= "shopping";`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.json(results);
        }
    );
}

const getMonthlyShoppingCosts = (req, res) => {
    pool.query(
        `SELECT amount, month FROM expenditures where type="shopping" and year = ${currentYear} ORDER BY month;`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.json(results);
        }
    );
}

const getAverageLeisureCosts = (req, res) => {
    pool.query(
        `SELECT AVG(amount) as averageLeisureCosts FROM expenditures WHERE year = ${currentYear} AND type= "leisure-spending";`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.json(results);
        }
    );
}
const getMonthlyLeisureCosts = (req, res) => {
    pool.query(
        `SELECT amount, month FROM expenditures where type="leisure-spending" and year = ${currentYear} ORDER BY month;`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.json(results);
        }
    );
}

const getMonthlyGroceryCosts = (req, res) => {
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
}

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
}

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
}

module.exports = {
    getMonthlyExpenditures,
    getMonthlyRevenues,
    getIncomeRate,
    getFixedCosts,
    getSumFixedCosts,
    getAverageCarGasCosts,
    getMonthlyCarGasCosts,
    getAverageInvestmentCosts,
    getMonthlyInvestmentPlanCosts,
    getAverageGroceryCosts,
    getMonthlyGroceryCosts,
    insertMonthlyExpenditures,
    insertMonthlyRevenues,
    getAverageShoppingCosts,
    getMonthlyShoppingCosts,
    getAverageLeisureCosts,
    getMonthlyLeisureCosts

};
