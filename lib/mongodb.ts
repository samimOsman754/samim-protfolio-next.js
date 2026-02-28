import mongoose from "mongoose"

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined.");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB. Database:", mongoose.connection.name);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export default connectDB;