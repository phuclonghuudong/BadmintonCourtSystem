const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const port = 2410;
const app = express();

const url = process.env.SERVER_URL;
console.log(url);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.get("/", (req, res) => {
  res.send("Badminton server management system.");
});

app.listen(port, () => {
  console.log(`Server is running at ${url}${port}`);
});
