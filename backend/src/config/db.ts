import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB(): Promise<void> {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("X  MONGO_URI is missing in .env");

    await mongoose.connect(uri);
    console.log("✓  MongoDB connected successfully");
  } catch (err) {
    console.error("X  MongoDB connection error:", err);
    process.exit(1);
  }
}
