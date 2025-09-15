import express from "express";
import userRoutes from "./routes/user.route.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT 

connectDB();

// MIDDLEWARES
app.use(express.json()); // parse JSON body
app.use(rateLimiter);

// ROUTES
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});

