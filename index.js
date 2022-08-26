const express = require("express");
const app = express();
require('dotenv').config()

const PORT = process.env.PORT;


const cors = require("cors");

app.use(express.json());
app.use(cors());

// routes

const googleSheetRouter = require("./routes/googleSheet");
const ordersSheetRouter = require("./routes/orders");

app.use("/googleSheet", googleSheetRouter);
app.use("/orders", ordersSheetRouter);

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
