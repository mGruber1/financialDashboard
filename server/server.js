const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
