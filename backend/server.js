const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/mongoDB");
const userRouter = require("./src/routes/userRoutes");

const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
