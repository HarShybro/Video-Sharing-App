import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//configuration
app.use(
  cors({
    origin: process.env.CORS_ORGIN,
    credentials: true,
  })
);

//json from the (form) body
app.use(express.json({ limit: "16kb" }));

//special data from the url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//for storing file , image ,assest in the local folder
app.use(express.static("public"));

//access the user cookies from the server
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);

//http://localhost:8000/api/v1/users/register

// app.use("/api/v1/users", upload2.single("profileImageUrl"), userRouter);
// app.use("/api/v1/users", upload.single("coverImage"), blogRouter);

export default app;
