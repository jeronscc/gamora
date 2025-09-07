import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected succesfully!");
    } catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1); // exit with failure
    }

};