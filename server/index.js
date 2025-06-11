const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const port = 2410;
const app = express();
app.use(express.json());

const url = process.env.SERVER_URL;
const khachHangRoutes = require("./routes/KhachHang.routes");
const nhomQuyenRoutes = require("./routes/NhomQuyen.routes");

const errorHandler = require("./middlewares/errorHandler");

const timeZoneMiddleware = require("./middlewares/timeZone");
app.use(timeZoneMiddleware);

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

// Routes
app.use("/khach-hang", khachHangRoutes);
app.use("/nhom-quyen", nhomQuyenRoutes);

app.get("/", (req, res) => {
  res.send("Badminton server management system.");
});

app.listen(port, () => {
  console.log(`Server is running at ${url}${port}`);
});

app.use(errorHandler);
