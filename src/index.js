// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("Error ", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running at port:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed", err);
  });

// First way to connect the mongoDB
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     //listeners
//     app.on("error", (err) => {
//       console.log("ERROR: ", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on port ", process.env.PORT);
//     });
//   } catch (err) {
//     console.log("Error: ", err);
//     throw err;
//   }
// })();
