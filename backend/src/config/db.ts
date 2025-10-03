import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI as string;
    if (!uri) throw new Error("MONGO_URI is missing in .env ⚠️");

    await mongoose.connect(uri);
    console.log(" MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection error:", err , "❌");
    process.exit(1);
  }
}
