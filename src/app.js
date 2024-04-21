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

export default app;
