import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//IMPORT ROUTES
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connect to mongoDB");
  })
  .catch(err => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
