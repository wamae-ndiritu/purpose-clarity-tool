const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/mongoDB");
const userRouter = require("./src/routes/userRoutes");
const purposeRouter = require("./src/routes/purposeRoutes");

const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/purpose-clarity", purposeRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
