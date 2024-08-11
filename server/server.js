const path = require("path");
const dotenv = require("dotenv");

const envPath = path.resolve(__dirname, "../.env");

dotenv.config({ path: envPath });

const express = require("express");
const cors = require("cors");
const dataRoutes = require("../routes/data");
const adminRoutes = require("../routes/admin");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: `*`,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", dataRoutes);
app.use("/api", adminRoutes);
app.listen(port, () => {
  console.log(
    `Server is running at http://${process.env.BACKEND_HOST}:${port}`
  );
});
