// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

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
