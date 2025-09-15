import express from "express";
import userRoutes from "./routes/user.route.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();

// MIDDLEWARES
app.use(express.json()); // parse JSON body


const PORT = process.env.PORT 


connectDB();

// ROUTES
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});

