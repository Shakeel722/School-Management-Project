//SERVER FILE
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import schoolRoutes from "./routes/schoolRoutes.js";
import { db } from "./db.js"; 


dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//for image handling
app.use("/schoolImages",express.static("schoolImages") );

//Route handling
app.use("/api/schools" , schoolRoutes);

const PORT = process.env.PORT || 5000;

//db connnection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to Cloud MySQL");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
  }
})();


//starting the server
app.listen(PORT , ()=> { 
    console.log(`server running on port ${PORT}`);
});