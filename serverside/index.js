
import express  from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import cors from "cors";
const app = express();
import connectToDb from "./config/db";

app.use("/public", express.static("public"));
app.use(express.json());
app.use(cookieParser());

// using middlewares
app.use(
  cors({
    origin: [/netlify\.app$/, /localhost:\d{4}$/],
    credentials: true,
  })
);

//routes
import data from "./routes/data"
app.use("/api", data);
import user from "./routes/user"
app.use("/api", user);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API service running 🚀",
  });
});

connectToDb();
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
