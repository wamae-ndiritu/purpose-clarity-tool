const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/mongoDB");
const userRouter = require("./src/routes/userRoutes");
const purposeRouter = require("./src/routes/purposeRoutes");
const purposeStoryRouter = require("./src/routes/purposeStoryRoutes");

const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/purpose-clarity", purposeRouter);
app.use("/api/v1/purpose-story", purposeStoryRouter);

app.get("/api/v1/test", (req, res) => {
  res.json({
    name: "MPS & PCT tools",
    version: "1",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
